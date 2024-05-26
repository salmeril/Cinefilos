// Obtener los parámetros de la URL
var urlParams = new URLSearchParams(window.location.search);
var nombre = urlParams.get('nombre');
var correo = urlParams.get('email'); // Cambié 'correo' por 'email'

// Si se proporcionó un nombre, actualiza el título y el mensaje personalizado
if (nombre) {
    document.getElementById('graciasTitulo').textContent = '¡Gracias, ' + nombre + ', por unirte!';
}

// Si se proporcionó un correo, actualiza el mensaje personalizado
if (correo) {
    document.getElementById('correoMensaje').textContent = 'Recibe cada semana en tu correo ' + correo + ' recomendaciones exclusivas de películas, especialmente seleccionadas para ti y tu persona especial.';
}
