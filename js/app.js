fetch('json/data.json')
  .then(response => response.json())
  .then(data => {
    // Hacer algo con los datos del JSON
    console.log(data);
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });