"use strict";(()=>{var e={};e.id=773,e.ids=[773],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},45031:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>h,originalPathname:()=>m,patchFetch:()=>f,requestAsyncStorage:()=>c,routeModule:()=>l,serverHooks:()=>d,staticGenerationAsyncStorage:()=>x,staticGenerationBailout:()=>q});var o={};t.r(o),t.d(o,{GET:()=>p});var s=t(95419),a=t(69108),u=t(99678),i=t(98984),n=t(33567);async function p(e){let{start:r,end:t}=Object.fromEntries(e.nextUrl.searchParams);try{let e=(await n.Z.get(`http://openapi.seoul.go.kr:8088/44755555706272653431476f75564c/json/culturalEventInfo/${r}/${t}`)).data;return i.NextResponse.json(e)}catch(e){return console.error("Error fetching data from API:",e),i.NextResponse.json({message:"Error fetching data"})}}let l=new s.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/seoul/route",pathname:"/api/seoul",filename:"route",bundlePath:"app/api/seoul/route"},resolvedPagePath:"D:\\kang\\21주차\\3일\\nextpro\\src\\app\\api\\seoul\\route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:c,staticGenerationAsyncStorage:x,serverHooks:d,headerHooks:h,staticGenerationBailout:q}=l,m="/api/seoul/route";function f(){return(0,u.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:x})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[638,992],()=>t(45031));module.exports=o})();