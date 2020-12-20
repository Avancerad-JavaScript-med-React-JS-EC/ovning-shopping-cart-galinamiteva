import React from 'react';

import Cart from './cart';
import imgUrl from '../img/sherlock-holmes-147255_640.png'

function Header () {
    return (
        <header className='header'>
            <img src={imgUrl} alt='Sherlock' className='logo' />
            <Cart/>
        </header>
        
    );
}

export default Header;
