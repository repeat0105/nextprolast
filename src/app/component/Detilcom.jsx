"use client";

import React, { useState, useEffect } from "react";

import createdataa from "../createdata/createdata.json";
import { useStore } from "../state/Store";

import Image from "next/image";
import "../sass/detilcom.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import {
  faAddressBook,
  faAddressCard,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { faPhone, faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import KakaoMap from "./Kakao-map";
import { useRouter } from "next/navigation";
import Camera from "./Camera";

function Detilcom(props) {
  const { action, seouldata, testdata, timetam } = useStore();
  const router = useRouter();

  useEffect(() => {
    action("get");
  }, []);

  const [datas, setDatas] = useState({
    GUNAME: "",
    MAIN_IMG: "",
    LOT: 0,
    LAT: 0,
    ORG_NAME: "",
    DATE: "",
    HMPG_ADDR: "",
    TITLE: "",
    ORG_LINK: "",
  });
  const [finddata, setFinddata] = useState({});

  useEffect(() => {
    setDatas({
      GUNAME: localStorage.getItem("GUNAME"),
      MAIN_IMG: localStorage.getItem("MAIN_IMG"),

      LOT: localStorage.getItem("LOT"),
      LAT: localStorage.getItem("LAT"),
      ORG_NAME: localStorage.getItem("ORG_NAME"),
      DATE: localStorage.getItem("DATE"),
      HMPG_ADDR: localStorage.getItem("HMPG_ADDR"),
      TITLE: localStorage.getItem("TITLE"),
      ORG_LINK: localStorage.getItem("ORG_LINK"),
    });
  }, []);

  let dday = new Date(datas.DATE.split("~")[0]).getTime() - timetam;
  dday = Math.ceil(dday / (1000 * 60 * 60 * 24));

  useEffect(() => {
    let finddataa = createdataa.detailjsondata.filter((a, i) => {
      return datas.GUNAME === a.GUNAME && datas.MAIN_IMG === a.MAIN_IMG;
    });
    setFinddata(finddataa);
  }, [datas.GUNAME]);
  

  let addressone = finddata[0]?.adress.split("/")[0];
  let addresstwo = finddata[0]?.adress.split("/")[1];

  const backFunction = () => {
    router.back();
  };

  const adresspopup = (e) => {
    e.target.parentNode.lastChild.style.display = "block";
  };
  const addressclose = (e) => {
    e.target.parentNode.parentNode.parentNode.style.display = "none";
  };

  const [detailmap, setDetailmap] = useState([])
  useEffect(() => {

    setDetailmap({
      LOT:datas.LOT,
      LAT:datas.LAT,
      ORG_NAME:datas.ORG_NAME,
      MAIN_IMG:datas.MAIN_IMG
    })
  }, [])

  return (
    <>
      {finddata.length > 0 ? (
        <div className="detilcomscss">
          <h1>Healing Line Guide</h1>
          <div className="container">
            <figure>
              <Image
                src={`${finddata[0].imgs}`}
                width={768}
                height={550}
                alt="a"
              />
            </figure>
          </div>

          <div className="scroll_wrap">
            <div>
              <div>
                <h1>{datas.TITLE}</h1>
                <div>
                  {" "}
                  <p>D{dday >= 0 ? "-" + dday : "+" + Math.abs(dday)}</p>
                </div>
              </div>
            </div>
    

            <div>
              <div>
                <FontAwesomeIcon icon={faMapMarkedAlt} width="20" />
                <p onClick={adresspopup}>{addressone}</p>
                <FontAwesomeIcon
                  className={`fa-chevron `}
                  icon={faChevronDown}
                  width="10"
                />
                <div>
                  <div>
                    <div>
                      <p>
                        <span>도로명</span>
                        {addressone}
                        <span>복사 </span>
                      </p>
                      <p>
                        <span>지번</span>
                        {addresstwo}
                        <span>복사 </span>
                      </p>
                    </div>

                    <div onClick={addressclose}>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <FontAwesomeIcon icon={faCalendar} />
              <span>{datas.DATE}</span>
            </p>

            <p>
              <FontAwesomeIcon icon={faAddressBook} />
              <span>{addressone}</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faAddressCard} />
              <span>{datas.ORG_NAME}</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} />
              <span>{finddata[0].ponnum}</span>
            </p>
            <Link href={datas.ORG_LINK} target="_blank">
              <span>공식 홈페이지</span>
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </div>
          <section className="kakaomap">
            <h2>길 찾기</h2>
            {/* <KakaoMap
              LOT={datas.LOT}
              LAT={datas.LAT}
              ORG_NAME={datas.ORG_NAME}
              MAIN_IMG={datas.MAIN_IMG}
            /> */}
            <KakaoMap objj={detailmap}/>
          </section>

          <button onClick={backFunction} id="backBtn" title="뒤로 이동">
            <FontAwesomeIcon icon={faBackward} />
          </button>
          <button id="pickcur" title="지금은 아래에서 찍을 수 있어요">
            <Image src="/detail/ellipse.png" width={50} height={50} alt=''/>
          </button>

          {/* <section>
            <h3>{datas.ORG_NAME} 예시 가이드</h3>
          </section> */}

          <Camera /> 
        </div>
      ) : (
        "Healing Line ...."
      )}
    </>
  );
}

export default Detilcom;
