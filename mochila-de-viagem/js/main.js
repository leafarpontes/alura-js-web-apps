const form = document.getElementById('novoItem');
const list = document.querySelector('[data-list]');
let items = JSON.parse(localStorage.getItem('items')) || [];

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.elements['nome'];
  const quantity = evt.target.elements['quantidade'];
  const exists = items.find(el => el.name === name.value);
  const itemToAdd = {
    "name": name.value,
    "quantity": quantity.value
  }

  if (exists) {
    itemToAdd.id = exists.id;
    updateElement(itemToAdd);
    items[exists.id] = itemToAdd;
  } else {
    itemToAdd.id = items.length;
    createElement(itemToAdd);
    items.push(itemToAdd);
  }
  
  name.value = "";
  quantity.value = "";
  
  localStorage.setItem("items", JSON.stringify(items));
})

const createElement = (itemToAdd) => {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  const itemNumber = document.createElement("strong");
  itemNumber.innerHTML = itemToAdd.quantity;
  itemNumber.dataset.id = itemToAdd.id;
  newItem.appendChild(itemNumber);
  newItem.innerHTML += itemToAdd.name;
  list.appendChild(newItem);
}

const updateElement = (itemToAdd) => {
  document.querySelector(`[data-id="${itemToAdd.id}"]`).innerHTML = itemToAdd.quantity;
}

if (items.length > 0) {
  items.forEach(item => {
    createElement({name: item.name, quantity: item.quantity, id: item.id});
  })
}