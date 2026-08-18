/*const scriptUrl = '';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptUrl, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    Swal.fire({
      title: "Muchas gracias",
      text: "Su mensaje fue enviado",
      icon: "success"
    });
  })
  .then(() => {
    window.location.reload();
  })
  .catch(error => console.error('Error', error.message));
});*/