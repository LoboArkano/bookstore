const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const addBook = book => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book,
});

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export { addBook, removeBook, changeFilter };
