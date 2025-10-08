const getUser = new Promise((resolve, reject) => {
    const userData = { nombre: "juan", edad: 30}
    const {nombre} = userData;
    
    if(userData){
        resolve(nombre);
    } else if(userData) {
        resolve(edad);
    }
})

getUser
    .then((userName) => console.log("Usuario: ", userName))
    .catch((error) => console.log(errorMsg));