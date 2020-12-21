import React, { useCallback, useState } from 'react';
import { addBook } from '../actions/index';

const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
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
  });

  const handleSubmit = useCallback(() => {
    if (state.title && state.category) {
      addBook({
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
          <option key="none" value="none">None</option>
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

export default BooksForm;
