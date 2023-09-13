const slider = document.getElementById("slider1");

slider.addEventListener("input", function() {
    // Muestra el valor actual del slider en el elemento de texto
    slider.value.background = "linear-gradient(to right, rgb(56, 132, 232) 80%, rgb(216, 212, 212) 20%)";
    console.log(slider.value.background);
});





