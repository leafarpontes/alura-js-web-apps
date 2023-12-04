import { connectApi } from "./connectApi.js";
import { createVideoCard } from "./renderVideos.js";

async function searchVideo(evt) {
  evt.preventDefault;
  const searchValue = document.querySelector("[data-search]").value;
  const searchResult = await connectApi.searchVideo(searchValue);

  const videosListElement = document.querySelector("[data-videos-list]");

  while (videosListElement.firstChild) {
    videosListElement.removeChild(videosListElement.firstChild);
  }

  searchResult.forEach(el => videosListElement.appendChild(
    createVideoCard(el.titulo, el.descricao, el.url, el.imagem)
  ))
}

const searchButton = document.querySelector("[data-search-btn]");
searchButton.addEventListener("click", evt => searchVideo(evt));