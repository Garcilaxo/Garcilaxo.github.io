function Loading() {
    Swal.showLoading();

    // Aquí puedes realizar alguna operación asincrónica, como cargar datos o realizar una solicitud AJAX
    // Después de que la operación asincrónica haya finalizado, puedes ocultar el mensaje de carga con Swal.close()

    // Ejemplo de cierre después de 3 segundos (simulación)
    setTimeout(function() {
        Swal.close();
        // Puedes agregar aquí el código para mostrar el contenido deseado después de cargar
    }, 3000); // Cambia el tiempo a tu preferencia
}
