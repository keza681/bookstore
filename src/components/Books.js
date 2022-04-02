import React from 'react';
import AddBook from './AddBook';
import Book from './Book';

function Books() {
  const books = [
    {
      id: 1,
      genre: 'genre',
      title: 'title',
      author: 'author',
      chapter: 'React redux',
    },
  ];

  return (
    <>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <AddBook />
    </>
  );
}

export default Books;
