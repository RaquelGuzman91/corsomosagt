function CrearSlidersMarcas() {
    const slidersMarcas = document.getElementById("container-container");
    slidersMarcas.innerHTML = `
     <section class="splide" aria-label="Splide Basic HTML Example">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide"><img src="../img/FREIGHTLING.avif" alt=""></li>
                    <li class="splide__slide"><img src="../img/logo-marca-TDP-truck-diesel-parts.webp" alt=""></li>
                    <li class="splide__slide"><img src="../img/logo-marca-century.png" alt=""></li>
                    <li class="splide__slide"><img src="../img/logo-marca-columbia.webp" alt=""></li>
                    <li class="splide__slide"><img src="../img/log-marca-detroit.jpg" alt=""></li>
                    <li class="splide__slide"><img src="../img/logo-marca-cummins.webp" alt=""></li>
                </ul>
            </div>
        </section>
        
    `;
}
CrearSlidersMarcas();
