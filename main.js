const cards = document.getElementById('cards');
const addBook = document.getElementById('library-add');
const closeModal = document.getElementById('close-modal');
const dialog = document.getElementById('dialog');
const library = [];

let readCount = 0;

addBook.addEventListener('click', () => {
  dialog.showModal();
  dialog.classList.remove('hidden');
  document.querySelector('body').classList.add('blur-sm');
});
closeModal.addEventListener('click', () => {
  dialog.close();
  dialog.classList.add('hidden');
  document.querySelector('body').classList.remove('blur-sm');
});

// function showDialog() {
//   dialog.showModal();
//   document.querySelector('body').classList.add('blur-sm');
// }

// function closeDialog() {

// }

function Book(title, author, datePublished, dateFinished, readStatus) {
  {
    this.title = title;
    this.author = author;
    this.datePublished = datePublished;
    this.dateFinished = dateFinished;
    this.readStatus = readStatus;
  }
}

function addBookTo() {
  const newBook = new Book(
    title.value,
    author.value,
    datePublished.value,
    dateFinished.value,
    readStatus.value
  );
  library.push(newBook);
  displayLibrary();
}

// function addBookToLibrary(book) {
//   library.push(book);
// }

// const book1 = new Book(
//   'The Hobbit',
//   'J.R.R. Tolkien',
//   'September 32, 1937',
//   'June 10, 2002',
//   true
// );
// const book2 = new Book(
//   'The Eye of the World',
//   'Robert Jordan',
//   'January 15, 1990',
//   'October 17, 2001',
//   true
// );
// const book3 = new Book(
//   'The Eye of the World',
//   'Robert Jordan',
//   'January 15, 1990',
//   'October 17, 2001',
//   false
// );
// const book4 = new Book(
//   'The Eye of the World',
//   'Robert Jordan',
//   'January 15, 1990',
//   'October 17, 2001',
//   false
// );
// const book5 = new Book(
//   'The Eye of the World',
//   'Robert Jordan',
//   'January 15, 1990',
//   'October 17, 2001',
//   true
// );
// const book6 = new Book(
//   'The Eye of the World',
//   'Robert Jordan',
//   'January 15, 1990',
//   'October 17, 2001',
//   false
// );

// addBookToLibrary(book1);
// addBookToLibrary(book2);
// addBookToLibrary(book3);
// addBookToLibrary(book4);
// addBookToLibrary(book5);
// addBookToLibrary(book6);

function displayLibrary() {
  createCard();
  library.forEach((book, index) => {
    const currentElement = document.getElementById(`list-${[index]}`);
    currentElement
      .appendChild(document.createElement('li'))
      .appendChild(document.createTextNode(book.title));
    currentElement
      .appendChild(document.createElement('li'))
      .appendChild(document.createTextNode('By: ' + book.author));
    currentElement
      .appendChild(document.createElement('li'))
      .appendChild(
        document.createTextNode('Date Published: ' + book.datePublished)
      );
    currentElement
      .appendChild(document.createElement('li'))
      .appendChild(
        document.createTextNode('Date Finished: ' + book.dateFinished)
      );
    const inputLabel = document.createElement('label');
    const labelText = document.createTextNode('Mark as Read');
    const inputToggle = document.createElement('input');
    inputLabel.appendChild(labelText);
    inputLabel.setAttribute('for', `toggle-read-${[index]}`);
    inputToggle.setAttribute('type', 'checkbox');
    inputToggle.setAttribute('onclick', 'toggleCard()');
    inputToggle.setAttribute('id', `toggle-read-${[index]}`);
    inputLabel.classList.add(
      'self-end',
      'cursor-pointer',
      'flex',
      'items-center',
      'relative',
      'mt-4',
      'after:content-[""]',
      'after:w-[2.5em]',
      'after:h-[1.25em]',
      'after:rounded-[1em]',
      'after:bg-slate-300',
      'after:border-2',
      'after:border-white',
      'after:ml-[.5em]',
      'after:ease-in-out',
      'after:duration-200',
      'before:content-[""]',
      'before:w-[.8em]',
      'before:h-[.8em]',
      'before:rounded-[1em]',
      'before:bg-white',
      'before:absolute',
      'before:left-[6.82em]',
      'before:ease-in-out',
      'before:duration-200'
    );
    inputToggle.classList.add(
      'opacity-0',
      'absolute',
      'left-[-101vw]',
      'cursor-pointer'
    );
    currentElement.appendChild(inputToggle);
    currentElement.appendChild(inputLabel);
    if (book.readStatus === true) {
      document.getElementById(`toggle-read-${[index]}`).checked = true;
      console.log(index);
    }
  });
  toggleCard();
  const listItems = document.querySelectorAll(
    '#cards > div > ul > li:nth-child(1)'
  );
  listItems.forEach((element) => element.classList.add('font-bold'));
}

// displayLibrary();

function createCard() {
  for (let i = 0; i < library.length; i++) {
    const newDiv = document.createElement('div');
    cards.appendChild(newDiv).appendChild(document.createElement('ul'));
  }
  const bookCards = document.querySelectorAll('#cards > div');
  bookCards.forEach((card, index) => {
    card.classList.add(
      'bg-gradient-to-tr',
      'from-slate-300',
      'to-black',
      'text-white',
      'p-4',
      'rounded-lg',
      'box-border',
      'shadow-custom',
      'col-span-8',
      'md:col-span-6',
      'lg:col-span-4',
      'xl:col-span-3'
    );
    card.setAttribute('id', `book-${[index]}`);
  });
  const bookList = document.querySelectorAll('#cards > div > ul');
  bookList.forEach((list, index) => {
    list.classList.add('flex', 'flex-col');
    list.setAttribute('id', `list-${[index]}`);
  });
}

function toggleCard() {
  const booksRead = document.getElementById('books-read');
  const booksUnread = document.getElementById('books-unread');
  library.forEach((book, index) => {
    const currentElement = document.getElementById(`toggle-read-${[index]}`);
    const currentBook = document.getElementById(`book-${[index]}`);
    if (currentElement.checked) {
      currentBook.classList.remove('from-slate-300');
      currentBook.classList.add('from-violet-700');
      console.log('checked: ', readCount);
      readCount = readCount + 1;
      booksRead.textContent = readCount;
    } else {
      currentBook.classList.remove('from-violet-700');
      currentBook.classList.add('from-slate-300');
      console.log('unchecked: ', readCount);
      readCount = readCount - 1;
      booksRead.textContent = readCount;
    }
  });
}
