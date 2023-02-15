import{r as f,A as g,B as x,o as l,b as o,h as t,q as a,u,C as p,F as v,m as k,t as w,x as n,D as r,E as y,G as b}from"./entry.b9f13eaf.js";const C=""+globalThis.__publicAssetsURL("icons/add.svg"),L=""+globalThis.__publicAssetsURL("icons/play-dark.svg"),T=""+globalThis.__publicAssetsURL("icons/stop-dark.svg"),$=""+globalThis.__publicAssetsURL("icons/play.svg"),A=""+globalThis.__publicAssetsURL("icons/stop.svg"),D=""+globalThis.__publicAssetsURL("icons/trash.svg"),R={class:"page relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1"},U={class:"absolute right-6 top-6 flex flex-col gap-2 z-10"},j=t("img",{class:"w-8",src:C},null,-1),z=[j],B={key:0,class:"flex flex-col gap-2"},F=t("img",{src:L,alt:""},null,-1),N=[F],P=t("img",{src:T,alt:""},null,-1),S=[P],V={key:0,class:"pt-10 w-full mx-auto max-w-5xl"},E={class:"flex justify-between px-6 pt-6 pb-4"},G={class:"text-xl font-semibold mb-2"},I=["href"],q={class:"flex gap-2"},J=["onClick"],M=t("img",{src:$,alt:""},null,-1),O=[M],H=["onClick"],K=t("img",{src:A,alt:""},null,-1),Q=[K],W=["onClick"],X=t("img",{src:D,alt:""},null,-1),Y=[X],Z={class:"flex justify-end pt-2 pb-2 px-6 bg-dark rounded-b-2xl"},tt={class:"metadata text-sm flex items-center gap-4"},st={class:"flex items-center"},ot={__name:"parsers",setup(et){const c=f(null);_();async function _(){const{data:i}=await g("/api/parsers","$GDoN74a0Jz");x(i,e=>{c.value=e})}async function m(i){await b("/api/parsers/remove",{method:"delete",body:{parserId:i}},"$IPIOB7zPCR").then(()=>{_()})}async function d(i,e,s){await b("/api/parsers/status",{method:"put",body:{parserId:i,parserStatus:e,setAll:s}},"$38la6kDi14").then(h=>{_()})}return(i,e)=>(l(),o("div",R,[t("div",U,[t("button",{class:"w-12 h-12 bg-white rounded-xl flex items-center justify-center",onClick:e[0]||(e[0]=a(s=>u(w).show("modal-create-parser",{onClose:()=>_()}),["prevent"]))},z),u(c)?(l(),o("div",B,[t("button",{class:"w-12 h-12 bg-white rounded-xl flex items-center justify-center",onClick:e[1]||(e[1]=a(s=>d(null,!0,!0),["prevent"]))},N),t("button",{class:"w-12 h-12 bg-white rounded-xl flex items-center justify-center",onClick:e[2]||(e[2]=a(s=>d(null,!1,!0),["prevent"]))},S)])):p("",!0)]),u(c)?(l(),o("div",V,[(l(!0),o(v,null,k(u(c),s=>(l(),o("div",{class:"relative bg-[#444653] rounded-2xl mb-4",key:s._id},[t("div",E,[t("div",null,[t("h3",G,n(s.name),1),t("a",{class:"text-md text-blue-400 hover:opacity-80",href:s.link,target:"_blank"},n(s.link),9,I)]),t("div",q,[s.status?(l(),o("button",{key:1,onClick:a(h=>d(s._id,!1,!1),["prevent"])},Q,8,H)):(l(),o("button",{key:0,onClick:a(h=>d(s._id,!0,!1),["prevent"])},O,8,J)),t("button",{onClick:a(h=>m(s._id),["prevent"])},Y,8,W)])]),t("div",Z,[t("ul",tt,[t("li",null,[r(" 24h: "),t("b",null,n(s.statistics.parsed_24h),1)]),t("li",null,[r(" 7d: "),t("b",null,n(s.statistics.parsed_7d),1)]),t("li",null,[r(" Total: "),t("b",null,n(s.statistics.parsed),1)]),t("li",null,[r(" Last check: "),t("b",null,n(new Date(s.lastCheck).toLocaleDateString())+" "+n(new Date(s.lastCheck).toLocaleTimeString()),1)]),t("li",st,[t("span",{class:y(["block w-3 h-3 rounded-full",{"bg-green-600":s.status,"bg-red-600":!s.status}])},null,2)])])])]))),128))])):p("",!0)]))}};export{ot as default};