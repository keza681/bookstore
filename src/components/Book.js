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
      <div className="form">
        <div className="bookInfo">
          <p className="genre">{book.genre}</p>
          <p className="title">{book.title}</p>
          <p className="author">{book.author}</p>
          <p className="chapter">{book.chapter}</p>
          <ul className="btns">
            <li><button type="button" className="btn">Comments</button></li>
            <li><button type="button" className="btn" value={book.id} onClick={rmvBk}>Remove</button></li>
            <li><button type="button" className="btn">Edit</button></li>
          </ul>
        </div>
        <div className="progress">
          <div className="chart">
            <div className="ProgressBar">
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask half">
                    <div className="fill" />
                  </div>
                  <div className="inside-circle" />
                </div>
              </div>
            </div>
            <div className="percentages">
              <h2>7%</h2>
              <p className="status">Completed</p>
            </div>
          </div>
          <div className="rightSection">
            <p className="status">currentChapter</p>
            <p>chapter 4</p>
            <button className="bookButton" type="button">Update progress</button>
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
