import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Navbar"
import HeaderButton from "./HeaderButton"

import css from "./styles/Header.css"
import searchIcon from "../assets/icons/magnifying-glass.svg"

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sidebar: false
        }
    }

    searchButtonAction = () => {
        alert("Search button pushed")
    }

    render(){
        return(
            <header>
                <Navbar />

                <h3 className="header__cityName">Mexico City</h3>

                <HeaderButton 
                    specificClassName="header__searchButton" 
                    description="Search button" 
                    imgUrl={searchIcon} 
                    action={ this.searchButtonAction }
                />
            </header>
        )
    }
}

export default Header