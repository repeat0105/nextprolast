exports.id=848,exports.ids=[848],exports.modules={55675:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2583,23)),Promise.resolve().then(a.t.bind(a,26840,23)),Promise.resolve().then(a.t.bind(a,38771,23)),Promise.resolve().then(a.t.bind(a,13225,23)),Promise.resolve().then(a.t.bind(a,9295,23)),Promise.resolve().then(a.t.bind(a,43982,23))},41029:(e,t,a)=>{Promise.resolve().then(a.bind(a,26274))},62533:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var s=a(95344),i=a(8428),n=a(3729);function l({handleClick:e,dday:t,objj:a,res:l}){let{my:r}=Object.fromEntries((0,i.useSearchParams)()),[c,o]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{l.length&&(l.filter(e=>e.MAIN_IMG===a.MAIN_IMG).length?o(!0):o(!1))},[a,l]),s.jsx("div",{children:(0,s.jsxs)("label",{className:"toggler-wrapper style-26",children:[s.jsx("input",{type:"checkbox",checked:c,onChange:function(){}}),(0,s.jsxs)("div",{className:"toggler-slider",onClick:t=>{e(t,{GUNAME:a.GUNAME,MAIN_IMG:a.MAIN_IMG,DATE:a.DATE,ORG_NAME:a.ORG_NAME,IS_FREE:a.IS_FREE,LOT:a.LOT,LAT:a.LAT,dday:t.currentTarget.querySelector("#ddayta").textContent,check:!1}),o(!c)},children:[(0,s.jsxs)("p",{id:"ddayta",style:{display:"none"},children:["D",t>=0?"-"+t:"+"+Math.abs(t)]}),s.jsx("div",{className:"toggler-knob"})]})]})})}},26274:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var s=a(95344),i=a(47674),n=a(3729),l=a(56506),r=a(89410);let c={src:"/_next/static/media/myicon-1.8e105d8e.png",height:40,width:40,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKvP01AAAACnRSTlMADXUGfkKLHDBabQjXXgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADJJREFUeJwdiskNADAIw0w4u//CFeRjywrADLcnvaUFhK0pU1eqqrZEQga0cEeN38/8AxPdAIssMuXNAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};var o=a(62225),d=a(10372);a(27333),a(8428);var h=a(37619);let A=function(e){let[t,a]=(0,n.useState)(!1),[A,m]=(0,n.useState)(!1),[u,g]=(0,n.useState)(!1),{data:x,status:p}=(0,i.useSession)(),{action:j}=(0,h.o)(),[v,f]=(0,n.useState)(!0),[N,w]=(0,n.useState)({});(0,n.useEffect)(()=>{(async()=>{if(x){await x;let e=location.pathname;"/login"===e||"/my"===e||"/detail"===e?(f(!1),w({name:x.user.name,email:x.user.email,picture:x.user.picture})):f(!0)}})()},[x]);let[b,E]=(0,n.useState)({e:"강남구",i:0}),y=(e,t)=>{E({e:e.target.textContent,i:t})};return((0,n.useEffect)(()=>{j("allaria",b)},[b]),v)?s.jsx(s.Fragment,{}):s.jsx(s.Fragment,{children:(0,s.jsxs)("header",{className:"header",children:[(0,s.jsxs)("div",{className:"headeralldiv",children:[s.jsx(l.default,{className:"loggo",href:"/login",children:s.jsx("h1",{className:"h1",children:"TRIPLE"})}),(0,s.jsxs)("div",{className:"lfetmenu",children:[s.jsx(l.default,{href:"/my?my=my",children:s.jsx(r.default,{src:c,alt:"",width:"40",height:"40"})}),(0,s.jsxs)("div",{onClick:e=>{g(!u)},className:"headermaun",children:[s.jsx("span",{className:"headermaunfirstspan"}),s.jsx("span",{className:"headermaunfirstspan"}),s.jsx("span",{className:"headermaunthreespan"})]})]})]}),s.jsx("div",{className:`articletop ${u?"activeee":""}`,children:(0,s.jsxs)("article",{children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{onClick:()=>{g(!1)},children:[s.jsx("span",{}),s.jsx("span",{})]}),s.jsx("img",{src:`${N.picture}`,width:"50",height:"50",alt:""}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{onClick:e=>{e.stopPropagation(),t?(e.target.nextSibling.classList.remove("activ"),e.target.childNodes[3].classList.remove("activeeee")):(e.target.nextSibling.classList.add("activ"),e.target.childNodes[3].classList.add("activeeee")),a(!t)},children:["환영합니다. ",N.name,"님",s.jsx(o.G,{className:`fa-chevron ${t?"activeeee":""}`,icon:d.ptq,width:"10"})," "]}),s.jsx("button",{className:t?"active":"",onClick:()=>{(0,i.signOut)({callbackUrl:"/"})},children:"로그아웃버튼"})]})]}),s.jsx("div",{children:(0,s.jsxs)("h2",{children:[s.jsx("span",{className:"icon"}),"홈"]})}),s.jsx("ul",{id:"accordion",className:"accordion",children:(0,s.jsxs)("li",{children:[(0,s.jsxs)("div",{onClick:e=>{m(!A)},className:"link",children:[s.jsx(o.G,{icon:d.Uf4,width:"20"}),"서울 아코디언"," ",s.jsx(o.G,{className:`fa-chevron-down ${A?"activeev":""}`,icon:d.ptq,width:"10"})]}),s.jsx("ul",{className:`submenu ${A?"activee":""}`,children:["강북구, 중구, 용산구, 성동구, 광진구, 동대문구, 중랑구, 성북구, 종로구, 도봉구, 노원구, 은평구, 서대문구, 마포구, 양천구, 강서구, 구로구, 금천구, 영등포구, 동작구, 관악구, 서초구, 강남구, 송파구, 강동구"][0].split(", ").map((e,t)=>s.jsx("li",{children:s.jsx(l.default,{href:"/login",onClick:e=>{y(e,t)},children:e})},t))})]})})]})})]})})};function m({children:e}){return s.jsx(s.Fragment,{children:s.jsx(i.SessionProvider,{children:(0,s.jsxs)("main",{children:[s.jsx(A,{}),e]})})})}},37619:(e,t,a)=>{"use strict";a.d(t,{o:()=>i});var s=a(53608);let i=(0,a(43158).Ue)(e=>({count:0,testdata:[],mycomdata:[],timetam:0,allheaderaria:{},action:async(t,a)=>{switch(t){case"get":let i=new Date,n=i.getFullYear(),l=i.getMonth()+1,r=i.getDate(),c=new Date(`${n}-${l}-${r}`).getTime();e({timetam:c});let o=async(e,t)=>(await s.Z.get(`/api/seoul?start=${e}&end=${t}`)).data.culturalEventInfo.row;(async()=>{let e=(await s.Z.get("/api/seoul?start=1&end=1000")).data.culturalEventInfo.list_total_count,t=[];t.push(await o(1,1e3));for(let a=1001;a<=Number(e);a+=1e3)t.push(await o(a,Math.min(a+999,Number(e))));return(await Promise.all(t)).flat()})().then(t=>{e({testdata:t.filter(e=>{let t=e.DATE.split("~")[0],a=e.DATE.split("~")[1],s=new Date(t).getTime(),i=new Date(a).getTime();return c<s||c<i})})}).catch(e=>{console.error("Error fetching data:",e)});break;case"allaria":e({allheaderaria:a})}},increment:()=>{e(e=>({count:e.count+1}))}}))},34634:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h,metadata:()=>d});var s=a(25036),i=a(11457),n=a.n(i);a(5023);let l=(0,a(86843).createProxy)(String.raw`D:\kang\19주차\1일\nextpro\src\app\component\Uiux.jsx`),{__esModule:r,$$typeof:c}=l,o=l.default,d={manifest:"/manifest.json",metadataBase:new URL("http://localhost:3000"),title:"Create Next App",description:"Generated by create next app",openGraph:{title:"공유시 1제목",description:"공유 요약 1정보",image:"/image/logo512.jpg"},twitter:{title:"Title webtsite",description:"this is the desciption",image:"/image/logo512.jpg"},icons:{icon:"/image/favicon-16x16.png",apple:"/image/favicon-16x16.png",shortcut:"/image/logo512.jpg",other:{rel:"apple-touch-icon-precomposed",url:"/image/apple-touch-icon-57x57.png"}},keywords:["next","react","routing"],authors:[{name:"minkyu"}],robots:{index:!1,follow:!0,nocache:!0,googlebot:{index:!0,follow:!1}}};function h({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:n().className,children:s.jsx(o,{children:e})})})}},73881:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var s=a(70337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{},27333:()=>{}};