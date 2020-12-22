import React from 'react';

const filterOptions = [
  'All', 'Action', 'Biography', 'History',
  'Horror', 'Kids', 'Learning', 'Sci-Fi',
];

const CategoryFilter = () => (
  <div>
    <label htmlFor="filter">
      Filter
      <select name="filter" id="filter">
        {
          filterOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))
        }
      </select>
    </label>
  </div>
);

export default CategoryFilter;
