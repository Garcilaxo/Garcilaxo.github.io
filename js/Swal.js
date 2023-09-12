function Loading() {
    
    Swal.showLoading();

    // Aquí puedes realizar alguna operación asincrónica, como cargar datos o realizar una solicitud AJAX
    // Después de que la operación asincrónica haya finalizado, puedes ocultar el mensaje de carga con Swal.close()

    fetch('json/data.json')
    .then(response => response.json())
    .then(data => {
        const claves = Object.keys(data);
        for (let clave of claves) {
            console.log(clave + ": " + data[clave]);
        }
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });
    
    //window.location.href = "Ficha.html";

    Swal.close();
}
