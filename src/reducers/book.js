const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const INITIAL_STATE = {
  title: 'Unkown',
  category: 'Action',
};

const bookReducer = (state = INITIAL_STATE, action) => {
  const { book } = action.payload;

  switch (action.types) {
    case ADD_BOOK:
      return {
        ...state,
        book,
      };
    case REMOVE_BOOK:
      return state.select(bookState => bookState.id === book.id);
    default:
      return state;
  }
};

export default bookReducer;
