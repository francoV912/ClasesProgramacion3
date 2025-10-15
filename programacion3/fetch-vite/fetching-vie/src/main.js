import { fetchUsers } from "./api/userApi";
import { renderUsers } from "./ui/render";

const listaEl = document.getElementById("user-list");
const statusEl = document.getElementById("status");

async function init() {
  const users = await fetchUsers();
  renderUsers(users, listaEl, statusEl);
}

init();