function Loading() {
    
    Swal.showLoading();

    // Aquí puedes realizar alguna operación asincrónica, como cargar datos o realizar una solicitud AJAX
    // Después de que la operación asincrónica haya finalizado, puedes ocultar el mensaje de carga con Swal.close()

    fetch("datos.json")
        .then(function (res){
            console.log(res);
        })
        /*
        .then(data => {
            // Almacenar los datos en el almacenamiento local (localStorage)
            localStorage.setItem("datosJSON", JSON.stringify(data));
        })
        .catch(error => {
            console.error("Error:", error);
        });
        */

    // Redirigir al usuario al archivo resultado.html
    window.location.href = "Ficha.html";

    Swal.close();
}


