// const filterFrontEndBooksButton = document.getElementById('btnFiltrarLivrosFront');
// filterFrontEndBooksButton.addEventListener('click', (e) => filterBooks(e.target.value));

const filterButtons = document.querySelectorAll('.btn');
filterButtons.forEach(btn => btn.addEventListener('click', (e) => filterBooks(e.target.value)));

function filterBooks(e) {
  console.log(e);
  let filteredBooks = books.filter(book => book.categoria === e);
  console.log(filteredBooks)
  showBooks(filteredBooks);
  // return filteredBooks;
}