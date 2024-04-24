"use client";

import { useEffect } from "react";
import "../sass/kakao-map.scss";
import { usePathname } from "next/navigation";


const KakaoMap = ({ objj }) => {

  const  url = usePathname();

  if("/detail" === url) {
    objj=[
      {
        LOT:localStorage.getItem('LOT'),
        LAT:localStorage.getItem('LAT'),
        ORG_NAME:localStorage.getItem('ORG_NAME'),
        MAIN_IMG:localStorage.getItem('MAIN_IMG')
      }
    ]
  }
  
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = process.env.NEXT_PUBLIC_MAP_SRC; // .env 파일에서 Kakao Map 스크립트 URL을 불러옴
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        if (objj && objj.length > 0) {
          const firstLocation = objj[0]; // 첫 번째 위치를 기준으로 지도 생성
          var mapContainer = document.getElementById("map");
          var mapOption = {
            center: new window.kakao.maps.LatLng(
              firstLocation.LOT,
              firstLocation.LAT
            ),
            level: 7,
          };

          var map = new window.kakao.maps.Map(mapContainer, mapOption);

          objj.forEach((item, index) => {
            var imageSrc = item.MAIN_IMG,
              imageSize = new kakao.maps.Size(64, 69),
              imageOption = { offset: new kakao.maps.Point(27, 69) };

            // 마커의 위치를 조정하기 위한 오프셋 추가 00000000000002
            var offsetLAT = 0.00099 * index, // 위도 오프셋
              offsetLOT = 0.00099 * index; // 경도 오프셋

            var markerImage = new kakao.maps.MarkerImage(
                imageSrc,
                imageSize,
                imageOption
              ),
              markerPosition = new kakao.maps.LatLng(item.LOT, item.LAT);

            var marker = new window.kakao.maps.Marker({
              position: markerPosition,
              image: markerImage,
            });

            marker.setMap(map);

            var content =
              '<div class="customoverlay">' +
              '  <a href="https://map.kakao.com/link/map/8430129" target="_blank">' +
              '    <span class="title">' +
              item.ORG_NAME +
              "</span>" +
              "  </a>" +
              "</div>";

            var position = new kakao.maps.LatLng(item.LOT, item.LAT);

            var customOverlay = new kakao.maps.CustomOverlay({
              map: map,
              position: position,
              content: content,
              yAnchor: 1,
            });
          });
        }
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, [objj]); // objj 배열이 변경될 때마다 useEffect가 다시 실행됩니다.

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default KakaoMap;
