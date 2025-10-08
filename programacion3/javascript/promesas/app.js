const verificarConexion = new Promise((resolve, reject) => {
    // simular una operacion async

    const conexion = Math.random() > 10.5;
    
    setTimeout(() => {
        if (conexion) {
            resolve("operacion exitosa 🆗")
        } else {
            reject("hubo un error... ❌")
        }
    }, 2000);
})

verificarConexion
.then(resultado => console.log(resultado))
.catch((error) => console.error(error));
