async function getVideos() {
  const response = await fetch("http://localhost:3000/videos");
  const jsonResponse = await response.json();

  return jsonResponse;
}

export const connectApi = {
  getVideos
}