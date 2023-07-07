let books = [];
const apiEndpoint = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
const booksElement = document.getElementById('livros');

async function getBooks() {
  const res = await fetch(apiEndpoint);
  books = await res.json();
  console.table(books);
  showBooks(books);
}

getBooks();

function showBooks(books) {
  books.forEach(book => {
    booksElement.innerHTML += `
    <div class="livro">
      <img class="livro__imagens" src="${book.imagem}" alt="${book.alt}" />
      <h2 class="livro__titulo">
        ${book.titulo}
      </h2>
      <p class="livro__descricao">${book.autor}</p>
      <p class="livro__preco" id="preco">${book.preco}</p>
      <div class="tags">
        <span class="tag">${book.categoria}</span>
      </div>
    </div>
    `
  })
}