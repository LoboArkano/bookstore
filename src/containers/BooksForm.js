import React from 'react';

const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <div>
    <form>
      <label htmlFor="title">
        Title:
        <input type="text" id="title" name="title" placeholder="Book Title" />
      </label>
      <select>
        {
          bookCategories.map(category => (
            <option key={category} value={category}>{ category }</option>
          ))
        }
      </select>
      <button type="submit">ADD</button>
    </form>
  </div>
);

export default BooksForm;
