import React from 'react';
import './NavigationBar.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import moodbow from '../images/moodbow.png';

const NavigationBar = () => {
  return (
    <div className='nav-bar'>
      <Link to='/moodbow-app' className='logo'>
        <img src={moodbow} alt='Moodbow Logo' />
      </Link>
      <div className='nav-links'>
        <Link to='/'>
          <p>SHOP</p>
        </Link>
        <Link to='/signin'>
          <p className='link'>LOG IN</p>
        </Link>
        <Link to='/' className='cart-container'>
          <FontAwesomeIcon icon={faShoppingCart} className='shopping-cart' />
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
