const $form = document.querySelector("form");
const $search = document.getElementById("search");
const $results = document.querySelector(".results");
const $btnShowMore = document.getElementById("btn-show-more");

let page = 1;

const {VITE_API_URL: apiUrl, VITE_ACCESS_KEY: accessKey} = import.meta.env

async function searchImages() {
  const inputData = $search.value.trim() || "random";

  const url = new URL(apiUrl);
  url.searchParams.append("page", page);
  url.searchParams.append("query", inputData);
  url.searchParams.append("client_id", accessKey);
  
  const res = await fetch(url);
  const {results} = await res.json();

if (page == 1) {
  $results.innerHTML = "";
}

  results.map((result) => {
    const imageWrapper = document.createElement("article");
    imageWrapper.classList.add("search-result");

    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.append(image, imageLink);

    $results.appendChild(imageWrapper)
  });

  page++;

  if (page > 1) {
    $btnShowMore.style.display = "block";
  }
}

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
})

$btnShowMore.addEventListener("click", searchImages);
