import React from 'react';

import PropTypes from 'prop-types';

import './NavbarBook.css';
import favicon from '../../images/favicon.png';

function NavbarBook(props) {
  return (
    <header>
      <img className='logo' src={favicon} alt='logo' />
      <nav>
        <ul className='nav-links'>
          <li><a href='#'>Book</a></li>
          <li><a href='#'>User</a></li>
          <li><a href='#'>Transaction</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavbarBook;

NavbarBook.propTypes = {
    light: PropTypes.bool
}