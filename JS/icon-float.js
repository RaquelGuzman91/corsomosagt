import { datas } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
    //crear fragmento
    const fragment = document.createDocumentFragment();
    //crear contenedor
    const div = document.createElement("div");
    div.classList.add("icon-float");
    //crear el enlace
    const a = document.createElement("a");
    a.href = datas.redes.whatsapp;
    a.target = "_blank";
    a.rel = "no-referrer";
    //crear el icono
    const icon = document.createElement("i");
    icon.classList.add("fa-brands", "fa-whatsapp")
    //insertar el icono dentro del enlace
    a.appendChild(icon);
    //insertar el enlace dentro del div
    div.appendChild(a);
    //agregar el div dentro del fragment
    fragment.appendChild(div);
    //insertar el contenedor con id
    document.querySelector("#icon-float").appendChild(fragment);
    
});
