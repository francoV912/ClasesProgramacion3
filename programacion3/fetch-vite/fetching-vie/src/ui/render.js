export function renderUsers(users, userLista, statusEl) {
    userLista.innerHTML = "";

    users.forEach((user) => {
        const li = document.createElement("li")
        li.innerHTML = `
        <strong>${user.name}</strong>
        <small>${user.email} - ${user.address.city}</small>
        `

        userLista.appendChild(li);
    });

    statusEl.textContent = `Mostrando ${users.length} usuarios`;

}