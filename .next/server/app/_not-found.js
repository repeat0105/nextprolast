(()=>{var e={};e.id=165,e.ids=[165],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},78892:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var a=s(50482),r=s(69108),i=s(62563),n=s.n(i),o=s(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.t.bind(s,69361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,34634)),"D:\\kang\\21주차\\3일\\nextpro\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,69361,23)),"next/dist/client/components/not-found-error"]}],d=[],u="/_not-found",p={require:s,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/_not-found",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},12612:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,26840,23)),Promise.resolve().then(s.t.bind(s,38771,23)),Promise.resolve().then(s.t.bind(s,13225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,43982,23))},54900:(e,t,s)=>{Promise.resolve().then(s.bind(s,26274))},26274:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var a=s(95344),r=s(47674),i=s(3729),n=s(56506),o=s(89410);let l={src:"/_next/static/media/myicon-1.8e105d8e.png",height:40,width:40,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKvP01AAAACnRSTlMADXUGfkKLHDBabQjXXgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADJJREFUeJwdiskNADAIw0w4u//CFeRjywrADLcnvaUFhK0pU1eqqrZEQga0cEeN38/8AxPdAIssMuXNAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};var c=s(62225),d=s(10372);s(27333),s(8428);var u=s(37619);let p=function(e){let[t,s]=(0,i.useState)(!1),[p,m]=(0,i.useState)(!1),[h,x]=(0,i.useState)(!1),{data:A,status:g}=(0,r.useSession)(),{action:j}=(0,u.o)(),[v,f]=(0,i.useState)(!0),[w,b]=(0,i.useState)({});(0,i.useEffect)(()=>{(async()=>{if(A){await A;let e=location.pathname;"/login"===e||"/my"===e||"/detail"===e?(f(!1),b({name:A.user.name,email:A.user.email,picture:A.user.picture})):f(!0)}})()},[A]);let[q,N]=(0,i.useState)({e:"강남구",i:0}),P=(e,t)=>{N({e:e.target.textContent,i:t})};return((0,i.useEffect)(()=>{j("allaria",q)},[q]),v)?a.jsx(a.Fragment,{}):a.jsx(a.Fragment,{children:(0,a.jsxs)("header",{className:"header",children:[(0,a.jsxs)("div",{className:"headeralldiv",children:[a.jsx(n.default,{className:"loggo",href:"/login",children:a.jsx("h1",{className:"h1",children:"TRIPLE"})}),(0,a.jsxs)("div",{className:"lfetmenu",children:[a.jsx(n.default,{href:"/my?my=my",children:a.jsx(o.default,{src:l,alt:"",width:"40",height:"40"})}),(0,a.jsxs)("div",{onClick:e=>{x(!h)},className:"headermaun",children:[a.jsx("span",{className:"headermaunfirstspan"}),a.jsx("span",{className:"headermaunfirstspan"}),a.jsx("span",{className:"headermaunthreespan"})]})]})]}),a.jsx("div",{className:`articletop ${h?"activeee":""}`,children:(0,a.jsxs)("article",{children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{onClick:()=>{x(!1)},children:[a.jsx("span",{}),a.jsx("span",{})]}),a.jsx("img",{src:`${w.picture}`,width:"50",height:"50",alt:""}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{onClick:e=>{e.stopPropagation(),t?(e.target.nextSibling.classList.remove("activ"),e.target.childNodes[3].classList.remove("activeeee")):(e.target.nextSibling.classList.add("activ"),e.target.childNodes[3].classList.add("activeeee")),s(!t)},children:["환영합니다. ",w.name,"님",a.jsx(c.G,{className:`fa-chevron ${t?"activeeee":""}`,icon:d.ptq,width:"10"})," "]}),a.jsx("button",{className:t?"active":"",onClick:()=>{(0,r.signOut)({callbackUrl:"/"})},children:"로그아웃버튼"})]})]}),a.jsx("div",{children:(0,a.jsxs)("h2",{children:[a.jsx("span",{className:"icon"}),"홈"]})}),a.jsx("ul",{id:"accordion",className:"accordion",children:(0,a.jsxs)("li",{children:[(0,a.jsxs)("div",{onClick:e=>{m(!p)},className:"link",children:[a.jsx(c.G,{icon:d.Uf4,width:"20"}),"서울 아코디언"," ",a.jsx(c.G,{className:`fa-chevron-down ${p?"activeev":""}`,icon:d.ptq,width:"10"})]}),a.jsx("ul",{className:`submenu ${p?"activee":""}`,children:["강북구, 중구, 용산구, 성동구, 광진구, 동대문구, 중랑구, 성북구, 종로구, 도봉구, 노원구, 은평구, 서대문구, 마포구, 양천구, 강서구, 구로구, 금천구, 영등포구, 동작구, 관악구, 서초구, 강남구, 송파구, 강동구"][0].split(", ").map((e,t)=>a.jsx("li",{children:a.jsx(n.default,{href:"/login",onClick:e=>{P(e,t)},children:e})},t))})]})})]})})]})})};function m({children:e}){return a.jsx(a.Fragment,{children:a.jsx(r.SessionProvider,{children:(0,a.jsxs)("main",{children:[a.jsx(p,{}),e]})})})}},37619:(e,t,s)=>{"use strict";s.d(t,{o:()=>r});var a=s(53608);let r=(0,s(43158).Ue)(e=>({count:0,testdata:[],mycomdata:[],timetam:0,allheaderaria:{},action:async(t,s)=>{switch(t){case"get":let r=new Date,i=r.getFullYear(),n=r.getMonth()+1,o=r.getDate(),l=new Date(`${i}-${n}-${o}`).getTime();e({timetam:l});let c=async(e,t)=>(await a.Z.get(`/api/seoul?start=${e}&end=${t}`)).data.culturalEventInfo.row;(async()=>{let e=(await a.Z.get("/api/seoul?start=1&end=1000")).data.culturalEventInfo.list_total_count,t=[];t.push(await c(1,1e3));for(let s=1001;s<=Number(e);s+=1e3)t.push(await c(s,Math.min(s+999,Number(e))));return(await Promise.all(t)).flat()})().then(t=>{e({testdata:t.filter(e=>{let t=e.DATE.split("~")[0],s=e.DATE.split("~")[1],a=new Date(t).getTime(),r=new Date(s).getTime();return l<a||l<r})})}).catch(e=>{console.error("Error fetching data:",e)});break;case"allaria":e({allheaderaria:s})}},increment:()=>{e(e=>({count:e.count+1}))}}))},34634:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u,metadata:()=>d});var a=s(25036),r=s(11457),i=s.n(r);s(5023);let n=(0,s(86843).createProxy)(String.raw`D:\kang\21주차\3일\nextpro\src\app\component\Uiux.jsx`),{__esModule:o,$$typeof:l}=n,c=n.default,d={manifest:"/manifest.json",metadataBase:new URL("http://localhost:3000"),title:"Create Next App",description:"Generated by create next app",openGraph:{title:"공유시 1제목",description:"공유 요약 1정보",image:"/image/logo512.jpg"},twitter:{title:"Title webtsite",description:"this is the desciption",image:"/image/logo512.jpg"},icons:{icon:"/image/favicon-16x16.png",apple:"/image/favicon-16x16.png",shortcut:"/image/logo512.jpg",other:{rel:"apple-touch-icon-precomposed",url:"/image/apple-touch-icon-57x57.png"}},keywords:["next","react","routing"],authors:[{name:"minkyu"}],robots:{index:!1,follow:!0,nocache:!0,googlebot:{index:!0,follow:!1}}};function u({children:e}){return a.jsx("html",{lang:"en",children:a.jsx("body",{className:i().className,children:a.jsx(c,{children:e})})})}},5023:()=>{},27333:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[638,527],()=>s(78892));module.exports=a})();