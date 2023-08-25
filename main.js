const cards = document.getElementById("cards");
const addBook = document.getElementById("library-add");
const darkMode = document.getElementById("dark-mode");
const lightMode = document.getElementById("light-mode");
const closeModal = document.getElementById("close-modal");
const dialog = document.getElementById("dialog");
const booksTotal = document.getElementById("books-total");
const booksRead = document.getElementById("books-read");
const booksUnread = document.getElementById("books-unread");
const bookForm = document.getElementById("book-form");
const library = [];

let bookCount = 0;
let readCount = 0;
let unreadCount = 0;

addBook.addEventListener("click", () => {
  dialog.showModal();
  dialog.classList.remove("hidden");
  document.querySelector("body").classList.add("blur-sm");
});
closeModal.addEventListener("click", closeDialog);

function closeDialog() {
  dialog.close();
  dialog.classList.add("hidden");
  document.querySelector("body").classList.remove("blur-sm");
  document.getElementById("book-form").reset();
}

darkMode.addEventListener("click", () => {
  document.getElementById("header").classList.add("bg-slate-800");
  document.getElementById("body").classList.add("bg-slate-800", "text-white");
  darkMode.classList.add("hidden");
  lightMode.classList.remove("hidden");
});

lightMode.addEventListener("click", () => {
  document.getElementById("header").classList.remove("bg-slate-800");
  document
    .getElementById("body")
    .classList.remove("bg-slate-800", "text-white");
  darkMode.classList.remove("hidden");
  lightMode.classList.add("hidden");
});

function Book(
  title,
  authorFirst,
  authorMiddle,
  authorLast,
  pages,
  datePublished,
  readStatus,
) {
  {
    this.title = title;
    this.authorFirst = authorFirst;
    this.authorMiddle = authorMiddle;
    this.authorLast = authorLast;
    this.pages = pages;
    this.datePublished = datePublished;
    this.readStatus = readStatus;
    this.info = function () {
      const infoStr =
        this.title +
        " by " +
        this.authorFirst +
        " " +
        this.authorMiddle +
        " " +
        this.authorLast +
        " is " +
        this.pages +
        " pages long, published on " +
        this.datePublished;
      return infoStr;
    };
  }
}

function addBookToLibrary() {
  const newBook = new Book(
    title.value,
    authorFirst.value,
    authorMiddle.value,
    authorLast.value,
    pages.value,
    datePublished.value,
    readStatus.value,
  );
  console.log(newBook.info());
  library.push(newBook);
  bookCount = library.length;
  booksTotal.textContent = bookCount;
  closeDialog();
  createCard();
  displayLibrary();
}

function displayLibrary() {
  createId();
  library.forEach((book, index) => {
    if (book.display) {
      return;
    } else {
      const currentElement = document.getElementById(`list-${[index]}`);
      currentElement
        .appendChild(document.createElement("li"))
        .appendChild(document.createTextNode(book.title));
      currentElement
        .appendChild(document.createElement("li"))
        .appendChild(
          document.createTextNode(
            "By: " +
              book.authorFirst +
              " " +
              book.authorMiddle +
              " " +
              book.authorLast,
          ),
        );
      currentElement
        .appendChild(document.createElement("li"))
        .appendChild(document.createTextNode("Pages: " + book.pages));
      currentElement
        .appendChild(document.createElement("li"))
        .appendChild(
          document.createTextNode("Date Published: " + book.datePublished),
        );
      book.display = true;
      const inputLabel = document.createElement("label");
      const labelText = document.createTextNode("Mark as Read");
      const inputToggle = document.createElement("input");
      inputLabel.appendChild(labelText);
      inputLabel.setAttribute("for", `toggle-read-${[index]}`);
      inputToggle.setAttribute("type", "checkbox");
      inputToggle.setAttribute("onclick", "toggleCard()");
      inputToggle.setAttribute("id", `toggle-read-${[index]}`);
      inputLabel.classList.add(
        "self-end",
        "cursor-pointer",
        "flex",
        "items-center",
        "relative",
        "mt-4",
        "after:w-[2.5em]",
        "after:h-[1.25em]",
        "after:rounded-[1em]",
        "after:bg-slate-300",
        "after:border-2",
        "after:border-white",
        "after:ml-[.5em]",
        "after:ease-in-out",
        "after:duration-200",
        "before:w-[.8em]",
        "before:h-[.8em]",
        "before:rounded-[1em]",
        "before:bg-white",
        "before:absolute",
        "before:left-[7em]",
        "sm:before:left-[6.85em]",
        "before:ease-in-out",
        "before:duration-200",
      );
      inputToggle.classList.add(
        "opacity-0",
        "absolute",
        "left-[-101vw]",
        "cursor-pointer",
      );
      currentElement.appendChild(inputToggle);
      currentElement.appendChild(inputLabel);
      if (book.readStatus === "true") {
        document.getElementById(`toggle-read-${[index]}`).checked = true;
      }
    }
  });
  toggleCard();
  const listItems = document.querySelectorAll(
    "#cards > div > ul > li:nth-child(1)",
  );
  listItems.forEach((element) => element.classList.add("font-bold"));
}

function createCard() {
  const newDiv = document.createElement("div");
  newDiv.classList.add(
    "bg-gradient-to-tr",
    "from-slate-300",
    "to-black",
    "text-white",
    "p-4",
    "rounded-lg",
    "box-border",
    "shadow-custom",
    "col-span-8",
    "md:col-span-6",
    "lg:col-span-4",
    "xl:col-span-3",
  );
  const newList = document.createElement("ul");
  newList.classList.add("flex", "flex-col");
  cards.appendChild(newDiv).appendChild(newList);
}

function createId() {
  const bookCards = document.querySelectorAll("#cards > div");
  bookCards.forEach((card, index) =>
    card.setAttribute("id", `book-${[index]}`),
  );
  const bookList = document.querySelectorAll("#cards > div > ul");
  bookList.forEach((list, index) => list.setAttribute("id", `list-${[index]}`));
}

function toggleCard() {
  const checkedCount = [];
  library.forEach((book, index) => {
    const currentElement = document.getElementById(`toggle-read-${[index]}`);
    const currentBook = document.getElementById(`book-${[index]}`);
    if (currentElement.checked) {
      checkedCount.push(currentElement);
      currentBook.classList.remove("from-slate-300");
      currentBook.classList.add("from-violet-700");
    } else {
      currentBook.classList.remove("from-violet-700");
      currentBook.classList.add("from-slate-300");
    }
  });
  readCount = checkedCount.length;
  booksRead.textContent = readCount;
  unreadCount = library.length - checkedCount.length;
  booksUnread.textContent = unreadCount;
}

function sortBooks(value) {
  if (value === "title") {
    library.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
    library.forEach((book) => {
      book.display = false;
    });
    const divReset = document.querySelectorAll("#cards > div");
    divReset.forEach((div) => {
      div.remove();
      createCard();
    });
  } else if (value === "authorFirst") {
    library.sort(function (a, b) {
      if (a.authorFirst < b.authorFirst) {
        return -1;
      }
      if (a.authorFirst > b.authorFirst) {
        return 1;
      }
      return 0;
    });
    library.forEach((book) => {
      book.display = false;
    });
    const divReset = document.querySelectorAll("#cards > div");
    divReset.forEach((div) => {
      div.remove();
      createCard();
    });
  } else if (value === "authorLast") {
    library.sort(function (a, b) {
      if (a.authorLast < b.authorLast) {
        return -1;
      }
      if (a.authorLast > b.authorLast) {
        return 1;
      }
      return 0;
    });
    library.forEach((book) => {
      book.display = false;
    });
    const divReset = document.querySelectorAll("#cards > div");
    divReset.forEach((div) => {
      div.remove();
      createCard();
    });
  } else if (value === "pages") {
    library.sort(function (a, b) {
      if (a.pages < b.pages) {
        return -1;
      }
      if (a.pages > b.pages) {
        return 1;
      }
      return 0;
    });
    library.forEach((book) => {
      book.display = false;
    });
    const divReset = document.querySelectorAll("#cards > div");
    divReset.forEach((div) => {
      div.remove();
      createCard();
    });
  } else if (value === "datePublished") {
    library.sort(function (a, b) {
      if (a.datePublished < b.datePublished) {
        return -1;
      }
      if (a.datePublished > b.datePublished) {
        return 1;
      }
      return 0;
    });
    library.forEach((book) => {
      book.display = false;
    });
    const divReset = document.querySelectorAll("#cards > div");
    divReset.forEach((div) => {
      div.remove();
      createCard();
    });
  }
  displayLibrary();
}
