const procesarArry = (array, cb) => {
    return array.map(cb);
};

const dobleDeUnNumero = (num) => num * 2;

const numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(procesarArry(numeros, dobleDeUnNumero));
