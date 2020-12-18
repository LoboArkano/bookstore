import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = props => {
  const { books } = props;

  const getContent = books => books.map(book => (
    <Book key={book.id} book={book} />
  ));

  return (
    <table key="booksList">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
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
};

const mapStatetoProps = state => {
  const { books } = state;

  return { books };
};

export default connect(mapStatetoProps, null)(BooksList);
