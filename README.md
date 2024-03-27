# 프로젝트명: HEALINGLINE


### 새 프로젝트
<img src="https://modulabs.co.kr/wp-content/uploads/2023/10/nextjs14-1536x864.png" alt="Next.js Logo" width="500" height="auto">

:힐링이 필요한 모든 직장인들에게 주말에 시간을 내서 좋은 기억과 사진을 남겨서 평일을 버티게 해줄 수 있는 사이트 입니다.

🔊 
기획과 디자인 - 밴치마킹(대한민국구석구석)으로 자료를 모으로 피그마로 샘플 페이지를 구현해 보면서 웹 사이트를 만들었습니다. 사용한 OpenAPI는 서울축제API, 날씨API, KAKAO MAP API이고 GitHub의 OAuth API를 사용했습니다.

-------------

 🎙️ - 개발 환경
      Visual Studio Code

   - 개발 범위
     Next.js, fortawesome, Sass, Axios, Mongodb, Next-auth, Swiper, Zustand, PWA, React-wabcam, Firebase
 
   - 제작 기간
     2024. 2. 13 (1명)

-------------
✨🎺✨

-NEXT-AUTH를 활용해서 소셜로그인을 구현해봤고 서울축제API를 활용해서 데이터를 가공하고 실행시 마다 최신 데이터를 가져오도록 구현했습니다.

-서울축제API 데이터에 북마크기능을 구현해서 MongoDB에 원하는 데이터를 저장하고 삭제해봤습니다. 

-서울축제API의 JSON데이터에 data.json의 추가로 데이터를 넣어서 디테일 페이지를 좀 더 구현해 봤습니다.

-날씨API를 활용해서 실행시마다 최신 데이터를 가져와서 구현 했습니다. 

-카카오맵API를 활용해서 축제지역마다 위도와 경도를 받아서 동적으로 위치를 맵에 마킹하도록 구현했습니다. 

-Suspense를 사용하지 않고 서울축제API의 가동 된 데이터가 없으면 Loding....을 데이터가 있으면 .length를 표시하도록 구현했습니다.

-webcam을 활용해서 찍은 사진을 firebase에 저장하고 삭제하도록 구현했습니다.

-webcam 기능은 vercel에 배포된 url에 들어가면 디테일 컨텐츠를 클릭해서 들어가면 후면으로 코딩된 카메라가 보여지고 버튼을 누르면 firebase에 저장됨과 동시에 저장된 이미지가 하단에 보여집니다.

-------------
## 📢<a href="https://nextprolast.vercel.app/"> 시연사이트 <a/>


next 번들링 참고 사이트 https://www.hyesungoh.xyz/optimization-with-nextjs


next.js 프로젝트를 만들어서 github에 배포하고 vercel에 배포해서 사용중이야 근데 
npm install @next/bundle-analyzer --save-dev 다운 받고


// next.config.js

// 환경변수 ANALYZE가 true일 시에
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});
코드 설치하고
env 파일안에 ANALYZE=true 쓰고 이렇게 해서 코드를 최적화

&&&&&&
{
  "scripts": {
    "analyze": "ANALYZE=true next build"
  }
}이렇게 하면 npm run build 를 대신해서 npm run analyze를 하면 되

"scripts": {
  "build": "ANALYZE=true next build",
  "analyze": "ANALYZE=true next build"
}

이렇게 설정하면, npm run build와 npm run analyze 모두 번들 분석기를 활성화하여 빌드를 수행하게 됩니다. 
하지만, 일반적으로는 번들 분석이 필요할 때만 npm run analyze를 별도로 사용하고, 
일반 빌드는 가능한 한 빠르게 수행할 수 있도록 npm run build는 분석기를 활성화하지 않는 것이 좋습니다. 
따라서, 두 스크립트를 목적에 따라 분리하여 사용하는 것이 일반적인 관행입니다.
