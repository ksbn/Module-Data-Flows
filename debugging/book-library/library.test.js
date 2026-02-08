/**
 * @jest-environment jsdom
 */

const { myLibrary, addBook, removeBook, toggleRead } = require('./library');

beforeEach(() => {
  myLibrary.length = 0;
});

test('Add a book correctly', () => {
  const result = addBook('Test Book', 'Test Author', 100, true);
  expect(result).toBe(true);
  expect(myLibrary.length).toBe(1);
  expect(myLibrary[0].title).toBe('Test Book');
});

test('Do not add book with missing fields', () => {
  const result = addBook('', 'Author', 100, true);
  expect(result).toBe(false);
  expect(myLibrary.length).toBe(0);
});

test('Remove a book correctly', () => {
  addBook('Book1', 'Author1', 50, false);
  const removed = removeBook(0);
  expect(removed).toBe(true);
  expect(myLibrary.length).toBe(0);
});

test('Toggle read status correctly', () => {
  addBook('Book2', 'Author2', 200, false);
  const status = toggleRead(0);
  expect(status).toBe(true);
  expect(myLibrary[0].check).toBe(true);
});
