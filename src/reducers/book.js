const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const INITIAL_STATE = [];

const books = (state = INITIAL_STATE, action) => {
  const book = action.payload;

  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        book,
      ];
    case REMOVE_BOOK:
      return state.filter(bookState => bookState.id !== book);
    default:
      return state;
  }
};

export default books;
