const API_USERS_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers(){
    const res = await fetch(API_USERS_URL);

    if(!res.ok){
        throw new Error(`Error HTTP: ${res.staus}`);
    }

    const users = await res.json();

    return users;
}