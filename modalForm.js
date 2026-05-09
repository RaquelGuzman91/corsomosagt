document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openBtns = document.querySelectorAll(".openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const repuestoInput = document.getElementById("repuestoInput");

  // Abrir modal con cualquiera de los botones
  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Tomar el valor del data-producto
      const producto = btn.getAttribute("data-producto");
      // Colocar ese valor en el input
      repuestoInput.value = producto;

      // Mostrar el modal
      modal.style.display = "block";
    });
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