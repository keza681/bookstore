import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dispatchToProps from './Redux/States/dispatchToProps';
import stateToProps from './Redux/States/addToState';
import Navbar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';

function App(books) {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books books={books} />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(stateToProps, dispatchToProps)(App);
