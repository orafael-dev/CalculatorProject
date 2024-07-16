(()=>{"use strict";var __webpack_modules__={568:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function calculate(){const resultInput=document.querySelector("#result");resultInput.value="ERROR",resultInput.classList.add("error");const result=eval(input.value);resultInput.value=result,resultInput.classList.remove("error")}__webpack_require__.d(__webpack_exports__,{A:()=>calculate})}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={},calculate=__webpack_require__(568);function copyToClipboard(e){const t=e.currentTarget;"Copiar"===t.innerText?(t.innerText="Copiado!",t.classList.add("success"),window.navigator.clipboard.writeText(document.querySelector("#result").value)):(t.innerText="Copiar",t.classList.remove("success"))}const src_input_0=document.querySelector("#input");function handleButtonPress(e){const t=e.currentTarget.dataset.value;src_input_0.value+=t}function handleClear(e){src_input_0.value="",src_input_0.focus();const t=document.querySelector("#result");t.classList.remove("error"),t.value=""}function handleTyping(e){e.preventDefault(),["(",")","/","*","-","+","9","8","7","6","5","4","3","2","1","0",".","%"," "].includes(e.key)?src_input_0.value+=e.key:("Backspace"===e.key&&(src_input_0.value=src_input_0.value.slice(0,-1)),"Enter"===e.key&&(0,calculate.A)())}function themeSwitcher(){const e=document.querySelector("main"),t=document.querySelector(":root");"dark"===e.dataset.theme?(t.style.setProperty("--bg-color","#000"),t.style.setProperty("--border-color","#666"),t.style.setProperty("--font-color","#f4f4f4"),t.style.setProperty("--primary-color","#333"),t.style.setProperty("--secondary-color","#ff9f0a"),t.style.setProperty("--success","#4dff91"),e.dataset.theme="ligth"):(t.style.setProperty("--bg-color","#c2e2fe"),t.style.setProperty("--border-color","#adcaec"),t.style.setProperty("--font-color","#15092a"),t.style.setProperty("--primary-color","#b3cdfe"),t.style.setProperty("--secondary-color","#555f71"),t.style.setProperty("--success","#2872b3"),e.dataset.theme="dark")}const src_input=document.getElementById("input"),resultInput=document.getElementById("result");document.querySelectorAll(".charKey").forEach((function(e){e.addEventListener("click",handleButtonPress)})),document.getElementById("clear").addEventListener("click",handleClear),document.getElementById("input").addEventListener("keydown",handleTyping),document.getElementById("operatorEqual").addEventListener("click",calculate.A),document.getElementById("copyToClipboard").addEventListener("click",copyToClipboard),document.getElementById("themeSwitcher").addEventListener("click",themeSwitcher)})();