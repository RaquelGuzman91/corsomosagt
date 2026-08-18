import { description } from "./description.js";

function creartarjeta(categoria){
    const contenedor = document.getElementById("container-worshop");
    if(!contenedor) return;

    const productoFiltrados = description.filter( p => p.categoria === categoria);

contenedor.innerHTML = productoFiltrados.map(producto =>`
    <article class="box" data-category="${producto.dataProducto}">
        <figure>
            <div class="hover-img">
                <img src="${producto.imgHover}" alt="imagen repuestos">
                </div>
                <img src="${producto.img}" alt="imagen repuestos">
        </figure>
        <div class="box-info">
            <h2>${producto.nombre}</h2>
            <p>${producto.repuesto}</p>
            <button  data-producto="${producto.nombre},${producto.repuesto}" id="openBtn" class="openBtn" href="#"><i class="fa-brands fa-whatsapp"></i>Comprar ahora</button>
        </div>
    </article>
`).join("");
}

const pagina = window.location.pathname.split("/").pop();
const categoria = pagina.replace(".html", "").toLowerCase();

creartarjeta(categoria);

