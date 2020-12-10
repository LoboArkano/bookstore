/* eslint-disable no-unused-vars */
import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div>
    <BooksList books={[{ id: '3', title: 'Frankenstein', category: 'Terror' }]} />
    {/* <BooksForm /> */}
  </div>
);

export default App;
