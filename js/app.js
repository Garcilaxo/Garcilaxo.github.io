document.addEventListener("DOMContentLoaded", function() {
  // Leo los datos del almacenamiento local
  const dataJSON = localStorage.getItem("datosJSON");
  if (dataJSON) {
      const data = JSON.parse(dataJSON);
      
      // Muestro los datos en la página
      document.getElementById("nombre").textContent = `${data.influcard.username}`;
      document.getElementById("imagen").src = data.influcard.account_picture;
      document.getElementById("link").href = data.influcard.account_url;
      document.getElementById("edad").textContent = `Mujer, ${data.influcard.age} años`;
      document.getElementById("date").textContent = `Datos actualizados a ${data.influcard.updated_at_formated}`;
      document.getElementById("followers").textContent = `${data.influcard.followers_formated}`;
      document.getElementById("fake_followers").textContent = `${data.influcard.fake_followers_formated} %`;
      document.getElementById("real_followers").textContent = `${data.influcard.real_followers_formated}`;
      document.getElementById("alcance").textContent = `${data.influcard.reach_formated}`;
      document.getElementById("impresiones").textContent = `${data.influcard.avg_impressions_formated}`;
      document.getElementById("reproducciones").textContent = `${data.influcard.vplays_formated}`;
      document.getElementById("engagement").textContent = `${data.influcard.avg_engagement_formated}`;
      
      

    
  } 
  
  else {
      console.error("No se encontraron datos en el almacenamiento local.");
  }
});