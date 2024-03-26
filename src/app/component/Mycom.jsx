"use client";
import { useStore } from "@/app/state/Store";
import CalenderList from "./calender";
import "../sass/calender.scss";

import KakaoMap from "./Kakao-map";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faStarOfDavid,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import djaldata from "../createdata/createdata.json";


import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

import mydbaxios from "axios";
import Seoulapicom from "./Seoulapicom";

import { v4 as uuidv4 } from "uuid";

import { useSession } from "next-auth/react";

function Mycom(props) {
  
  const [mongodbdata, setMongodbdata] = useState([])
  const { data: session, status } = useSession();
  const [res, setRes] = useState([])
  
  const [like, setLike] = useState({ idstate: uuidv4() });

  
  //로그인한 사람의 정보만 가져온다.
  useEffect(() => {
    dataCrltwo('user',session?.user.email)
  }, [like])

   async function dataCrltwo(type, data) {
    let res;
    switch (type) {
      case "user":
        res = await mydbaxios.get(`/api?email=${data}`).catch(function (error) {
          console.log(error);
        });
        break;
    }
    setRes(res.data)
    setMongodbdata(res.data)
  }


  //켈린더 스테이트
  const [stastartday, setStastartday] = useState("");

  const { timetam } = useStore();

  const router = useRouter();



  //캘린더 onoff
  const [isOpencalender, setIsOpencalender] = useState(false);

  const toggleCalendarBlock = () => {
    setIsOpencalender(!isOpencalender);
  };


  const [clickrandertab, setClickrandertab] = useState(0)
  const [clickarea, setClickarea] = useState("");
  function areaclick(e, i) {
    
    setClickrandertab(i)
    setClickarea(e.target.textContent);
  }

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


  
  
  async function dataCrl(type, data) {
    console.log(data);
    let res;
    switch (type) {
      case "all":
        res = await mydbaxios.get("/api");
        break;
      case "one":
        res = await mydbaxios.get("api/0");
        break;
      case "two":
        res = await mydbaxios.get("api/two/" + data);
        break;
      case "insert":
        res = await mydbaxios.post("/api", data);
        break;
      case "delete":
        res = await mydbaxios.delete("/api/" + data);
        break;
      case "put":
        res = await mydbaxios.put("/api/0", { id: "0", title: "10프로젝트" });
        break;
    }
 
    
  }




  let likedata;
  let likeclick;
  const handleClick = (e, item) => {
    e.stopPropagation();
    console.log(!e.target.previousSibling.checked);
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
  

      console.log(item.check);
      setLike(!like);
      dataCrl("two", item.DATE);
    }
  };



  const aria = [
    "강북구, 중구, 용산구, 성동구, 광진구, 동대문구, 중랑구, 성북구, 종로구, 도봉구, 노원구, 은평구, 서대문구, 마포구, 양천구, 강서구, 구로구, 금천구, 영등포구, 동작구, 관악구, 서초구, 강남구, 송파구, 강동구",
  ];
  let dday;
  return (
    <div className="mycomscss">
      <div>
        <FontAwesomeIcon icon={faStarOfDavid} />
        <p onClick={toggleCalendarBlock}>
          출발일 &nbsp;&nbsp;{stastartday.year}년 {stastartday.month} 월
          {stastartday.day}일{" "}

            <FontAwesomeIcon icon={faChevronDown} 
              className={isOpencalender ? "active" : ""}
            />
        </p>
        {
          isOpencalender && (<CalenderList setStastartday={setStastartday} stastartday={stastartday} />)
        }
      </div>
      <div>
        <KakaoMap
          LOT={37.5726241}
          LAT={126.9760053}
          ORG_NAME={"세종문화회관"}
          MAIN_IMG={
            "https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=781b7dc965af4988af0b26d6b74e9414&thumb=Y"
          }
        />
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
                  <div className="area" onClick={(e)=> {areaclick(e, i)}}>
                    <p
                      style={{
                        backgroundColor: clickrandertab === i ? "#84b1e0" : "#eef5f8",
                        color: clickrandertab === i ? '#fff' : '#000',
                        borderRadius: clickrandertab === i ? '15px' : '15px',
                            
                      }}
                    >
                      {a}
                      <Image
                        onClick={() => {
                          router.push("/my/" + i);
                        }}
                        src="/mycom/gallery.png"
                        width={30}
                        height={30}
                        alt="a"
                      ></Image>
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>

      {/* 클릭한 지역구만 */}
      {clickarea ? (
   
        <div className="seoulapi1">
          <p>
            <FontAwesomeIcon icon={faMapMarkedAlt} width="20" />
            서울 {clickarea} 축제,&nbsp;&nbsp;등록한 축제&nbsp;&nbsp;({mongodbdata.length === 0 ? "Loging...." : mongodbdata.length})
          </p>
          
            {mongodbdata
              .filter((obj, i) => {
                return clickarea.trim() === obj.GUNAME;
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
                          <Seoulapicom handleClick={handleClick} dday={dday} objj={objj} res={res}  />
                        </div>
                        <p>{objj.DATE}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          
        </div>
      ) : (
        // {/* 처음디폴트값 */}
        <div className="seoulapi1">
          <p>
            <FontAwesomeIcon icon={faMapMarkedAlt} width="20" />
            서울 축제,&nbsp;&nbsp;등록한 축제&nbsp;&nbsp;({mongodbdata.length === 0 ? "Loging...." : mongodbdata.length})
          </p>
          
            {mongodbdata?.slice(0, 3).map((obj, i) => {
              dday = new Date(obj.DATE.split("~")[0]).getTime() - timetam;
              dday = Math.ceil(dday / (1000 * 60 * 60 * 24)); 

              return (
                <div key={i}>
                  <div>
                    <Link href="/detail"
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
                      }}>
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
    </div>
  );
}

export default Mycom;
