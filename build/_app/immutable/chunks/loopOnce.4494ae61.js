import{a as l,r}from"./animationSetup.bf376fb9.js";import{w as m,t as f}from"./writeEffect.80d49dcd.js";import{u}from"./unwriteEffect.3ee45c99.js";const L=async(a,o)=>{const{options:t,elements:s}=l(a,o);for(const i of s){const{currentNode:e,text:p}=i;await m(i,t);const c=p.replaceAll("&","&amp;");e.innerHTML===c&&(t.dispatch("done"),await f(t.wordInterval),s.indexOf(i)===s.length-1||(await u(e,t),r(e,t.parentElement,n=>{e===n?n.classList.remove("typing"):n.classList.remove("finished-typing")})),r(e,t.parentElement,n=>{typeof t.keepCursorOnFinish=="number"&&setTimeout(()=>{n.classList.replace("typing","finished-typing")},t.keepCursorOnFinish)}))}return{update(){},destroy(){}}};export{L as default};
