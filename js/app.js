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

      document.getElementById("audiencia").textContent = `${data.influcard.followers_formated}`;
      document.getElementById("alcance").textContent = `${data.influcard.reach_formated}`;
      document.getElementById("impresiones").textContent = `${data.influcard.avg_impressions_formated}`;
      document.getElementById("reproducciones").textContent = `${data.influcard.vplays_formated}`;
      document.getElementById("engagement").textContent = `${data.influcard.avg_engagement_formated}`;

      document.getElementById("ir_alcance").textContent = `${data.influcard.ir_alcance} %`;
      document.getElementById("ir_audiencia").textContent = `${data.influcard.ir_audiencia} %`;
      document.getElementById("vr_alcance").textContent = `${data.influcard.vr_alcance} %`;
      document.getElementById("vr_audiencia").textContent = `${data.influcard.vr_audiencia} %`;
      document.getElementById("er_alcance").textContent = `${data.influcard.er_alcance} %`;
      document.getElementById("er_audiencia").textContent = `${data.influcard.er_audiencia} %`;

      document.getElementById("male").textContent = `${data.influcard.insight_perc_m} %`;
      document.getElementById("female").textContent = `${data.influcard.insight_perc_f} %`;

      document.getElementById("porcentaje1").textContent = `${parseFloat(data.influcard.insight_perc_13.toFixed(2))} %`;
      document.getElementById("porcentaje2").textContent = `${parseFloat(data.influcard.insight_perc_18.toFixed(2))} %`;
      document.getElementById("porcentaje3").textContent = `${parseFloat(data.influcard.insight_perc_25.toFixed(2))} %`;
      document.getElementById("porcentaje4").textContent = `${parseFloat(data.influcard.insight_perc_35.toFixed(2))} %`;
      document.getElementById("porcentaje5").textContent = `${parseFloat(data.influcard.insight_perc_45.toFixed(2))} %`;
      document.getElementById("porcentaje6").textContent = `${parseFloat(data.influcard.insight_perc_65.toFixed(2))} %`;

      document.getElementById("slider1").value = `${parseFloat(data.influcard.insight_perc_13.toFixed(2))}`;
      document.getElementById("slider2").value = `${parseFloat(data.influcard.insight_perc_18.toFixed(2))}`;
      document.getElementById("slider3").value = `${parseFloat(data.influcard.insight_perc_25.toFixed(2))}`;
      document.getElementById("slider4").value = `${parseFloat(data.influcard.insight_perc_35.toFixed(2))}`;
      document.getElementById("slider5").value = `${parseFloat(data.influcard.insight_perc_45.toFixed(2))}`;
      document.getElementById("slider6").value = `${parseFloat(data.influcard.insight_perc_65.toFixed(2))}`;

      document.getElementById("ES").textContent = `${data.influcard.top_countries_formated[0].country_short}`;
      document.getElementById("US").textContent = `${data.influcard.top_countries_formated[0].country_short}`;
      document.getElementById("MX").textContent = `${data.influcard.top_countries_formated[2].country_short}`;
      document.getElementById("FR").textContent = `${data.influcard.top_countries_formated[3].country_short}`;
      document.getElementById("IT").textContent = `${data.influcard.top_countries_formated[4].country_short}`;
      document.getElementById("otros").textContent = `${data.influcard.top_countries_formated[5].country_short}`;

      document.getElementById("ES_value").textContent = `${data.influcard.top_countries_formated[0].value} %`;
      document.getElementById("US_value").textContent = `${data.influcard.top_countries_formated[1].value} %`;
      document.getElementById("MX_value").textContent = `${data.influcard.top_countries_formated[2].value} %`;
      document.getElementById("FR_value").textContent = `${data.influcard.top_countries_formated[3].value} %`;
      document.getElementById("IT_value").textContent = `${data.influcard.top_countries_formated[4].value} %`;
      document.getElementById("otros_value").textContent = `${data.influcard.top_countries_formated[5].value} %`;

      document.getElementById("slider_es").value = `${data.influcard.top_countries_formated[0].value}`;
      document.getElementById("slider_us").value = `${data.influcard.top_countries_formated[1].value}`;
      document.getElementById("slider_mx").value = `${data.influcard.top_countries_formated[2].value}`;
      document.getElementById("slider_fr").value = `${data.influcard.top_countries_formated[3].value}`;
      document.getElementById("slider_it").value = `${data.influcard.top_countries_formated[4].value}`;
      document.getElementById("slider_other").value = `${data.influcard.top_countries_formated[5].value}`;

      


  } 
  
  else {
      console.error("No se encontraron datos en el almacenamiento local.");
  }
});