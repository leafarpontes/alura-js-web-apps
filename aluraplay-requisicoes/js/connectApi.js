async function getVideos() {
  const response = await fetch("http://localhost:3000/videos");
  const jsonResponse = await response.json();

  return jsonResponse;
}

async function createVideo(title, desc, url, img) {
  const response = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      titulo: title,
      descricao: `${desc} mil visualizações`,
      url,
      imagem: img
    })
  })

  const jsonResponse = await response.json();
  return jsonResponse;
}

export const connectApi = {
  getVideos,
  createVideo
}