const $ul = document.getElementById("app");

const API_URL = "https://rickandmortyapi.com/api/character";

function displayCharacter(character) {
  const {name, status} = character
  const html = `
    <li>${name} - ${status}</li>
  `;
  return html;
}

fetch(API_URL)
.then((res) => res.json())
.then((data) => {
  let allCharacters = "";
  data?.results?.forEach((c) => {
    allCharacters += displayCharacter(c);
  });
  $ul.innerHTML = allCharacters;
});