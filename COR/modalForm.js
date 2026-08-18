document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeBtn");
  const repuestoInput = document.getElementById("repuestoInput");


  // Escuchar clics en el contenedor dinámico
  const contenedor = document.getElementById("container-worshop");
  contenedor.addEventListener("click", (event) => {
    if (event.target.classList.contains("openBtn")) {
      const producto = event.target.getAttribute("data-producto");
      repuestoInput.value = producto;
      modal.style.display = "flex";
    }
  });

  // Cerrar con botón
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  // Cerrar al hacer clic fuera
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});



/*
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openBtns = document.querySelectorAll(".openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const repuestoInput = document.getElementById("repuestoInput");
  const submitbBtn = form.querySelector("button-form")*/

  /* Abrir modal con cualquiera de los botones
  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {*/
      /* Tomar el valor del data-producto
      const producto = btn.getAttribute("data-producto");*/
      /* Colocar ese valor en el input
      repuestoInput.value = producto;*/

      /* Mostrar el modal
      modal.style.display = "flex";
    });
  });*/

  /* Cerrar con botón
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };*/

  /* Cerrar al hacer clic fuera
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  


});*/