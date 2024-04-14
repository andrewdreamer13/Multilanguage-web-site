import { firstPage } from "./data.js";
import { secondPage } from "./data.js";
import { thirdPage } from "./data.js";

const langSelect = document.querySelector("#lang");
let currentPathName = window.location.pathname;
let currentText = {};
let lang;
let currentLang;

function checkPagePathName() {
  switch (currentPathName) {
    case "/index.html":
      currentText = firstPage;
      break;
    case "/html.html":
      currentText = secondPage;
      break;
    case "/css.html":
      currentText = thirdPage;
      break;

    default:
      currentText = secondPage;
      break;
  }
}
checkPagePathName();

langSelect.addEventListener("change", () => {
  lang = langSelect.value;
  location.href = window.location.pathname + "#" + lang;
  localStorage.setItem("language", lang);
  document.querySelector("title").textContent = currentText["unit"][lang];
  for (let key in currentText) {
    const element = document.querySelector(`[data-lang=${key}]`);
    if (element) {
      element.textContent = currentText[key][lang];
    }
  }
});

window.addEventListener("load", () => {
  currentLang = localStorage.getItem("language");
  if(currentLang) {
    location.href = window.location.pathname + "#" + currentLang;
    document.querySelector("title").textContent = currentText["unit"][currentLang];
    for (let key in currentText) {
      const element = document.querySelector(`[data-lang=${key}]`);
      if (element) {
        element.textContent = currentText[key][currentLang];
      }
    }
    langSelect.value = currentLang;
  } 
 
});
