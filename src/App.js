import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';

function App({ books }) {
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

export default App;
