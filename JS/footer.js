import { datas } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();

  // <section class="container-footer">
  const section = document.createElement("section");
  section.classList.add("container-footer");

  // --- LOGOS + REDES ---
  const articleImg = document.createElement("article");
  articleImg.classList.add("footer-img");

  const figure = document.createElement("figure");
  const imgPhone = document.createElement("img");
  imgPhone.src = datas.logos.phone;
  imgPhone.classList.add("img-phone");

  const imgDesktop = document.createElement("img");
  imgDesktop.src = datas.logos.desktop;
  imgDesktop.classList.add("img-desktop");

  figure.appendChild(imgPhone);
  figure.appendChild(imgDesktop);

  const divLinks = document.createElement("div");
  divLinks.classList.add("footer-links");

  const redesImg = ["facebook", "instagram", "tiktok"];

  Object.entries(datas.redes).forEach(([nombre, url]) => {
    if (!redesImg.includes(nombre)) return;

    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.target = "_blank";
    enlace.rel = "no-referrer";

    const icono = document.createElement("i");
    icono.className =
      nombre === "facebook" ? "fa-brands fa-facebook" :
      nombre === "instagram" ? "fa-brands fa-instagram" :
      nombre === "tiktok" ? "fa-brands fa-tiktok" : "fa-solid fa-link";

    enlace.appendChild(icono);
    divLinks.appendChild(enlace);
  });

  articleImg.appendChild(figure);
  articleImg.appendChild(divLinks);

  // --- ENLACES RÁPIDOS ---
  const divText = document.createElement("div");
  divText.classList.add("footer-text");

  const articleLinks = document.createElement("article");
  articleLinks.classList.add("footer-card");

  const titleLinks = document.createElement("a");
  titleLinks.classList.add("title");
  titleLinks.textContent = "enlaces rapidos";
  articleLinks.appendChild(titleLinks);

  const ul = document.createElement("ul");
  datas.enlacesRapidos.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = item.texto;
    li.appendChild(a);
    ul.appendChild(li);
  });
  articleLinks.appendChild(ul);

  // --- CONTACTO ---
  const articleContact = document.createElement("article");
  articleContact.classList.add("footer-contact");

  const titleContact = document.createElement("a");
  titleContact.classList.add("title");
  titleContact.textContent = "contacto";
  articleContact.appendChild(titleContact);

  const spanTel = document.createElement("span");
  spanTel.classList.add("icon");
  spanTel.innerHTML = `<i class="fa-solid fa-phone"></i><a href="${datas.redes.telefono}" rel="no-referrer">${datas.contacto.telefono}</a>`;

  const spanMail = document.createElement("span");
  spanMail.classList.add("icon");
  spanMail.innerHTML = `<i class="fa-regular fa-envelope"></i><a href="${datas.redes.correo}" rel="no-referrer">${datas.contacto.correo}</a>`;

  articleContact.appendChild(spanTel);
  articleContact.appendChild(spanMail);

  // --- UBICACIÓN ---
  const articleUbicacion = document.createElement("article");
  articleUbicacion.classList.add("footer-card");

  const titleUbicacion = document.createElement("a");
  titleUbicacion.classList.add("title");
  titleUbicacion.textContent = "ubicacion";

  const spanLocal = document.createElement("span");
  spanLocal.classList.add("link-local");
  spanLocal.innerHTML = `
    <h2>${datas.ubicacion.titulo1}</h2>
    <h2>${datas.ubicacion.titulo2}</h2>
    <p>${datas.ubicacion.direccion}</p>
    <a class="button-footer" href="${datas.redes.waze}" target="_blank" rel="no-referrer">
      <i class="fa-brands fa-waze"></i> ir con waze
    </a>
  `;

  articleUbicacion.appendChild(titleUbicacion);
  articleUbicacion.appendChild(spanLocal);

  // --- Armamos todo ---
  divText.appendChild(articleLinks);
  divText.appendChild(articleContact);
  divText.appendChild(articleUbicacion);

  section.appendChild(articleImg);
  section.appendChild(divText);

  fragment.appendChild(section);

  // Insertamos en el footer
  const footer = document.querySelector("footer");
  footer.appendChild(fragment);
});