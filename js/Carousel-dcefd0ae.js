"use strict";(self["webpackChunk_lo_vue3_web"]=self["webpackChunk_lo_vue3_web"]||[]).push([[361],{6549:(e,l,a)=>{a.r(l),a.d(l,{default:()=>g});var n=a(6124),t=a(4937),u=a(8739),v=a(7084),r=a(2672);const i=e=>((0,n.dD)("data-v-f75d2ff0"),e=e(),(0,n.Cn)(),e),s={id:"nextIndex"},d={id:"ready",style:{width:"0",height:"0",display:"none"}},o=i((()=>(0,n._)("br",null,null,-1))),c=i((()=>(0,n._)("br",null,null,-1))),p=(0,n.aZ)({__name:"Swiper",setup(e){(0,t.sj)((e=>({bbd8d8d4:(0,u.SU)(z)})));const l=(0,u.qj)(new Array(11).fill(0).map(((e,l)=>({id:(0,r.r)(2)})))),a=e=>(e+l.length)%l.length,i=((0,n.FN)(),(0,u.XI)()),p=(0,u.iH)(-1),f=(0,u.iH)(0),w=(0,u.iH)(-1),_=(0,u.iH)(""),m=(0,u.qj)({transform:""}),y=(0,n.Fl)((()=>"prev"==_.value?[f.value,...new Array(A).fill(0).map(((e,l)=>w.value+l))].map(a):[w.value,...new Array(A).fill(0).map(((e,l)=>f.value+l))].map(a)));function x(){_.value="next",p.value=a(f.value+A),g.value=!1,h.value=!1,m.transform="translateX(200%)",setTimeout((()=>{g.value=!0,w.value=f.value,f.value=a(f.value+1)}),20)}async function b(){_.value="prev",p.value=a(f.value-1),g.value=!1,m.transform="translateX(-100%)",await(0,n.Y3)(),i.value&&getComputedStyle(i.value).width,g.value=!0,w.value=f.value,f.value=a(f.value-1)}const g=(0,u.iH)(!0),h=(0,u.iH)(!1),k=((0,n.Fl)((()=>e=>g.value)),(0,n.Fl)((()=>e=>{if(!g.value&&e==p.value){if("prev"==_.value)return{transform:"translateX(-100%)"};if("next"==_.value)return{transform:`translateX(${100*A+1}%)`}}const l={};let n=[],t=0;return g.value&&"prev"==_.value?n=[f.value,...new Array(A).fill(0).map(((e,l)=>w.value+l))].map(a):g.value&&"next"==_.value?(t=-1,n=[w.value,...new Array(A).fill(0).map(((e,l)=>f.value+l))].map(a)):n=[...new Array(A).fill(0).map(((e,l)=>f.value+l))].map(a),-1!=n.indexOf(e)?l.transform=`translateX(${100*(n.indexOf(e)+t)}%)`:(l.transform=`translateX(${100*A+1}%)`,l.display=[w.value,...new Array(A).fill(0).map(((e,l)=>f.value+l))].map(a).includes(e)?"block":"none"),l}))),H=(0,u.iH)(.1),z=(0,n.Fl)((()=>H.value+"s"));(0,n.bv)((()=>{}));const A=10;return(e,a)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",null,"activeIndex:"+(0,v.zw)(f.value),1),(0,n._)("div",s,"nextIndex:"+(0,v.zw)(p.value),1),(0,n._)("div",null,"lastIndex:"+(0,v.zw)(w.value),1),(0,n._)("div",null,"diretion:"+(0,v.zw)(_.value),1),(0,n._)("div",d,"ready:"+(0,v.zw)(g.value),1),(0,n._)("div",{ref_key:"root",ref:i,class:"swiper-container"},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l,((e,l)=>((0,n.wg)(),(0,n.iD)("div",{class:(0,v.C_)(["swiper-item text-center pd-t-lg",{animating:g.value&&(0,u.SU)(y).includes(l)}]),style:(0,v.j5)((0,u.SU)(k)(l)),key:l},[(0,n._)("div",null,[(0,n.Uk)((0,v.zw)(l),1),o,(0,n.Uk)((0,v.zw)(e.id),1),c,(0,n.Uk)((0,v.zw)(g.value?"T":"F"),1)])],6)))),128))],512),(0,n._)("div",{class:"text-center"},[(0,n._)("button",{onClick:b},"Prev"),(0,n._)("button",{onClick:x},"Next")])],64))}});var f=a(9956);const w=(0,f.Z)(p,[["__scopeId","data-v-8c695736"]]),_=w,m={class:"pd-t"},y={class:"carousel"},x=(0,n.aZ)({__name:"index",setup(e){(0,u.qj)(new Array(20).fill(0).map(((e,l)=>({id:(0,r.r)()}))));const l=(0,u.iH)(!1),a=((0,u.iH)(!1),(0,u.iH)());(0,u.qj)({left:"0px",top:"0px"});return console.log(a),(0,n.bv)((()=>{var e;null===(e=a.value)||void 0===e||e.addEventListener("transitionend",(()=>{}))})),(0,n.Rh)((()=>{console.log("reset watchPostEffect:",l.value)})),(0,n.yX)((()=>{console.log("reset watchSyncEffect:",l.value)})),(e,l)=>((0,n.wg)(),(0,n.iD)("div",m,[(0,n._)("div",y,[(0,n.Wm)(_)])]))}}),b=(0,f.Z)(x,[["__scopeId","data-v-8a6eb2e6"]]),g=b}}]);