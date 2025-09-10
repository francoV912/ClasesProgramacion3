
function scope() {
    if(true) {
        var global = 10;
        let local = 20;

        console.log(
            `Dentro del bloque 1: var global = ${global} - let local = ${local}`
        );
    }

        console.log(
            `Dentro del bloque 1:global = ${global}`
        );
        console.log(
            `Dentro del bloque 1: local = ${local}`
        );
}

scope();