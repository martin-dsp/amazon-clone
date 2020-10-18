import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Header() {
    return (
        <nav className="header">
            {/* When clicked, link it to "/" */}
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                {/* href causes a refresh! */}
                {/* 'Link' will not! */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        {/* 'span' >> color a part of a text */}
                        {/* Other tags are allowed to use too! */}
                        <span className="header__optionLineOne">Hello Qazi</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        {/* 'span' >> color a part of a text */}
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        {/* 'span' >> color a part of a text */}
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        {/* If indented, you can use two CSS! */}
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>

            </div>

        </nav>
    )
}

export default Header
