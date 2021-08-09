import React from "react"
import HeaderButton from "./HeaderButton"

import css from "./styles/Header.css"
import hamburgerIcon from "../assets/icons/hamburgerButton.svg"
import searchIcon from "../assets/icons/magnifying-glass.svg"

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <header>

                <nav className="header__navbar">
                    <HeaderButton specificClassName="header__hamburgerButton" description="Hamburger button" imgUrl={hamburgerIcon} />

                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>

                <h3 className="header__cityName">Mexico City</h3>

                <HeaderButton specificClassName="header__searchButton" description="Search button" imgUrl={searchIcon} />
            </header>
        )
    }
}

export default Header