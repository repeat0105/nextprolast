"use strict";(()=>{var e={};e.id=755,e.ids=[755],e.modules={38013:e=>{e.exports=require("mongodb")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},12430:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>w,originalPathname:()=>k,patchFetch:()=>b,requestAsyncStorage:()=>p,routeModule:()=>d,serverHooks:()=>m,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>x});var r={};a.r(r),a.d(r,{GET:()=>u,POST:()=>c});var o=a(95419),i=a(69108),n=a(99678),s=a(83062);async function u(e){let{email:t}=Object.fromEntries(e.nextUrl.searchParams);return Response.json(await (0,s.c)("detail",t))}async function c(e){return Response.json(await (0,s.c)("post",await e.json()))}let d=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/route",pathname:"/api",filename:"route",bundlePath:"app/api/route"},resolvedPagePath:"C:\\Users\\kang\\Desktop\\그린컴퓨터아카데미\\22주차\\3일\\nextpro\\src\\app\\api\\route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:p,staticGenerationAsyncStorage:l,serverHooks:m,headerHooks:w,staticGenerationBailout:x}=d,k="/api/route";function b(){return(0,n.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:l})}},95419:(e,t,a)=>{e.exports=a(30517)},83062:(e,t,a)=>{a.d(t,{c:()=>i});let{MongoClient:r}=a(38013),o=new r("mongodb+srv://breaker0105:ioTtxMvxkfDcNu54@cluster0.plct5ed.mongodb.net/?retryWrites=true&w=majority"),i=async(e,t)=>{let a;await o.connect();let r=o.db("nextpro").collection("likedata");switch(e){case"post":await r.insertOne(t);break;case"detail":a=await r.find({email:t}).toArray();break;case"detailtwo":case"delete":a=await r.deleteOne(t);break;case"put":await r.updateOne({id:t.id},{$set:{title:t.title}})}return"detail"!=e&&(a=await r.find().toArray()),a}}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[638],()=>a(12430));module.exports=r})();