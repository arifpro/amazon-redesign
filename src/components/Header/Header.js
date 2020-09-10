import React from 'react';
import './Header.css';

// images and icons
import logo from '../../img/logo.png';
import { Search, ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

// context api
import { useStateValue } from '../../state/StateProvider'

const Header = () => {
    const [{ cart }, dispatch] = useStateValue();
    return (
        <section className='header'>
            {/* logo */}
            <Link to="/">
                <img src={logo} alt="logo" className='header__logo'/>
            </Link>

            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                {/* search icon */}
                <Search className="header_searchIcon" />
            </div>

            {/* nav items */}
            <div className="header__nav">
                <Link to='/login'>
                    <div className="header__navItem">
                        <span className="header__navItemLineOne">Hello Guest</span>
                        <span className="header__navItemLineTwo">Sign In</span>
                    </div>
                </Link>

                <div className="header__navItem">
                    <span className="header__navItemLineOne">Returns</span>
                    <span className="header__navItemLineTwo">& Orders</span>
                </div>

                <div className="header__navItem">
                    <span className="header__navItemLineOne">Your</span>
                    <span className="header__navItemLineTwo">Prime</span>
                </div>

                {/* icons */}
                <Link to="/checkout">
                    <div className="header__optionCart">
                        <ShoppingCart className="" />
                        <span className="header__cartCount">{cart?.length}</span>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Header;
