"use client";

import { useEffect } from "react";
import "../sass/kakao-map.scss";

const KakaoMap = ({ LOT, LAT, ORG_NAME, MAIN_IMG }) => {
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = process.env.NEXT_PUBLIC_MAP_SRC;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var mapContainer = document.getElementById("map");
        var mapOption = {
          center: new window.kakao.maps.LatLng(LOT, LAT),
          level: 3,
        };

        var map = new window.kakao.maps.Map(mapContainer, mapOption);

        var imageSrc = MAIN_IMG,
          imageSize = new kakao.maps.Size(64, 69),
          imageOption = { offset: new kakao.maps.Point(27, 69) };

        var markerImage = new kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          ),
          markerPosition = new kakao.maps.LatLng(LOT, LAT);

        var marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        marker.setMap(map);

        var content =
          '<div class="customoverlay">' +
          '  <a href="https://map.kakao.com/link/map/8430129" target="_blank">' +
          '    <span class="title">' +
          ORG_NAME +
          "</span>" +
          "  </a>" +
          "</div>";

        var position = new kakao.maps.LatLng(LOT, LAT);

        var customOverlay = new kakao.maps.CustomOverlay({
          map: map,
          position: position,
          content: content,
          yAnchor: 1,
        });
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);
  return (
    <div>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default KakaoMap;
