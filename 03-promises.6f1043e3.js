function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var l=o("eWCmQ");let i=null,a=null,s=null,u=null,d=0;document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const n=new FormData(t.target);i=parseInt(Object.fromEntries(n).delay),a=parseInt(Object.fromEntries(n).step),s=parseInt(Object.fromEntries(n).amount),setTimeout((()=>{u=setInterval((()=>{const t=i+a*d;var n,r;d+=1,(n=d,r=t,new Promise(((e,t)=>{Math.random()>.3?e(`✅ Fulfilled promise ${n} in ${r}ms`):t(`❌ Rejected promise ${n} in ${r}ms`)}))).then((t=>e(l).Notify.success(t))).catch((t=>e(l).Notify.failure(t))),d===s&&(clearInterval(u),d=0)}),a)}),i)}));
//# sourceMappingURL=03-promises.6f1043e3.js.map
