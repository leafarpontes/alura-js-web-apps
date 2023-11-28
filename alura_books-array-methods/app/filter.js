// const filterFrontEndBooksButton = document.getElementById('btnFiltrarLivrosFront');
// filterFrontEndBooksButton.addEventListener('click', (e) => filterBooks(e.target.value));

const filterButtons = document.querySelectorAll('.btn');
filterButtons.forEach(btn => btn.addEventListener('click', filterBooks));

function filterBooks(e) {
  const elementBtn = document.getElementById(this.id);
  const category = elementBtn.value;
  console.log(e);
  let filteredBooks = category == 'disponivel' ? books.filter(book => book.quantidade > 0) : books.filter(book => book.categoria === e);
  console.log(filteredBooks)
  showBooks(filteredBooks);
  // return filteredBooks;
}