import React from 'react';
import PropTypes from 'prop-types';
import '../assets/stylesheets/categoryFilter.css';

const filterOptions = [
  'All', 'Action', 'Biography', 'History',
  'Horror', 'Kids', 'Learning', 'Sci-Fi',
];

const CategoryFilter = props => {
  const { changeFilter } = props;

  return (
    <div className="d-flex justify-c-fe w-100">
      <label className="label d-flex align-i-c" htmlFor="filter">
        Filter:
        <select className="filter" name="filter" id="filter" onChange={changeFilter}>
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
