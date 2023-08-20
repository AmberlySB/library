const library = [];

function Book(title, author, read) {
  {
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

function addBookToLibrary(book) {
  library.push(book);
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', true);

addBookToLibrary(book1);
