(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87],{6585:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return p}});var s=t(7437),i=t(2265),l=t(1126);t(4053);var c=t(7908),n=function(){let[e,a]=(0,i.useState)(null);async function t(){try{let e=await c.Z.get("/api/weader");a(e.data)}catch(e){throw console.error("Error fetching data from API:",e),Error("Error fetching data")}}return(0,i.useEffect)(()=>{t()},[]),(0,s.jsx)("div",{className:"weatherscsstop",children:e&&(0,s.jsxs)("div",{className:"weatherscss",children:[(0,s.jsxs)("div",{className:"cicon",children:[(0,s.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),alt:"Weather Icon"}),(0,s.jsxs)("div",{children:[e.main.temp,"\xbaC - ",e.weather[0].main]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:e.name}),(0,s.jsx)("h4",{children:function(){let e=new Date;return"".concat(e.getFullYear(),"-").concat(("0"+(e.getMonth()+1)).substr(-2),"-").concat(("0"+e.getDate()).substr(-2))}()})]})]})})};t(1427);var r=t(7203),d=t(8344);t(6978),t(501);var o=t(8481),h=t(8792),A=t(8024),u=t(7535),g=t(1231),m=t(2706);function x(e){let a,{props:t}=e,{action:n,testdata:x,timetam:j,allheaderaria:N}=(0,r.o)(),{data:E,status:p}=(0,l.useSession)(),[v,M]=(0,i.useState)(!1),[f,I]=(0,i.useState)([]);(0,i.useEffect)(()=>{S("user",E.user.email)},[]),(0,i.useEffect)(()=>(n("get"),()=>{M(!v)}),[]);let T=e=>{localStorage.setItem("GUNAME",e.GUNAME),localStorage.setItem("MAIN_IMG",e.MAIN_IMG),localStorage.setItem("LOT",e.LOT),localStorage.setItem("LAT",e.LAT),localStorage.setItem("DATE",e.DATE),localStorage.setItem("ORG_NAME",e.ORG_NAME),localStorage.setItem("HMPG_ADDR",e.HMPG_ADDR),localStorage.setItem("TITLE",e.TITLE),localStorage.setItem("ORG_LINK",e.ORG_LINK)},[w,G]=(0,i.useState)(""),[_,D]=(0,i.useState)(0);(0,i.useEffect)(()=>{"강남구"!==N.e&&(G(N.e),D(N.i))},[N.e]);let[b,L]=(0,i.useState)(["강북구, 중구, 용산구, 성동구, 광진구, 동대문구, 중랑구, 성북구, 종로구, 도봉구, 노원구, 은평구, 서대문구, 마포구, 양천구, 강서구, 구로구, 금천구, 영등포구, 동작구, 관악구, 서초구, 강남구, 송파구, 강동구"]);async function S(e,a){let t;switch(e){case"user":t=await c.Z.get("/api?email=".concat(a));break;case"two":t=await c.Z.get("api/two/"+a);break;case"insert":t=await c.Z.post("/api",a);break;case"delete":t=await c.Z.delete("/api/"+a);break;case"put":t=await c.Z.put("/api/0",{id:"0",title:"10프로젝트"})}I(t.data)}let[R,k]=(0,i.useState)({idstate:(0,g.Z)()}),O=(e,a)=>{e.stopPropagation(),e.target.previousSibling.checked?S("two",a.DATE):(k({idstate:(0,g.Z)()}),S("insert",{email:E.user.email,id:R.idstate,...a,check:!a.check}))};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"festivaltitletop",children:(0,s.jsxs)("div",{className:"festivaltitle",children:[(0,s.jsx)("p",{children:"찾고 싶은 축제!"}),(0,s.jsx)("p",{children:"지역을 선택해주세요!"})]})}),(0,s.jsx)("div",{className:"areatopbest",children:(0,s.jsx)(d.tq,{slidesPerView:3,spaceBetween:40,pagination:{clickable:!0},modules:[o.tl],className:"swiper",children:(0,s.jsx)("div",{className:"areatop",children:b[0].split(", ").map((e,a)=>(0,s.jsx)(d.o5,{className:"swiperwidth",children:(0,s.jsx)("div",{className:"area",onClick:e=>{D(a),G(e.target.textContent)},children:(0,s.jsx)("p",{style:{backgroundColor:_===a?"#0056b3":"#eef5f8",color:_===a?"#fff":"#000",borderRadius:"15px"},children:e})})},a))})})}),w?(0,s.jsxs)("div",{className:"seoulapi",children:[0===x.length?(0,s.jsxs)("div",{className:"Parent-loading",children:[(0,s.jsxs)("div",{className:"loding-animation-holder",children:[(0,s.jsx)("div",{className:"loading-animator"}),(0,s.jsx)("div",{className:"loading-animator"}),(0,s.jsx)("div",{className:"loading-animator"}),(0,s.jsx)("div",{className:"loading-animator"}),(0,s.jsx)("div",{className:"middle-circle"})]}),(0,s.jsx)("div",{className:"lod",children:(0,s.jsx)("h1",{children:"Loading"})})]}):(0,s.jsxs)("p",{children:[(0,s.jsx)(A.G,{icon:u.tLL,width:"20"}),"서울 ",w," 축제,\xa0\xa0 전체 축제\xa0\xa0(",x.length,")"]}),x.filter((e,a)=>w===e.GUNAME).map((e,t)=>(a=Math.ceil((a=new Date(e.DATE.split("~")[0]).getTime()-j)/864e5),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{children:[(0,s.jsxs)(h.default,{href:"/detail",onClick:()=>{T({GUNAME:e.GUNAME,MAIN_IMG:e.MAIN_IMG,LOT:e.LOT,LAT:e.LAT,DATE:e.DATE,ORG_NAME:e.ORG_NAME,HMPG_ADDR:e.HMPG_ADDR,dday:a,TITLE:e.TITLE,ORG_LINK:e.ORG_LINK})},children:[(0,s.jsx)("img",{src:e.MAIN_IMG,alt:"backimg",width:"300",height:"300"}),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:(0,s.jsxs)("p",{children:["D",a>=0?"-"+a:"+"+Math.abs(a)]})}),(0,s.jsx)("p",{children:(e.IS_FREE,e.IS_FREE)})]})})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:e.ORG_NAME}),(0,s.jsx)(m.Z,{handleClick:O,dday:a,objj:e,res:f})]}),(0,s.jsx)("p",{children:e.DATE})]})]})},t)))]}):(0,s.jsxs)("div",{className:"seoulapi",children:[0===x.length?(0,s.jsxs)("div",{className:"Parent-loading",children:[(0,s.jsxs)("div",{className:"loding-animation-holder",children:[(0,s.jsx)("div",{className:"loading-animator"}),(0,s.jsx)("div",{className:"loading-animator"}),(0,s.jsx)("div",{className:"loading-animator"}),(0,s.jsx)("div",{className:"loading-animator"}),(0,s.jsx)("div",{className:"middle-circle"})]}),(0,s.jsx)("div",{className:"lod",children:(0,s.jsx)("h1",{children:"Loading"})})]}):(0,s.jsxs)("p",{children:[(0,s.jsx)(A.G,{icon:u.tLL,width:"20"}),"서울 ",w," 축제,\xa0\xa0 전체 축제\xa0\xa0(",x.length,")"]}),x.slice(0,5).map((e,t)=>(a=Math.ceil((a=new Date(e.DATE.split("~")[0]).getTime()-j)/864e5),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{children:[(0,s.jsxs)(h.default,{href:"/detail",onClick:()=>{T({GUNAME:e.GUNAME,MAIN_IMG:e.MAIN_IMG,LOT:e.LOT,LAT:e.LAT,DATE:e.DATE,ORG_NAME:e.ORG_NAME,HMPG_ADDR:e.HMPG_ADDR,dday:a,TITLE:e.TITLE,ORG_LINK:e.ORG_LINK})},children:[(0,s.jsx)("img",{src:e.MAIN_IMG,alt:"backimg",width:"300",height:"300"}),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:(0,s.jsxs)("p",{children:["D",a>=0?"-"+a:"+"+Math.abs(a)]})}),(0,s.jsx)("p",{children:(e.IS_FREE,e.IS_FREE)})]})})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:e.ORG_NAME}),(0,s.jsx)(m.Z,{handleClick:O,dday:a,objj:e,res:f})]}),(0,s.jsx)("p",{children:e.DATE})]})]})},t)))]})]})}t(7861);var j=t(703),N={src:"/_next/static/media/evagithub.6ae77763.png",height:32,width:32,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEUAAAC4uLhQUFBISEgwMDA3NzcBAQGbm5sAAAA9PT2YmJgAAAAgICATExP+/v6KiopaWlrq6uqfn58LCwsDAwPU1NTz8/N3d3fb29vIyMhUuSxjAAAAC3RSTlPY/ufY/v7n4Ofg8yCbZ9UAAAAJcEhZcwAACxMAAAsTAQCanBgAAABBSURBVHicBcGJEcAgCATAy4vOAYpfkv4bzS7A2lodCSjhHiXhWKqqa4dMkvwEEp0cryDPYrZ5Bmoz9ScBvKyfvH9zYQMZvM6DSQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},E=t(7907),p=function(e){let{data:a,status:t}=(0,l.useSession)(),i=(0,E.useRouter)();async function c(){await (0,l.signIn)("github",{redirect:!0,callbackUrl:"/login"})}return"authenticated"===t&&i.push("/login"),(0,s.jsx)("div",{children:"authenticated"===t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{}),(0,s.jsx)(x,{})]}):(0,s.jsxs)("button",{className:"login",onClick:()=>{c()},children:[(0,s.jsx)(j.default,{src:N,alt:""}),(0,s.jsx)("span",{children:"깃허소셜로그인"})]})})}},2706:function(e,a,t){"use strict";t.d(a,{Z:function(){return c}});var s=t(7437),i=t(7907),l=t(2265);function c(e){let{handleClick:a,dday:t,objj:c,res:n}=e,{my:r}=Object.fromEntries((0,i.useSearchParams)()),[d,o]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{n.length&&(n.filter(e=>e.MAIN_IMG===c.MAIN_IMG).length?o(!0):o(!1))},[c,n]),(0,s.jsx)("div",{children:(0,s.jsxs)("label",{className:"toggler-wrapper style-26",children:[(0,s.jsx)("input",{type:"checkbox",checked:d,onChange:function(){}}),(0,s.jsxs)("div",{className:"toggler-slider",onClick:e=>{a(e,{GUNAME:c.GUNAME,MAIN_IMG:c.MAIN_IMG,DATE:c.DATE,ORG_NAME:c.ORG_NAME,IS_FREE:c.IS_FREE,LOT:c.LOT,LAT:c.LAT,dday:e.currentTarget.querySelector("#ddayta").textContent,check:!1}),o(!d)},children:[(0,s.jsxs)("p",{id:"ddayta",style:{display:"none"},children:["D",t>=0?"-"+t:"+"+Math.abs(t)]}),(0,s.jsx)("div",{className:"toggler-knob"})]})]})})}},7203:function(e,a,t){"use strict";t.d(a,{o:function(){return i}});var s=t(7908);let i=(0,t(2020).Ue)(e=>({count:0,testdata:[],mycomdata:[],timetam:0,allheaderaria:{},action:async(a,t)=>{switch(a){case"get":let i=new Date,l=i.getFullYear(),c=i.getMonth()+1,n=i.getDate(),r=new Date("".concat(l,"-").concat(c,"-").concat(n)).getTime();e({timetam:r});let d=async(e,a)=>(await s.Z.get("/api/seoul?start=".concat(e,"&end=").concat(a))).data.culturalEventInfo.row;(async()=>{let e=(await s.Z.get("/api/seoul?start=".concat(1,"&end=",1e3))).data.culturalEventInfo.list_total_count,a=[];a.push(await d(1,1e3));for(let t=1001;t<=Number(e);t+=1e3)a.push(await d(t,Math.min(t+999,Number(e))));return(await Promise.all(a)).flat()})().then(a=>{e({testdata:a.filter(e=>{let a=e.DATE.split("~")[0],t=e.DATE.split("~")[1],s=new Date(a).getTime(),i=new Date(t).getTime();return r<s||r<i})})}).catch(e=>{console.error("Error fetching data:",e)});break;case"allaria":e({allheaderaria:t})}},increment:()=>{e(e=>({count:e.count+1}))}}))},7861:function(){},1427:function(){},4053:function(){}}]);