import{s as l,g as m,l as y,c as d,o as c,a,m as p,b as s,j as n,z as x,e as _,w as r,d as i,G as f}from"./DMr6S_LN.js";import{L as v}from"./mqM6_peX.js";/**
 * @license lucide-vue-next v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=l("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=l("chart-no-axes-column-increasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-vue-next v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=l("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=l("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),C={class:"w-64 h-screen bg-white dark:bg-gray-900 shadow-md"},z={class:"p-4"},M={class:"space-y-2"},N={key:0,class:"pl-8 mt-2 space-y-1"},A=m({__name:"Sidebar",setup(h){const t=y(!0);function u(){t.value=!t.value}return(L,e)=>{const o=_;return c(),d("aside",C,[a("nav",z,[e[4]||(e[4]=a("h2",{class:"text-xl font-bold mb-4"},"Admin Panel",-1)),a("ul",M,[a("li",null,[a("button",{class:"flex items-center w-full p-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",onClick:u},[s(n(v),{class:"w-5 h-5 mr-2"}),e[0]||(e[0]=a("span",null,"Dashboard",-1)),s(n(g),{class:x(["w-4 h-4 ml-auto",{"rotate-180":t.value}])},null,8,["class"])]),t.value?(c(),d("ul",N,[a("li",null,[s(o,{to:"/admin/",class:"flex items-center hover:underline"},{default:r(()=>[s(n(b),{class:"w-4 h-4 mr-2"}),e[1]||(e[1]=i(" Overview "))]),_:1})]),a("li",null,[s(o,{to:"/admin/",class:"flex items-center hover:underline"},{default:r(()=>[s(n(k),{class:"w-4 h-4 mr-2"}),e[2]||(e[2]=i(" Analytics "))]),_:1})]),a("li",null,[s(o,{to:"/admin/",class:"flex items-center hover:underline"},{default:r(()=>[s(n(w),{class:"w-4 h-4 mr-2"}),e[3]||(e[3]=i(" Reports "))]),_:1})])])):p("",!0)])])])])}}}),D={class:"min-h-screen bg-gray-100 dark:bg-gray-900 flex"},H={class:"flex-1 p-6 text-gray-900 dark:text-gray-100"},$=m({__name:"admin",setup(h){return(t,u)=>(c(),d("div",D,[s(A),a("main",H,[f(t.$slots,"default")])]))}});export{$ as default};
