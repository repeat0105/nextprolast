"use strict";(()=>{var e={};e.id=876,e.ids=[876],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},30115:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>l,originalPathname:()=>m,patchFetch:()=>g,requestAsyncStorage:()=>c,routeModule:()=>d,serverHooks:()=>h,staticGenerationAsyncStorage:()=>x,staticGenerationBailout:()=>q});var a={};t.r(a),t.d(a,{GET:()=>n});var o=t(95419),s=t(69108),i=t(99678),p=t(33567),u=t(98984);async function n(e){try{let e=(await p.Z.get("http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=ac013fb3475cd2807d7edd4dcb6911ab&units=metric")).data;return u.NextResponse.json(e)}catch(e){return console.error("Error fetching data from API:",e),u.NextResponse.json({message:"Error fetching data"})}}let d=new o.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/weader/route",pathname:"/api/weader",filename:"route",bundlePath:"app/api/weader/route"},resolvedPagePath:"D:\\kang\\19주차\\1일\\nextpro\\src\\app\\api\\weader\\route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:c,staticGenerationAsyncStorage:x,serverHooks:h,headerHooks:l,staticGenerationBailout:q}=d,m="/api/weader/route";function g(){return(0,i.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:x})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[638,992],()=>t(30115));module.exports=a})();