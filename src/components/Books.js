import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import AddBook from './AddBook';

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

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Books;
