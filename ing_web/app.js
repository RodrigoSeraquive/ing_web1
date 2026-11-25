// 1.- Buscar los elementos del DOM
const tarjeta = document.querySelector("#tarjeta");
const btnAzul = document.querySelector("#btnAzul");
const btnVerde = document.querySelector("#btnVerde");
const btnRojo = document.querySelector("#btnRojo");
const btnRestablecer = document.querySelector("#btnRestablecer");

// 2.- Crear una función para cambiar el color
function cambiarColor(color) {
    tarjeta.style.backgroundColor = color;
}

// 3.- Crear una función para restablecer
function restablecer() {
    tarjeta.style.backgroundColor = "#f0f0f0";   // color original
}

// 4.- Escuchar el evento de cada botón
btnAzul.addEventListener("click", () => cambiarColor("blue"));
btnVerde.addEventListener("click", () => cambiarColor("green"));
btnRojo.addEventListener("click", () => cambiarColor("red"));
btnRestablecer.addEventListener("click", restablecer);