import "./styles/index.css";
import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";
import { handleButtonPress, handleClear, handleTyping } from "./keyHandlers.js";
import themeSwitcher from "./themeSwitcher.js";

const input = document.getElementById("input");
const resultInput = document.getElementById("result");

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress);
});
document.getElementById("clear").addEventListener("click", handleClear);
document.getElementById("input").addEventListener("keydown", handleTyping);
document.getElementById("operatorEqual").addEventListener("click", calculate);
document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipboard);
document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitcher);
