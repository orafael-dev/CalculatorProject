import "./src/styles/index.css";
import calculate from "./src/calculate.js";
import copyToClipboard from "./src/copyToClipboard.js";
import {
  handleButtonPress,
  handleClear,
  handleTyping,
} from "./src/keyHandlers.js";
import themeSwitcher from "./src/themeSwitcher.js";

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
