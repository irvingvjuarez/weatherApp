import React from "react"
import css from "./styles/Header.css"

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <header>

                <nav className="header__navbar">
                    <button className="header__hamburgerButton resetButton">
                        <img src="./assets/icons/hamburgerButton.svg" alt="Hamburger button" />
                    </button>
                    
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>

                <h3 className="header__cityName">Mexico City</h3>

                <button className="header__searchButton resetButton">
                    <img src="./assets/icons/magnifying-glass.svg" alt="Search button" />
                </button>
            </header>
        )
    }
}

export default Header