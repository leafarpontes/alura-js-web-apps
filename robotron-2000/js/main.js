const control = document.querySelectorAll("[data-control]");

control.forEach((control) => {
  control.addEventListener("click", (evt) => sumOrSubtract(evt.target.dataset.control, evt.target.parentNode));
})

const sumOrSubtract = (action, control) => {
  const part = control.querySelector("[data-counter]");
  action === "+" ? part.value = parseInt(part.value) + 1 : part.value = parseInt(part.value) - 1;
}