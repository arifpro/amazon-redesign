import React from 'react';
import './Header.css'
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <div className='header'>
            {/* logo */}
            <img src={logo} alt="logo" className='header__logo'/>

            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                {/* search icon */}
            </div>

            {/* nav items and icons */}
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
            </div>
        </div>
    )
}

export default Header;
