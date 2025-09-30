const productos = [
    {
        nombre: "laptop",
        precio: 1200,
        descripcion: "Una re pc",
        foto: "https://imgs.search.brave.com/F_Frcg1rCyVSpQ0jz0xwzqHykwE0FplocymqaxIn1LE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmRl/bGwuY29tL2lzL2lt/YWdlL0RlbGxDb250/ZW50L2NvbnRlbnQv/ZGFtL3NzMi9wcm9k/dWN0LWltYWdlcy9k/ZWxsLWNsaWVudC1w/cm9kdWN0cy9ub3Rl/Ym9va3MvZGVsbC1w/bHVzL2RiMTYyNTUv/bWVkaWEtZ2FsbGVy/eS9ub24tdG91Y2gv/bGFwdG9wLWRlbGwt/cGx1cy1kYjE2MjU1/bnQtaWNlLWJsLWZw/ci1nYWxsZXJ5LTUu/cHNkP2ZtdD1wbmct/YWxwaGEmcHNjYW49/YXV0byZzY2w9MSZo/ZWk9ODA0JndpZD05/NzkmcWx0PTEwMCwx/JnJlc01vZGU9c2hh/cnAyJnNpemU9OTc5/LDgwNCZjaHJzcz1m/dWxs"
    },

    {
        nombre: "telefono",
        precio: 1200,
        descripcion: "Un re telefono",
        foto: "https://imgs.search.brave.com/he9tJTnH0dFtBbo14heffkWEXcSWuX9DBk3zXXcpnpY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bWVnYXRvbmUubmV0/L2ltYWdlcy8vQXJ0/aWN1bG9zL3pvb20v/MTAyL01LVDAzMTRW/SVMtMS5qcGc_dmVy/c2lvbj0zNQ"
    }
]

const contenedorEl = document.getElementById("contenedor");

for (const {nombre, precio, descripcion, foto} of productos) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${foto}" alt="${nombre}">
        <h4>${nombre}</h4>
        <p>${descripcion}</p>
        <p><strong>${precio}</strong></p>`;
    
        contenedorEl.appendChild(card);
}