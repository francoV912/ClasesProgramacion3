/*const numeros = [1, 3, 142, 7382, 4.5, 9.9, 10, 1, 4, 7];
const cadena = "Hola esta es una caden a de muchismio y mega epicos caracteres"

console.log(numeros.length);
console.log(cadena.length);

for(i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

console.log("============================================");


for (const unElemento of numeros) {
    console.log(unElemento);
}*/

const persona = {
    nombre: "pepito",
    edad: 30,
    ciudad: "san nicolash"
}

for (const key in persona) {
        console.log (`${key}: ${persona[key]}`);
}
