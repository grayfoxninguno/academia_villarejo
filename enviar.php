<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Correo no válido.";
        exit;
    }

    $destinatario = "info@laacademiavillarejo.es";
    $asunto = "Mensaje enviado desde la Web";
    $contenido = "Nombre: $nombre\nCorreo: $email\nMensaje:\n$mensaje";
    $headers = "From: info@laacademiavillarejo.es\r\nReply-To: $email";

    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo "¡Mensaje enviado correctamente!";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>
