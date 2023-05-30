const form = document.getElementById('novoItem');
const list = document.querySelector('[data-list]');
let items = JSON.parse(localStorage.getItem('items')) || [];

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.elements['nome'];
  const quantity = evt.target.elements['quantidade'];
  const itemToAdd = createElement(name.value, quantity.value);
  name.value = "";
  quantity.value = "";
  items.push(itemToAdd);
  localStorage.setItem("items", JSON.stringify(items));
})

const createElement = (name, quantity) => {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  const itemNumber = document.createElement("strong");
  itemNumber.innerHTML = quantity;
  newItem.appendChild(itemNumber);
  newItem.innerHTML += name;
  list.appendChild(newItem);

  return {name, quantity};
}

if (items.length > 0) {
  items.forEach(item => {
    createElement(item.name, item.quantity);
  })
}