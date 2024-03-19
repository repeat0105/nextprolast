"use client";

import login0 from "/public/kakaolog/login0.png";
import login1 from "/public/kakaolog/login1.jpg";
import login2 from "/public/kakaolog/login2.jpg";
import login3 from "/public/kakaolog/login3.jpg";
import login4 from "/public/kakaolog/login4.jpg";
import login5 from "/public/kakaolog/login5.jpg";
import login6 from "/public/kakaolog/login6.jpg";
import login7 from "/public/kakaolog/login7.jpg";
import login8 from "/public/kakaolog/login8.jpg";

import Image from "next/image";
import React, { useState, useEffect } from "react";

function UseImagecom() {
  const [imgMonth, setImgMonth] = useState(new Date().getMonth() + 1);
  

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isbigSmallScreen, setIsbigSmallScreen] = useState(false);

  const imgPaths = {
    login1: login1,
    login2: login2,
    login3: login3,
    login4: login4,
    login5: login5,
    login6: login6,
    login7: login7,
    login8: login8,
  };

  let imgnum = [
    { login1: [3, 4, 5] },
    { login2: [6, 7, 8, 9] },
    { login3: [10, 11] },
    { login4: [12, 1, 2] },
    { login5: [3, 4, 5] },
    { login6: [6, 7, 8, 9] },
    { login7: [10, 11] },
    { login8: [12, 1, 2] },
  ];

  
  const filteredLogin = imgnum.filter((obj) => {
    return Object.values(obj).some((arr) => arr.includes(imgMonth));
  });

  const filteredKeys = filteredLogin.map((obj) => Object.keys(obj)[0]);
 
  let mediaQuery1;
  let mediaQuery2;
  useEffect(() => {

    mediaQuery2 = window.matchMedia("(max-width: 486px)");
    const handleResize = () => {
      
      setIsbigSmallScreen(mediaQuery2.matches);
    };

    handleResize();
 
    mediaQuery2.addListener(handleResize);

  
    return () => {
   
      mediaQuery2.removeListener(handleResize);
    };
  }, []);

  let value = isbigSmallScreen
    ? imgPaths[filteredKeys[0]]
    : imgPaths[filteredKeys[1]];

  let imgsize = isbigSmallScreen ? 486 : 768;

  return (
    <Image
      className="loginbackimg"
      src={value}
      width={imgsize}
      height={768}
      alt="aa"
    />
  );
}

export default UseImagecom;
