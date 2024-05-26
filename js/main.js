document.addEventListener('DOMContentLoaded', function() {
    // Obtener el botón específico que debe activar la alerta
    var recoElement = document.querySelector('.reco');

    if (recoElement) {
        // Agregar el evento de clic solo a este elemento
        recoElement.addEventListener('click', function() {
            showOverlay();
        });
    }

    // También puedes agregar eventos de clic a otros botones si es necesario
    // var otroBoton = document.querySelector('.otro-boton');
    // if (otroBoton) {
    //     otroBoton.addEventListener('click', function() {
    //         // Acción para el otro botón
    //     });
    // }
});

function showOverlay() {
    var overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.style.display = 'flex'; // O el estilo que desees para mostrar el overlay
    }
}

function hideOverlay() {
    var overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}




document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;

    // Redirige a la página de agradecimiento con el nombre y el correo como parámetros en la URL
    window.location.href = '/components/agradecimiento.html?nombre=' + encodeURIComponent(nombre) + '&email=' + encodeURIComponent(email);
});
