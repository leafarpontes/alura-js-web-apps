let books = [];
const apiEndpoint = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function getBooks() {
  const res = await fetch(apiEndpoint);
  books = await res.json();
  // console.table(books);
  let discountedBooks = applyDiscount(books);
  showBooks(discountedBooks);
}

getBooks();