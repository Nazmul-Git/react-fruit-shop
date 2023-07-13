import React from 'react';
import './Header.css'
import logo from '../../Images/logo.png'

const Header = () => {
    return (
        <div className='nav-bar'>
            <div className='logo'>
              <img src={logo} alt="" />
            </div>

            <div className='nav-item'>
               <a type='/Home'>Home</a>
               <a type='/Shop'>Shop</a>
               <a type='/inventory'>Inventory</a>
               <a type='/about'>About</a>
            </div>
        </div>
    );
};

export default Header;