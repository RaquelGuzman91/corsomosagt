/*const scriptUrl = '';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault()

    fetch(scriptUrl, {method: 'POST', body: new FormData(form)})
            .then(response => Swal.fire({
        title: "¡MUCHAS GRACIAS!",
        text: "Formulario Envíado",
        icon: "success"}))
            .then( () => { window.location.reload() } )
            .catch(error => console.error('Error', error.message))
})*/



/*
const scriptUrl = 'https://script.google.com/macros/s/AKfycbyezBK9W12vxn-2yJBTUBt_nTgQu_IAHSm-il9spUptrOYGpggoHcKYCDUddQxExCMt/exec';
const form = document.forms['contact-form'];
const alertBox = document.getElementById('custom-alert');

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptUrl, {method: 'POST', body: new FormData(form)})
    .then(response => {
      // Mostrar mensaje personalizado
      alertBox.textContent = "¡MUCHAS GRACIAS!\n Formulario enviado\nNos estaremos comunicando lo mas pronto posible..";
      alertBox.classList.remove('hidden');
      alertBox.classList.add('show');

      // Ocultar después de unos segundos
      setTimeout(() => {
        alertBox.classList.remove('show');
        alertBox.classList.add('hidden');
        window.location.reload();
      }, 3000);
    })
    .catch(error => console.error('Error', error.message));
});
*/

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const alertBox = document.getElementById("custom-alert");
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbyezBK9W12vxn-2yJBTUBt_nTgQu_IAHSm-il9spUptrOYGpggoHcKYCDUddQxExCMt/exec'; // aquí va tu URL de Google Sheets

  // Escuchar cualquier envío de formulario dentro del modal
  modal.addEventListener("submit", e => {
    e.preventDefault();
    const form = e.target; // el formulario que disparó el evento

    fetch(scriptUrl, { method: 'POST', body: new FormData(form) })
      .then(response => {
        // Mostrar mensaje personalizado
        alertBox.textContent = "¡MUCHAS GRACIAS!\nFormulario enviado\nNos estaremos comunicando lo más pronto posible..";
        alertBox.classList.remove('hidden');
        alertBox.classList.add('show');

        // Ocultar después de unos segundos
        setTimeout(() => {
          alertBox.classList.remove('show');
          alertBox.classList.add('hidden');
          modal.style.display = "none"; // cerrar modal en vez de recargar
          form.reset(); // limpiar formulario
        }, 3000);
      })
      .catch(error => console.error('Error', error.message));
  });
});