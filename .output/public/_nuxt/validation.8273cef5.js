import{k as u,r as a,l as m,A as p,u as l,o as x,b,h as t,x as d,B as h}from"./entry.8930e0ae.js";import{u as f,a as _}from"./fetch.3adfcb17.js";const g={key:0,class:"page relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1"},v={class:"pt-10 h-3/5 w-full mx-auto max-w-5xl"},k=t("h3",{class:"text-2xl font-semibold mb-6"},"Validate News Article",-1),w={class:"relative h-full p-6 bg-[#444653] rounded-3xl overflow-y-auto mb-4"},y={class:"block text-right"},D=["innerHTML"],I=["innerHTML"],A={class:"p-6 bg-[#444653] rounded-3xl overflow-y-auto mb-4"},L=["href"],M={class:"absolute bottom-0 left-0 w-full"},T={class:"stretch mx-2 grid grid-cols-3 gap-6 last:mb-6 mx-auto max-w-3xl bg-dark rounded-3xl p-6"},H={__name:"validation",setup($){const{$socket:c}=u(),s=a(null);a(0),a(0),a(""),i(),m(()=>{c.on("model-training-status",o=>{modelTraining.value=o})});async function i(){const{data:o}=await f("/api/articles/validation",{method:"post",body:{userID:localStorage==null?void 0:localStorage.getItem("aiUserUID")}},"$MuntDq3tqK");p(o,e=>{s.value=e})}async function n(o){var e;await _("/api/articles/validation",{method:"put",body:{userID:localStorage==null?void 0:localStorage.getItem("aiUserUID"),articleID:(e=s.value)==null?void 0:e._id,validationResult:o}},"$vAJPTO2hDL").then(()=>{i()})}return(o,e)=>l(s)?(x(),b("div",g,[t("div",v,[k,t("div",w,[t("small",y,[t("b",null,d(l(s).date),1)]),t("h3",{class:"text-lg mb-4",innerHTML:l(s).text.split(/\s+/).slice(0,15).join(" ")},null,8,D),t("p",{class:"text-md text-gray-100",innerHTML:l(s).text},null,8,I)]),t("div",A,[t("a",{class:"text-md text-blue-400 hover:opacity-80",href:l(s).link,target:"_blank"},d(l(s).link),9,L)])]),t("div",M,[t("div",T,[t("button",{class:"p-4 bg-green-600 rounded-xl font-semibold",onClick:e[0]||(e[0]=r=>n("accept"))}," Accept "),t("button",{class:"p-4 bg-red-600 rounded-xl font-semibold",onClick:e[1]||(e[1]=r=>n("reject"))}," Reject "),t("button",{class:"p-4 bg-sky-600 rounded-xl font-semibold",onClick:e[2]||(e[2]=r=>n("skip"))}," Skip ")])])])):h("",!0)}};export{H as default};
