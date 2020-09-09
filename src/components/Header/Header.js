import React from 'react';
import './Header.css'

// images and icons
import logo from '../../img/logo.png'
import { Search, ShoppingCart } from '@material-ui/icons';

const Header = () => {
    return (
        <section className='header'>
            {/* logo */}
            <img src={logo} alt="logo" className='header__logo'/>

            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                {/* search icon */}
                <Search className="header_searchIcon" />
            </div>

            {/* nav items */}
            <div className="header__nav">
                <div className="header__navItem">
                    <span className="header__navItemLineOne">Hello Guest</span>
                    <span className="header__navItemLineTwo">Sign In</span>
                </div>

                <div className="header__navItem">
                    <span className="header__navItemLineOne">Returns</span>
                    <span className="header__navItemLineTwo">& Orders</span>
                </div>

                <div className="header__navItem">
                    <span className="header__navItemLineOne">Your</span>
                    <span className="header__navItemLineTwo">Prime</span>
                </div>

                {/* icons */}
                <div className="header__optionCart">
                    <ShoppingCart className="" />
                    <span className="header__cartCount">0</span>
                </div>
            </div>
        </section>
    )
}

export default Header;
