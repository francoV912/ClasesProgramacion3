const persona ={
    nombre:"Jose",
    apellido:"Perez",
    edad: 45,
    direccion: {
        calle:"calle falsa",
        numero: 123,
    },
};

const str = "edad"

persona[str] = "35"

console.log(persona);

