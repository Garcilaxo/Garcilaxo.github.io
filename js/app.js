document.addEventListener("DOMContentLoaded", function() {
  // Leer los datos del almacenamiento local
  const dataJSON = localStorage.getItem("datosJSON");
  if (dataJSON) {
      const data = JSON.parse(dataJSON);
      
      // Mostrar los datos en la página
      document.getElementById("nombre").textContent = `${data.influcard.username}`;
      //document.getElementById("edad").textContent = `Edad: ${data.edad}`;
      //document.getElementById("ciudad").textContent = `Ciudad: ${data.ciudad}`;
  } else {
      console.error("No se encontraron datos en el almacenamiento local.");
  }
});