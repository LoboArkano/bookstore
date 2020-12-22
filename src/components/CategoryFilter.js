import React from 'react';
import PropTypes from 'prop-types';

const filterOptions = [
  'All', 'Action', 'Biography', 'History',
  'Horror', 'Kids', 'Learning', 'Sci-Fi',
];

const CategoryFilter = props => {
  const { changeFilter } = props;

  return (
    <div>
      <label htmlFor="filter">
        Filter
        <select name="filter" id="filter" onChange={changeFilter}>
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
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
