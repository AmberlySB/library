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
  library.forEach((element, index) => {
    const currentElement = document.getElementById(`list-${[index]}`);
    currentElement
      .appendChild(document.createElement('li'))
      .appendChild(document.createTextNode(element.title));
    currentElement
      .appendChild(document.createElement('li'))
      .appendChild(document.createTextNode('By: ' + element.author));
    currentElement
      .appendChild(document.createElement('li'))
      .appendChild(
        document.createTextNode('Date Finished: ' + element.dateFinished)
      );
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
    list.setAttribute('id', `list-${[index]}`);
  });
}
