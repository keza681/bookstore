import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/Books/Books';

function AddBook() {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const addToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };
  return (
    <>
      <h3>ADD BOOK HERE</h3>
      <form onSubmit={addToStore}>
        <input type="text" placeholder="title of the book" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="author name" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <select id="book" onChange={(e) => setCategory(e.target.value)}>
          <option value="Title">title</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Horror">Horror</option>
          <option value="Magic">Magic</option>
          <option value="Adventure">Adventure</option>
        </select>
        <button type="submit">Enter New Book</button>
      </form>
    </>
  );
}

export default AddBook;
