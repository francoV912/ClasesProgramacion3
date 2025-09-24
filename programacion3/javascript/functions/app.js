const sumar = (n1, n2) => n1 + n2;
const resar = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => {
    if ( n2 == 0) return "No se puede dividir por cero"
    return n1 / n2
}

const calculadora = (a, b, operacion) => {
    let result;
    if (operacion == "sumar") {
        result = sumar(a, b);
    }else if(operacion =="multiplicar"){
        result = multiplicar(a, b);
    }else if(operacion == "restar"){
        result = restar(a, b);
    }else{
        result = "No hay operacion"
    }
}

const calculadora = (a, b, operacion) => {
    let result;
    if (operacion) {
        result = operacion(a, b);
    }else{
        result = "No hay operacion";
    }
    console.log(result)
}
calculadora(6, 0, dividir);

//callback: un callback es una funcion que es pasada por paametro a otra funcion