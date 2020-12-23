import React from 'react';
import Header from './Header';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import '../assets/stylesheets/app.css';

const App = () => (
  <div>
    <Header />
    <div className="main w-100">
      <BooksList />
      <BooksForm />
    </div>
  </div>
);

export default App;
