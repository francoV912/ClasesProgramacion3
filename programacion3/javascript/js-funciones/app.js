//FUNCIONES
/*
    LAs funciones en js sin consideradas ciodadanos de primra clase
*/

//Declaracion de funcion

function saludar(nombre = "invitado") {

    console.log("Hola", nombre);

}

saludar();

const saludo = function saludar(nombre = "invitado") {

    console.log("Hola", nombre);

}// se puede guardar una funcion en una variable

function suma(n1, n2) {
    console.log(n1+n2);
}
suma(5,9);
