/*script libreria splide SLIDER */

        document.addEventListener('DOMContentLoaded', function () {
            new Splide('.splide2', {
                type       : 'loop',
                perPage    : 5,      // número de imágenes visibles al mismo//  tiempo
                perMove    : 1,      // cuántas se mueven por scroll/click
                autoplay   : true,
                arrows     : true,
                pagination : false,
                gap        : '1rem', // espacio entre imágenes
                interval    : 3000,       // tiempo entre cambios (ms)
                pauseOnHover: true,      // no se detiene al pasar el mouse
                breakpoints: {
                1000    : { perPage: 4 }, // en pantallas medianas muestra 3
                690 : { perPage: 3 }, // en tablets muestra 2
                480 : { perPage: 2 }, // en móviles muestra 1
            },


            }).mount();

        
        });