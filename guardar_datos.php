<?php
$nombre = $_POST['nombre'] ?? '';
$email = $_POST['email'] ?? '';

if (!empty($nombre) && !empty($email)) {
    $datos = "Nombre: $nombre\nCorreo electrónico: $email\n\n";
    file_put_contents('src/datos.txt', $datos, FILE_APPEND);
}
?>