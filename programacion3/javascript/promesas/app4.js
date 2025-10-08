function serverConexion(miliSegundos) {
    return new Promise((resolve) => setTimeout(resolve, miliSegundos));
}

async function iniciarServidor() {
    console.log("Iniciando...");
    await serverConexion(2000)
    console.log("listooooooooooo!!!!!!!!!");
}

iniciarServidor();