new Promise((resolve) => {
    setTimeout(() => resolve(10) , 2000);
})
.then(num => {
    console.log("Numero inicial: ",num);
    return num *2;
})
.catch();