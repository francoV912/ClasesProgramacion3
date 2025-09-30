//objetos globales
document;

window;


/*
    - Seleccion:
    getElementById(), getElementByClassName()
    querySelector(), querySelectorAll()

    -Modificacion:
    textContent, innerHTML, innerText
    setAtribute(), style

    -Creacion:
    createElement, apendChild
    removeChild
*/

//creen un <p>
//le agreguen un texto
//agrguen ese elemento <p> al body

let nuevoElementoP = document.createElement("p");
console.log(nuevoElementoP);

nuevoElementoP.textContent = "Holiiiiiiii";

document.body.appendChild(nuevoElementoP)
