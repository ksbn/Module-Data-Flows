let myLibrary = [];

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function addBook(title, author, pages, check) {
  if (!title || !author || !pages) return false;
  const book = new Book(title, author, pages, check);
  myLibrary.push(book);
  return true;
}

function removeBook(index) {
  if (index >= 0 && index < myLibrary.length) {
    myLibrary.splice(index, 1);
    return true;
  }
  return false;
}

function toggleRead(index) {
  if (index >= 0 && index < myLibrary.length) {
    myLibrary[index].check = !myLibrary[index].check;
    return myLibrary[index].check;
  }
  return null;
}

module.exports = { myLibrary, Book, addBook, removeBook, toggleRead };
