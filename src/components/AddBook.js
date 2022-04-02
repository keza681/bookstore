import React from 'react';

function AddBook() {
  return (
    <>
      <h3>ADD BOOK HERE</h3>
      <form>
        <input type="text" placeholder="title of the book" />
        <select key="author">
          <option value="Category">Authors</option>
        </select>
        <button type="submit">Enter New Book</button>
      </form>
    </>
  );
}

export default AddBook;
