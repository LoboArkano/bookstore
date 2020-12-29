import React from 'react';
import avatar from '../assets/images/man.png';
import '../assets/stylesheets/header.css';

const Header = () => (
  <header className="w-100">
    <nav className="navbar d-flex justify-c-sb w-100">
      <div className="nav d-flex justify-c-sb align-i-c">
        <h1 className="brand">Bookstore CMS</h1>
        <ul className="nav-list d-flex justify-c-sb">
          <li className="nav-item">BOOKS</li>
          <li className="nav-item">CATEGORIES</li>
        </ul>
      </div>
      <div className="avatar-cont">
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
    </nav>
  </header>
);

export default Header;
