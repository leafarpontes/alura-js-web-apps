const subtract = document.querySelector("#subtract");
const sum = document.querySelector("#sum");
const arm = document.querySelector("#arm");
const form = document.querySelector(".montador");

sum.addEventListener("click", (e) => sumOrSubtract("sum"));
subtract.addEventListener("click", (e) => sumOrSubtract("subtract"))

const sumOrSubtract = (action) => {
  action === "sum" ? arm.value = parseInt(arm.value) + 1 : arm.value = parseInt(arm.value) - 1;
}