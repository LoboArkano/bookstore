import React from 'react';
import avatar from '../assets/images/man.png';

const Header = () => (
  <header>
    <div>
      <h1>Bookstore CMS</h1>
      <ul>
        <li>BOOKS</li>
        <li>CATEGORIES</li>
      </ul>
    </div>
    <div>
      <img src={avatar} alt="avatar" />
    </div>
  </header>
);

export default Header;
