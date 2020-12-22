import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../actions/index';

const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = props => {
  const [state, setState] = useState({
    title: '',
    category: '',
  });

  const handleChange = useCallback(e => {
    const { value } = e.target;

    setState({
      ...state,
      [e.target.name]: value,
    });
  }, [state]);

  const handleSubmit = useCallback(() => {
    if (state.title && state.category) {
      props.addBook({
        id: String(Math.floor(Math.random() * 100000000)),
        title: state.title,
        category: state.category,
      });

      setState({
        ...state,
        title: '',
        category: '',
      });
    }
  });

  return (
    <div>
      <form>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Book Title"
            value={state.title}
            onChange={handleChange}
            required
          />
        </label>
        <select
          name="category"
          value={state.category}
          onChange={handleChange}
          required
        >
          <option key="none" value="">None</option>
          {
            bookCategories.map(category => (
              <option
                key={category}
                value={category}
              >
                { category }
              </option>
            ))
          }
        </select>
        <button type="submit" onClick={handleSubmit}>ADD</button>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, { addBook })(BooksForm);
