(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const u=document.querySelector(".start-btn"),l=document.querySelector(".game-container"),s=document.querySelector(".result");document.querySelector(".img");function d(i,t=!0){return new Promise((o,e)=>{setTimeout(()=>{t?o("🥃"):e("🖕")},i)})}let a;u.addEventListener("click",()=>{clearTimeout(a);const i=[];s.classList.remove("result-lose"),s.classList.remove("result-win"),s.classList.add("result"),s.textContent="...",u.disabled=!0;for(let t=0;t<3;t++){l.children[t].textContent="";const n=d((t+1)*250,Math.random()>.3);n.then(o=>{l.children[t].textContent=o}).catch(o=>{l.children[t].textContent=o}),i.push(n)}Promise.allSettled(i).then(t=>{!t.map(e=>e.value||e.reason).includes("🖕")?(s.classList.remove("result"),s.classList.add("result-win"),s.textContent="Drink!"):(s.classList.remove("result"),s.classList.add("result-lose"),s.textContent="Home"),u.disabled=!1}),a=setTimeout(()=>{for(let t=0;t<3;t++)l.children[t].textContent="";s.classList.remove("result-lose"),s.classList.remove("result-win"),s.classList.add("result"),s.textContent="Result"},5e3)});
//# sourceMappingURL=commonHelpers.js.map