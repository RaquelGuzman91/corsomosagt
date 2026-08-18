import { description } from "../COR/description.js";

function crearFormulario(){
    const seccion = document.getElementById("modal");
    seccion.innerHTML = `
        <div  class="modal-content">
                <h2>Formulario de compra</h2>
                <span id="closeBtn" class="close">&times;</span>
            <form name="contact-form" method="post" action="">
                <figure class="input-grid">
                    <label for="">nombre completo <span>*</span></label>
                    <input class="input-grid" type="text" name="nombre" placeholder="Nombre del cliene" inputmode="text" required>
                    <label for="">telefono <span>*</span></label>
                    <input class="input-grid" type="tel"  name="telefono" placeholder="Telefono" maxlength="8" inputmode="numeric" required>
                </figure>
                <figure class="input-grid">
                    <label for="">dirección de entrega <span>*</span></label>
                    <input type="text" name="direccion" placeholder="Direccion" inputmode="text" required>
                    <label for="">Correo electroníco <span>*</span></label>
                    <input type="email" name="correo" placeholder="Correo electronico" inputmode="email" required>
                </figure>
                <label for="">cantidad <span>*</span></label>
                <input type="number" min="0" name="cantidad" placeholder="cantidad" inputmode="numeric" required>
                <label for="">repuesto <span>*</span></label>
                <input type="text" name="repuesto" id="repuestoInput" readonly>
                <button class="button-form" id="formBtn" type="submit">Enviar solicitud de compra</button>
            </form>
            </div>

            <!-- Contenedor para el mensaje -->
        <div id="custom-alert" class="hidden"></div>    
    `
}
crearFormulario();