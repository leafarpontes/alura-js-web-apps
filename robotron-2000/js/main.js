const control = document.querySelectorAll("[data-control]");
const stats = document.querySelectorAll("[data-stat]");

const parts = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}

control.forEach((control) => {
  control.addEventListener("click", (evt) => {
    sumOrSubtract(evt.target.dataset.control, evt.target.parentNode);
    updateStats(evt.target.dataset.part)
  });
})

const sumOrSubtract = (action, control) => {
  const part = control.querySelector("[data-counter]");
  action === "+" ? part.value = parseInt(part.value) + 1 : part.value = parseInt(part.value) - 1;
}

const updateStats = (part) => {
  stats.forEach((el) => {
    el.textContent = parseInt(el.textContent) + parts[part][el.dataset.stat];
  })
}