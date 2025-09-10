const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);

numbers.push(7);//Agrega un tipo de dato al final del array
numbers.push(8);
console.log(numbers);

numbers.pop();// Elimina el ultimo elemento
console.log(numbers);

numbers.unshift(0);//Agrega un tipo de dato  al principio del array
console.log(numbers);

numbers[2] = 7;//Agrega un numero en la posicion que se le indique
console.log(numbers);

const numbersSlice = numbers.slice(0, 4);//parte la mitad y lo copia y me muestra loque corte 
console.log(numbersSlice);
console.log(numbers);

const numbersSplice = numbers.splice(0, 4);//parte el array a la mitad realmente y luego si pones un console log te muestra el resto
console.log(numbersSplice);
console.log(numbers);







