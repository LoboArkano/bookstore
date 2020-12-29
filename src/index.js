import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/reset.css';
import './assets/stylesheets/index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import App from './components/App';

const randomKey = () => String(Math.floor(Math.random() * 100000000));
const INITIAL_STATE = {
  books: [
    { id: randomKey(), title: 'The Three Musketeers', category: 'Action' },
    { id: randomKey(), title: 'Clepton: The Autobiography', category: 'Biography' },
    { id: randomKey(), title: "A Cat's Tale: A Journey Through Feline History", category: 'History' },
    { id: randomKey(), title: 'The Shadow Over Innsmouth', category: 'Horror' },
    { id: randomKey(), title: 'Pirate Stew', category: 'Kids' },
    { id: randomKey(), title: 'Learn JS', category: 'Learning' },
    { id: randomKey(), title: 'The Martian', category: 'Sci-Fi' },
  ],
  filter: 'All',
};

const store = createStore(rootReducer, INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
