import { datas } from "./data.js";

function setHeaderLinks() {
  Object.entries(datas.links).forEach(([key, href]) => {
    const el = document.getElementById(`header-${key}`);
    if (el) el.href = href;
  });

  Object.entries(datas.redes).forEach(([key, href]) => {
    const el = document.getElementById(`red-${key}`);
    if (el) el.href = href;
  });

  Object.entries(datas.info).forEach(([key, value]) => {
    const el = document.getElementById(`info-${key}`);
    if (el) {
        el.textContent = value;
    }
  });
}

document.addEventListener("DOMContentLoaded", setHeaderLinks);