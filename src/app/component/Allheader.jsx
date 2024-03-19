"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import myicon from "/public/header/myicon-1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faZap } from "@fortawesome/free-solid-svg-icons";
import "@/app/sass/allheader.scss";

import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

import { useStore } from "@/app/state/Store";

function Allheader(props) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const [region, setRegion] = useState(false);
  const [manu, setManu] = useState(false);

  const { data: session, status } = useSession();

  const {action } = useStore()

  const toggleAccordion = (e) => {
    e.stopPropagation();

    if (!accordionOpen) {
      e.target.nextSibling.classList.add("activ");
      e.target.childNodes[3].classList.add("activeeee");
    } else {
      e.target.nextSibling.classList.remove("activ");
      e.target.childNodes[3].classList.remove("activeeee");
    }

    setAccordionOpen(!accordionOpen);
  };

  const regiononoff = (e) => {
    setRegion(!region);
  };

  const setManuonoff = (e) => {
    setManu(!manu);
  };

  const [sta, setSta] = useState(true);
  const [headeruserdata, setHeaderuserdata] = useState({});

  useEffect(() => {
    const fetchSesstion = async () => {
      if (session) {
        const sessionData = await session;
        const url = location.pathname;

        if ("/login" === url || "/my" === url || "/detail" === url) {
          setSta(false);

          setHeaderuserdata({
            name: session.user.name,
            email: session.user.email,
            picture: session.user.picture,
          });
        } else {
          setSta(true);
        }
      }
    };

    fetchSesstion();
  }, [session]);


  const aria = ["강북구, 중구, 용산구, 성동구, 광진구, 동대문구, 중랑구, 성북구, 종로구, 도봉구, 노원구, 은평구, 서대문구, 마포구, 양천구, 강서구, 구로구, 금천구, 영등포구, 동작구, 관악구, 서초구, 강남구, 송파구, 강동구"]

  const [accordionstate, setAccordionstate] = useState({e:"강남구", i:0})
  const accordionaria = (e, i) => {
    // console.log(e.target.textContent, i)
    setAccordionstate(
      {e:e.target.textContent, i:i}
    )
  }
  // console.log(accordionstate)
  useEffect(() => {
    action('allaria', accordionstate)
  }, [accordionstate])
  if (sta) return <></>;

  return (
    <>
      <header className="header">
        <div className="headeralldiv">
          <Link className="loggo" href="/login">
            <h1 className="h1">TRIPLE</h1>
          </Link>
          <div className="lfetmenu">
            <Link href="/my?my=my">
              <Image src={myicon} alt="" width="40" height="40" />
            </Link>
            <div onClick={setManuonoff} className="headermaun">
              <span className="headermaunfirstspan"></span>
              <span className="headermaunfirstspan"></span>
              <span className="headermaunthreespan"></span>
            </div>
          </div>
        </div>

        <div className={`articletop ${manu ? "activeee" : ""}`}>
          <article>
            <div>
              <p
                onClick={() => {
                  setManu(false);
                }}
              >
                <span></span>
                <span></span>
              </p>
              <img
                src={`${headeruserdata.picture}`}
                width="50"
                height="50"
                alt=""
              />
              <div>
                <p onClick={toggleAccordion}>
                  환영합니다. {headeruserdata.name}님
                  <FontAwesomeIcon
                    className={`fa-chevron ${accordionOpen ? "activeeee" : ""}`}
                    icon={faChevronDown}
                    width="10"
                  />{" "}
                </p>

                <button
                  className={accordionOpen ? "active" : ""}
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                  }}
                >
                  로그아웃버튼
                </button>
              </div>
            </div>
            <div>
              <h2>
                <span className="icon"></span>홈
              </h2>
            </div>
            <ul id="accordion" className="accordion">
              <li>
                <div onClick={regiononoff} className="link">
                  <FontAwesomeIcon icon={faZap} width="20" />
                  서울 아코디언{" "}
                  <FontAwesomeIcon
                    className={`fa-chevron-down ${region ? "activeev" : ""}`}
                    icon={faChevronDown}
                    width="10"
                  />
                </div>
                <ul className={`submenu ${region ? "activee" : ""}`}>
                  {
                    aria[0].split(', ').map((a, i) => {
                      return (
                        <li key={i}>
                          <Link href="/login" onClick={(e) => {accordionaria(e, i)}}>{a}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
            </ul>
          </article>
        </div>
      </header>
    </>
  );
}

export default Allheader;
