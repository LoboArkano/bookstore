import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';
import Book from '../components/Book';

const BooksList = props => {
  const { books, removeBook } = props;

  const getContent = books => books.map(book => (
    <Book key={book.id} book={book} removeBook={removeBook} />
  ));

  return (
    <table key="booksList">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {getContent(books)}
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { books } = state;

  return { books };
};

export default connect(mapStateToProps, { removeBook })(BooksList);
