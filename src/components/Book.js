import React from 'react';
import PropTypes from 'prop-types';
import '../assets/stylesheets/book.css';

const Book = props => {
  const { book, removeBook } = props;
  const { id, title, category } = book;

  return (
    <article className="book-container d-flex">
      <div className="left d-flex justify-c-sb align-i-c h-100">
        <div className="d-flex f-dir-c h-100">
          <h3 className="category">{category}</h3>
          <h2 className="title">{title}</h2>
          <h4 className="author">Author</h4>
          <ul className="list d-flex">
            <li className="item">
              <button className="action" type="button">Comments</button>
            </li>
            <li className="item">
              <button
                className="action"
                type="button"
                onClick={() => removeBook(id)}
              >
                Remove
              </button>
            </li>
            <li className="item">
              <button className="action" type="button">Edit</button>
            </li>
          </ul>
        </div>
        <div className="read d-flex align-i-c">
          <div className="circle" />
          <div className="">
            <div>0%</div>
            <div>Reading</div>
          </div>
        </div>
      </div>
      <div className="right">
        right
      </div>
    </article>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
