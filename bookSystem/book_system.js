let books = [];

function displayBooks() {
  document.getElementById("books").innerHTML = books
    .map(
      (book, index) =>
        `<h2>book Number: ${index + 1}</h2>
        <p>Book name: ${book.name}:<br>
        Author name: ${book.author}<br>
        Book description: ${book.description}:<br>
        No. of Pages:${book.pages}<br><br>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deleteBook(${index})">Delete</button>
        </p>`
    )
    .join("");
}

const valueUndefined = "Não definido";

function addBook() {
  let bookName = document.getElementById("bookName").value || valueUndefined;
  let authorName =
    document.getElementById("authorName").value || valueUndefined;
  let bookDescription =
    document.getElementById("bookDescription").value || valueUndefined;
  let pagesNumber =
    document.getElementById("pagesNumber").value || valueUndefined;

  let newBook = {
    name: bookName,
    author: authorName,
    description: bookDescription,
    pages: pagesNumber,
  };
  books.push(newBook);
  displayBooks();
}

function editBook(index) {
  const book = books[index];
  document.getElementById("bookName").value = book.name;
  document.getElementById("authorName").value = book.authorName;
  document.getElementById("bookDescription").value = book.bookDescription;
  document.getElementById("pagesNumber").value = book.pagesNumber;
  books.splice(index, 1);
  displayBooks();
}

function deleteBook(index) {
  books.splice(index, 1);
  displayBooks();
}
