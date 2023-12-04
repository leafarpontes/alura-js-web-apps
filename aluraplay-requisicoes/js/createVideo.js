import { connectApi } from "./connectApi.js";
const form = document.querySelector("[data-form]");

async function createVideo(evt) {
  evt.preventDefault();

  const img = document.querySelector("[data-img]").value;
  const url = document.querySelector("[data-url]").value;
  const title = document.querySelector("[data-title]").value;
  const desc = Math.floor(Math.random() * 10).toString();

  await connectApi.createVideo(title, desc, url, img);

  window.location.href = "../pages/envio-concluido.html";
}

form.addEventListener("submit", evt => createVideo(evt));