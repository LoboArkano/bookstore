import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = props => {
  const {
    books, removeBook,
    filter, changeFilter,
  } = props;

  const filteredBooks = (books, filter) => {
    if (filter === 'All') {
      return books;
    }

    return books.filter(book => book.category === filter);
  };

  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = e => {
    changeFilter(e.target.value);
  };

  const getContent = books => books.map(book => (
    <Book key={book.id} book={book} removeBook={() => handleRemoveBook(book)} />
  ));

  return (
    <>
      <div className="w-100" key="booksList">
        {getContent(filteredBooks(books, filter))}
      </div>
      <CategoryFilter changeFilter={handleFilterChange} />
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  const { books, filter } = state;

  return { books, filter };
};

const mapDispatchToProps = { removeBook, changeFilter };

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
