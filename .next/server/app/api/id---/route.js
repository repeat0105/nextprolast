"use strict";(()=>{var e={};e.id=644,e.ids=[644],e.modules={38013:e=>{e.exports=require("mongodb")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},12758:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>k,originalPathname:()=>x,patchFetch:()=>b,requestAsyncStorage:()=>l,routeModule:()=>p,serverHooks:()=>m,staticGenerationAsyncStorage:()=>w,staticGenerationBailout:()=>g});var r={};a.r(r),a.d(r,{DELETE:()=>u,GET:()=>d,PUT:()=>c});var i=a(95419),n=a(69108),o=a(99678),s=a(83062);async function d(e,{params:t}){let a=await (0,s.c)("detail",{id:String(t.id)});return Response.json(a)}async function u(e,{params:t}){let a=await (0,s.c)("delete",{id:t.id});return Response.json(a)}async function c(e){let t=await (0,s.c)("put",await e.json());return Response.json(t)}let p=new i.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/id---/route",pathname:"/api/id---",filename:"route",bundlePath:"app/api/id---/route"},resolvedPagePath:"D:\\kang\\21주차\\4일\\kakaomap\\src\\app\\api\\id---\\route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:l,staticGenerationAsyncStorage:w,serverHooks:m,headerHooks:k,staticGenerationBailout:g}=p,x="/api/id---/route";function b(){return(0,o.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:w})}},95419:(e,t,a)=>{e.exports=a(30517)},83062:(e,t,a)=>{a.d(t,{c:()=>n});let{MongoClient:r}=a(38013),i=new r("mongodb+srv://breaker0105:ioTtxMvxkfDcNu54@cluster0.plct5ed.mongodb.net/?retryWrites=true&w=majority"),n=async(e,t)=>{let a;await i.connect();let r=i.db("nextpro").collection("likedata");switch(e){case"post":await r.insertOne(t);break;case"detail":a=await r.find({email:t}).toArray();break;case"detailtwo":case"delete":a=await r.deleteOne(t);break;case"put":await r.updateOne({id:t.id},{$set:{title:t.title}})}return"detail"!=e&&(a=await r.find().toArray()),a}}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[638],()=>a(12758));module.exports=r})();