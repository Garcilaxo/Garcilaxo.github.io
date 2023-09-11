function Loading() {
    Swal.showLoading();

    var cargarFicha = document.getElementById("cargarFicha");

    // Aquí puedes realizar alguna operación asincrónica, como cargar datos o realizar una solicitud AJAX
    // Después de que la operación asincrónica haya finalizado, puedes ocultar el mensaje de carga con Swal.close()

    cargarFicha.addEventListener("click", function () {
        // Redirige al usuario a "nueva_pagina.html"
        window.location.href = "Ficha.html";
    });

    Swal.close();
}
