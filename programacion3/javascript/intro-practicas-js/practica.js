const numeros = [1, 3, 142, 7382, 4.5, 9.9, 23, 1, 4, 7];
const numBuscado = 23;

function encontrarNumero(array, numBuscado){

    for (const numero of array) {
        if(numero === numBuscado){
            return true;
        }
    }
    return false
}

console.log(encontrarNumero(numeros, numBuscado));