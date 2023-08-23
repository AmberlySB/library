const cards = document.getElementById('cards');

const library = [];

function Book(title, author, dateFinished) {
  {
    this.title = title;
    this.author = author;
    this.dateFinished = dateFinished;
  }
}

function addBookToLibrary(book) {
  library.push(book);
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 'June 10, 2002');
const book2 = new Book(
  'The Eye of the World',
  'Robert Jordan',
  'October 17, 2001'
);
const book3 = new Book(
  'The Eye of the World',
  'Robert Jordan',
  'October 17, 2001'
);
const book4 = new Book(
  'The Eye of the World',
  'Robert Jordan',
  'October 17, 2001'
);
const book5 = new Book(
  'The Eye of the World',
  'Robert Jordan',
  'October 17, 2001'
);
const book6 = new Book(
  'The Eye of the World',
  'Robert Jordan',
  'October 17, 2001'
);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);

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
        document.createTextNode('Date Finished: ' + book.dateFinished)
      );
    const inputLabel = document.createElement('label');
    const labelText = document.createTextNode('Mark as Read');
    const inputToggle = document.createElement('input');
    inputLabel.appendChild(labelText);

    inputLabel.setAttribute('for', `toggle-read-${[index]}`);
    inputToggle.setAttribute('type', 'checkbox');
    inputToggle.setAttribute('role', 'switch');
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
  });
  const listItems = document.querySelectorAll(
    '#cards > div > ul > li:nth-child(1)'
  );
  listItems.forEach((element) => element.classList.add('font-bold'));
}

displayLibrary();

function createCard() {
  for (let i = 0; i < library.length; i++) {
    const newDiv = document.createElement('div');
    cards.appendChild(newDiv).appendChild(document.createElement('ul'));
  }
  const bookCards = document.querySelectorAll('#cards > div');
  bookCards.forEach((card, index) => {
    card.classList.add(
      'bg-gradient-to-tr',
      'from-violet-500',
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
    card.setAttribute('id', `div-${[index]}`);
  });
  const bookList = document.querySelectorAll('#cards > div > ul');
  bookList.forEach((list, index) => {
    list.classList.add('flex', 'flex-col');
    list.setAttribute('id', `list-${[index]}`);
  });
}
