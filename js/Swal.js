function Loading() {
    
    Swal.showLoading();

    // Aquí puedes realizar alguna operación asincrónica, como cargar datos o realizar una solicitud AJAX
    // Después de que la operación asincrónica haya finalizado, puedes ocultar el mensaje de carga con Swal.close()

    fetch('json/data.json')
    .then(response => response.json())
    .then(data => {
        // Almacenar los datos en el almacenamiento local (localStorage)
        localStorage.setItem("datosJSON", JSON.stringify(data));
        console.log(data.influcard);

        // Redirigir al usuario al archivo resultado.html
        window.location.href = "Ficha.html";
    })
    .catch(error => {
        console.error("Error:", error);
    });

    CargarDatos();

    Swal.close();
}

function CargarDatos() {
    // Leer los datos del almacenamiento local
    const dataJSON = localStorage.getItem("datosJSON");
    if (dataJSON) {
        const data = JSON.parse(dataJSON);
  
        // Mostrar los datos en la página
        document.getElementById("nombre").textContent = data.influcard.username;
        //document.getElementById("edad").textContent = `Edad: ${data.edad}`;
        //document.getElementById("ciudad").textContent = `Ciudad: ${data.ciudad}`;
    } else {
        console.error("No se encontraron datos en el almacenamiento local.");
    }
  }
