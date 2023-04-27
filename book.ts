interface Book {
  id: number;
  title: string;
  author: string;
  published: Date;
  available: boolean;
}

const books: Book[] = [
  {
    id: 1,
    title: "Lord of the Flies",
    author: "William Golding",
    published: new Date("1954-09-17"),
    available: true,
  },
  {
    id: 2,
    title: "Adventures of Huckleberry Finn",
    author: "Mark Twain",
    published: new Date("1884-12-10"),
    available: true,
  },
  {
    id: 3,
    title: "Animal Farm",
    author: "George Orwell",
    published: new Date("1945-08-17"),
    available: false,
  },
];

function addBook(book: Book): void {
  books.push(book);
}

function findBookById(id: number): Book | undefined {
  return books.find((book) => book.id === id);
}

function updateBook(book: Book): boolean {
  const index = books.findIndex((b) => b.id === book.id);
  if (index === -1) {
    return false;
  }
  books[index] = book;
  return true;
}

function removeBook(id: number): boolean {
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) {
    return false;
  }
  books.splice(index, 1);
  return true;
}

// Adding a new book
const newBook: Book = {
  id: 4,
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  published: new Date("1925-04-10"),
  available: true,
};
addBook(newBook);
console.log(`Books list after adding new book:`, books);

// Finding a book by id
const bookById = findBookById(2);
console.log(`Found book by id:`, bookById);

// Updating a book
const bookToUpdate = {
  id: 1,
  title: "Lord of the Flies",
  author: "William Golding",
  published: new Date("1954-09-17"),
  available: false,
};
const isUpdated = updateBook(bookToUpdate);
console.log(`Has the book been updated?`, isUpdated);
console.log(`Books list after updating a book:`, books);

// Removing a book
const isRemoved = removeBook(3);
console.log(`Has the book been removed?`, isRemoved);
console.log(`Books list after removing the book:`, books);


