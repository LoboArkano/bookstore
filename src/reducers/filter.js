const CHANGE_FILTER = 'CHANGE_FILTER';

const filterReducer = (state = 'All', action) => {
  const filter = action.payload;

  switch (action.type) {
    case CHANGE_FILTER:
      return filter;
    default:
      return state;
  }
};

export default filterReducer;
