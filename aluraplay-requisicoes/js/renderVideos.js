import { connectApi } from "./connectApi.js";

const videosListElement = document.querySelector("[data-videos-list]");

export function createVideoCard(title, desc, url, img) {
  const listItem = document.createElement("li");
  listItem.className = "videos__item";
  listItem.innerHTML = `<iframe width="100%" height="72%" src="${url}"
  title="${title}" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>
<div class="descricao-video">
  <img src="${img}" alt="logo canal alura">
  <h3>${title}</h3>
  <p>${desc}</p>
</div>`;

  return listItem;
}

async function getVideos() {
  const videosList = await connectApi.getVideos();
  videosList.forEach(el => videosListElement.appendChild(
    createVideoCard(el.titulo, el.descricao, el.url, el.imagem)
  ))
}

getVideos();