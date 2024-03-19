import React from "react";
import "../app/sass/page.scss";

import Image from "next/image";



import kakao from "/public/kakaolog/kakaotalk_social_media_apps_logo_icon.png";
import github from "/public/kakaolog/github_icon.png";
import Link from "next/link";
import Loginpage from "./(pages)/login/page";
import UseImagecom from '@/app/component/UseImagecom.jsx'




function apppege(props) {
  return (
    <div className="app">
      <div style={{marginTop: 10px;}}>
        <UseImagecom />
        
        <div>
          <h2>HEALING LINE</h2>
          <p>
            재충전,힐링,휴식 중<br /> 하나만 달성하기
          </p>

          <Loginpage />
          <Link href="https://github.com/login" target="_blank">
            <Image src={github} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default apppege;


