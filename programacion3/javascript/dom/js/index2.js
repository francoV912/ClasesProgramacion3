const parrafo = document.querySelector("#p1");
parrafo.textContent = "Texto desde js";

const lista = document.querySelector("ul");
const nuevaFruta = document.createElement("li");

nuevaFruta.textContent = "Banana";
lista.appendChild(nuevaFruta);

const divEl = document.getElementById("contenedor");
const nuevoTitulo = "Nuevo Contenido";
divEl.innerHTML = `<h2>${nuevoTitulo}</h2>`;

divEl.style.color = "#ff0000";
divEl.style.backgroundColor = "Yellow";
divEl.style.fontSize = "2rem"