/*
const numbers = [1, 2, 3, 4, 5, 6];

const [a, ...resto] = numbers;

console.log("Numbers: ", a);
console.log("Resto: ", resto);
*/

/*
export function sumar(a, b) {
    return a + b;
}

/si se pone el default se puede poner cualquier nombre en el import en cambio i se saca el default 
/ hay que poner estrictamente el el mismo nombre dentro de llaves {}
*/

export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

export function dividir(a, b) {
    return a * b;
}

export function multiplicar(a, b) {
    return a / b;
}

export const operaciones = {
    sumar,
    restar,
    dividir,
    multiplicar,
};

export default {
    sumar,
    restar,
    dividir,
    multiplicar,
}