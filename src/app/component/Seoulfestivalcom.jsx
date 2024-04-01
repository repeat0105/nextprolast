"use client";

import { useEffect, useState } from "react";
import "@/app/sass/seoulfestivalcom.scss";
import { useStore } from "@/app/state/Store";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

import dbaxios from "axios";

import { v4 as uuidv4 } from "uuid";

import { useSession } from "next-auth/react";

import Seoulapicom  from './Seoulapicom.jsx'




export default function Product({ props }) {
  const { action,  testdata, timetam, allheaderaria } = useStore();

  const { data: session, status } = useSession();
 

  const [likestate, setLikestate] = useState(false);

  
  const [res, setRes] = useState([])


  useEffect(() => {
 
    window.location.reload();
  }, []);


  useEffect(() => {
    dataCrl('user',session.user.email)
  }, [])


  useEffect(() => {
    action("get");

    return () => {
      setLikestate(!likestate);
    };
  }, []);



  const detaillocalstorege = (item) => {
    localStorage.setItem("GUNAME", item.GUNAME);
    localStorage.setItem("MAIN_IMG", item.MAIN_IMG);
    localStorage.setItem("LOT", item.LOT);
    localStorage.setItem("LAT", item.LAT);
    localStorage.setItem("DATE", item.DATE);
    localStorage.setItem("ORG_NAME", item.ORG_NAME);
    localStorage.setItem("HMPG_ADDR", item.HMPG_ADDR);
    localStorage.setItem("TITLE", item.TITLE);
    localStorage.setItem("ORG_LINK", item.ORG_LINK);
  };

  const [clickarea, setClickarea] = useState("");

  const [clickrandertab, setClickrandertab] = useState(0)

  function areaclick(e, i) {
    setClickrandertab(i)
    setClickarea(e.target.textContent);
  }

  
  useEffect(() => {
    if(allheaderaria.e !== "강남구"){
      setClickarea(allheaderaria.e)
      setClickrandertab(allheaderaria.i)
    }
  },[allheaderaria.e])


  const [aria, setAria] = useState([
    "강북구, 중구, 용산구, 성동구, 광진구, 동대문구, 중랑구, 성북구, 종로구, 도봉구, 노원구, 은평구, 서대문구, 마포구, 양천구, 강서구, 구로구, 금천구, 영등포구, 동작구, 관악구, 서초구, 강남구, 송파구, 강동구",
  ]);


  let dday;
 
  async function dataCrl(type, data) {

    let res;
    switch (type) {
      case "user":
        res = await dbaxios.get(`/api?email=${data}`);
        break;
      case "two":
        res = await dbaxios.get("api/two/" + data);
        break;
      case "insert":
        res = await dbaxios.post("/api", data);
        break;
      case "delete":
        res = await dbaxios.delete("/api/" + data);
        break;
      case "put":
        res = await dbaxios.put("/api/0", { id: "0", title: "10프로젝트" });
        break;
    }
    setRes(res.data)
    
  }
  

  const [like, setLike] = useState({ idstate: uuidv4() });

  let likedata;

  let likeclick;
  const handleClick = (e, item) => {
    e.stopPropagation();
    
    if (!e.target.previousSibling.checked) {
      likeclick = { idstate: uuidv4() };
      setLike(likeclick);


      likedata = {
        email: session.user.email,
        id: like.idstate,
        ...item,
        check: !item.check 
      };

      dataCrl("insert", likedata);
    } else {

      dataCrl("two", item.DATE);
    }
  };

  
  return (
    <>
      <div className="festivaltitletop">
        <div className="festivaltitle">
          <p>찾고 싶은 축제!</p>
          <p>지역을 선택해주세요!</p>
        </div>
      </div>
 
      <div className="areatopbest">
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="swiper"
        >
          <div className="areatop">
            {aria[0].split(", ").map((a, i) => {
              return (
                <SwiperSlide key={i} className="swiperwidth">
                  <div className="area" onClick={(e)=>{areaclick(e,i)}}>
                    <p
                      style={{
                        backgroundColor: clickrandertab === i ? "#0056b3" : "#eef5f8",
                        color: clickrandertab === i ? '#fff' : '#000',
                        borderRadius: clickrandertab === i ? '15px' : '15px',
                            
                      }}
                    >{a}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
      


      {clickarea ? (
            
        <div className="seoulapi">
          {
            testdata.length === 0 
            ?  
        
            <div className="Parent-loading">
      
              <div className="loding-animation-holder">
                  <div className="loading-animator"></div>
                  <div className="loading-animator"></div>
                  <div className="loading-animator"></div>
                  <div className="loading-animator"></div>
                  <div className="middle-circle"></div>
              </div>
              <div className="lod">
                <h1>Loading</h1>
              </div>
          </div>
            :  
            <p>
              <FontAwesomeIcon icon={faMapMarkedAlt} width="20" />
              서울 {clickarea} 축제,&nbsp;&nbsp; 전체 축제&nbsp;&nbsp;({testdata.length})
            </p>
            
          }
          
      
          {testdata
            .filter((obj, i) => {
              
              return clickarea === obj.GUNAME;
            })
            
            .map((objj, j) => {
              
              dday = new Date(objj.DATE.split("~")[0]).getTime() - timetam;
              dday = Math.ceil(dday / (1000 * 60 * 60 * 24));

              return (
                <div key={j}>
                  <div>
                    <Link
                      href="/detail"
                      onClick={() => {
                        detaillocalstorege({
                          GUNAME: objj.GUNAME,
                          MAIN_IMG: objj.MAIN_IMG,
                          LOT: objj.LOT,
                          LAT: objj.LAT,
                          DATE: objj.DATE,
                          ORG_NAME: objj.ORG_NAME,
                          HMPG_ADDR: objj.HMPG_ADDR,
                          dday: dday,
                          TITLE: objj.TITLE,
                          ORG_LINK: objj.ORG_LINK,
                        });
                      }}
                    >
                      <img
                        src={objj.MAIN_IMG}
                        alt="backimg"
                        width="300"
                        height="300"
                      />
                      <div>
                        <div>
                          <div>
                            <p>
                              D{dday >= 0 ? "-" + dday : "+" + Math.abs(dday)}
                            </p>
                          </div>

                       
                          <p>
                            {objj.IS_FREE === "유료"
                              ? objj.IS_FREE
                              : objj.IS_FREE}
                          </p>
                        </div>
                      </div>
                    </Link>
                    <div>
                      <div>
                        <p>{objj.ORG_NAME}</p>
                        <Seoulapicom handleClick={handleClick} dday={dday} objj={objj} res={res}/>
                    
                      </div>
                      <p>{objj.DATE}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
       
      ) : (
       
        <div className="seoulapi">
          {
            testdata.length === 0 
            ?  
        
            <div className="Parent-loading">
      
              <div className="loding-animation-holder">
                  <div className="loading-animator"></div>
                  <div className="loading-animator"></div>
                  <div className="loading-animator"></div>
                  <div className="loading-animator"></div>
                  <div className="middle-circle"></div>
              </div>
              <div className="lod">
                <h1>Loading</h1>
              </div>
          </div>
            :  
            <p>
              <FontAwesomeIcon icon={faMapMarkedAlt} width="20" />
              서울 {clickarea} 축제,&nbsp;&nbsp; 전체 축제&nbsp;&nbsp;({testdata.length})
            </p>
            
          }
          {testdata.slice(0, 5).map((obj, i) => {
            dday = new Date(obj.DATE.split("~")[0]).getTime() - timetam;
            dday = Math.ceil(dday / (1000 * 60 * 60 * 24)); 
            return (
              <div key={i}>
                <div>
                  <Link 
                    href="/detail"
                    onClick={() => {
                      detaillocalstorege({
                        GUNAME: obj.GUNAME,
                        MAIN_IMG: obj.MAIN_IMG,
                        LOT: obj.LOT,
                        LAT: obj.LAT,
                        DATE: obj.DATE,
                        ORG_NAME: obj.ORG_NAME,
                        HMPG_ADDR: obj.HMPG_ADDR,
                        dday: dday,
                        TITLE: obj.TITLE,
                        ORG_LINK: obj.ORG_LINK,
                      });
                    }}
                    >
                    <img
                      src={obj.MAIN_IMG}
                      alt="backimg"
                      width="300"
                      height="300"
                    />
                    <div>
                      <div>
                        <div>
                          <p>
                            D{dday >= 0 ? "-" + dday : "+" + Math.abs(dday)}
                          </p>
                        </div>

                        <p>
                          {obj.IS_FREE === "유료" ? obj.IS_FREE : obj.IS_FREE}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <div>
                    <div>
                      <p>{obj.ORG_NAME}</p>
                      <Seoulapicom handleClick={handleClick} dday={dday} objj={obj} res={res}/>
                    </div>
                    <p>{obj.DATE}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
       
      )}
    </>
  );
}




