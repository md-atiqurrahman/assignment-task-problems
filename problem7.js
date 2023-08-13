// You are given an array of objects representing books. Each book object has properties for title, author, and year.Your task is to create a function that performs the following tasks:

// Filter the array to only include books published after the year 2000.Transform the filtered array into an array of strings in the format: "Title by Author (Year)".Write a function called filterAndTransformBooks to accomplish this task.

const filterAndTransformBooks = (books) =>{
    const filteredBooks = books.filter(book => book.year > 2000);
    const transformedBooks = filteredBooks.map(book => `${book.title} by ${book.author} (${book.year})`)
    return transformedBooks;
}


const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
  },
  { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
  { title: "The Girl on the Train", author: "Paula Hawkins", year: 2015 },
];


const filteredAndTransformed = filterAndTransformBooks(books)
console.log(filteredAndTransformed)
