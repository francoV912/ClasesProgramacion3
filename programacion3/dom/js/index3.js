const persona = {
    nombre: "Juana Banana",
    edad: 23,
    puesto: "Tech lead",
    foto: "https://imgs.search.brave.com/nS6TNuxb1UPBK-4GidzRWnPwC89TtEjSIIxY3PO4_wk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/YnVzaW5lc3NpbnNp/ZGVyLmVzL3NpdGVz/L25hdmkuYXhlbHNw/cmluZ2VyLmVzL3B1/YmxpYy9tZWRpYS9p/bWFnZS8yMDIzLzA0/L2ZvdG8tbXVqZXIt/Y3JlYWRhLWlhLTMw/MTcwNDQuanBnP3Rm/PTM4NDB4",
};

const {nombre, edad, puesto, foto} = persona;

const contenedorEl = document.querySelector(".contenedor");

const credencial = document.createElement("div");
credencial.style.border = "1px solid black";
credencial.style.padding = "12px";
credencial.style.width = "200px";
credencial.style.textAlign = "center";
credencial.style.borderRadius = "16px";

const image = document.createElement("img");
image.src = persona.foto;
image.style.borderRadius = "50%";
image.style.height = "60px";
image.style.width = "60px";

const nombreEmpleado = document.createElement("h3");
nombreEmpleado.textContent = nombre;

const info = document.createElement("p");
info.textContent = `Edad: ${edad} | Puesto: ${puesto}`

credencial.appendChild(image);
credencial.appendChild(nombreEmpleado);
credencial.appendChild(info);

console.log(contenedorEl.appendChild(credencial));
