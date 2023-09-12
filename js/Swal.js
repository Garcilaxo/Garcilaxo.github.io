function Loading() {
    
    Swal.showLoading();

    // Aquí puedes realizar alguna operación asincrónica, como cargar datos o realizar una solicitud AJAX
    // Después de que la operación asincrónica haya finalizado, puedes ocultar el mensaje de carga con Swal.close()

    fetch('json/data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Mostrar los datos en el HTML
            document.getElementById("nombre").textContent = data.username;
            //document.getElementById("edad").textContent = data.edad;
            //document.getElementById("ciudad").textContent = data.ciudad;
            console.log(document.getElementById("nombre").textContent);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
    
    window.location.href = "Ficha.html";

    Swal.close();
}
