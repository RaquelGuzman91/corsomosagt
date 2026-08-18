const form = document.getElementById('contact-form');
const modal = document.getElementById('thankyou-modal');
const closeBtn = document.querySelector('.close');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        form.reset(); /*limpiar el formulario*/
        modal.style.display = 'block'; /*muestra el modal*/
    } else {
        alert("Hubo un problema al enviar el mensaje. Intenta de nuevo.");
    }
});

/*cerrar modal al hacer clic en la X*/
closeBtn.onclick = function () {
    modal.style.display = 'none';
}

/*cerrar modal al hacer clic fuera del contenido*/
window.onclic = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

