!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var i=o("iU1Pc"),l=null,u=null,a=null,c=null,f=0;document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var t=new FormData(n.target);l=parseInt(Object.fromEntries(t).delay),u=parseInt(Object.fromEntries(t).step),a=parseInt(Object.fromEntries(t).amount),setTimeout((function(){c=setInterval((function(){var n,t,r=l+u*f;(n=f+=1,t=r,new Promise((function(e,r){Math.random()>.3?e("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")):r("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))).then((function(n){return e(i).Notify.success(n)})).catch((function(n){return e(i).Notify.failure(n)})),f===a&&(clearInterval(c),f=0)}),u)}),l)}))}();
//# sourceMappingURL=03-promises.b1780bba.js.map
