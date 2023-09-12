document.addEventListener("DOMContentLoaded", function() {
  // Leer los datos del almacenamiento local
  const dataJSON = localStorage.getItem("datosJSON");
  if (dataJSON) {
      const data = JSON.parse(dataJSON);

      console.log(data.influcard.username);
      // Mostrar los datos en la página
      document.getElementById("nombre").textContent = `Nombre: ${data.influcard.username}`;
      //document.getElementById("edad").textContent = `Edad: ${data.edad}`;
      //document.getElementById("ciudad").textContent = `Ciudad: ${data.ciudad}`;
  } else {
      console.error("No se encontraron datos en el almacenamiento local.");
  }
});