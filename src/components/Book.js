import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, getItems } from '../Redux/Books/Books';

function Book({ book }) {
  const dispatch = useDispatch();

  const rmvBk = (e) => {
    dispatch(removeBook(e.target.value));
    dispatch(getItems());
  };
  return (
    <>
      <div className="bookCard">
        <div className="bookInfo">
          <p className="genre">{book.genre}</p>
          <p className="title">{book.title}</p>
          <p className="author">{book.author}</p>
          <p className="chapter">{book.chapter}</p>
          <ul>
            <li><button type="button">Comments</button></li>
            <li><button type="button" value={book.id} onClick={rmvBk}>Remove</button></li>
            <li><button type="button">Edit</button></li>
          </ul>
        </div>
        <div className="progress">
          <div>
            <div>chart</div>
            <p>percentage</p>
          </div>
          <div>
            <p>{book.status}</p>
            <p>{book.currentChapter}</p>
            <p>{book.chapterNumber}</p>
            <button type="button">Update progress</button>
          </div>
        </div>
      </div>
    </>
  );
}

Book.propTypes = {
  book: Proptypes.objectOf(Proptypes.string).isRequired,
};

export default Book;
