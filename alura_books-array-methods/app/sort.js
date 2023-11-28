let sortByPriceButton = document.getElementById('btnOrdenarPorPreco');
sortByPriceButton.addEventListener('click', sortBooksByPrice);

function sortBooksByPrice() {
  let orderedBooks = books.sort((a, b) => a.preco - b.preco);
  showBooks(orderedBooks);
}