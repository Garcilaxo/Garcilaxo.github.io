function Loading() {
    
    Swal.showLoading();

    // Aquí puedes realizar alguna operación asincrónica, como cargar datos o realizar una solicitud AJAX
    // Después de que la operación asincrónica haya finalizado, puedes ocultar el mensaje de carga con Swal.close()

    fetch('json/data.json')
    .then(response => response.json())
    .then(data => {

        Swal.close();
        // Almacenar los datos en el almacenamiento local (localStorage)
        localStorage.setItem("datosJSON", JSON.stringify(data));
        console.log(data.influcard);
        console.log(data.influcard.top_countries_formated[0].country_shot);

        // Redirigir al usuario al archivo resultado.html
        window.location.href = "Ficha.html";
    })
    .catch(error => {
        console.error("Error:", error);
    });
}


