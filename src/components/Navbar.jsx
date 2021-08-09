import React from "react"
import HeaderButton from "./HeaderButton"

import closedIcon from "../assets/icons/cancel.svg"
import hamburgerIcon from "../assets/icons/hamburgerButton.svg"
import css from "./styles/Navbar.css"

class Sidebar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sidebar: null
        }

        this.openSidebar = this.openSidebar.bind(this);
        this.closeSidebar = this.closeSidebar.bind(this);
    }

    openSidebar = () => {
        this.setState({
            sidebar: "true"
        })
    }

    closeSidebar = () => {
        this.setState({
            sidebar: "false"
        })
    }

    returnList(nameClass){
        return(
            <ul className={`nav__ul-mobile ${nameClass}`}>
                <div className="navbar-header">
                    <HeaderButton 
                        specificClassName="header__closeButton"
                        description="Close button"
                        imgUrl={closedIcon}
                        action={ this.closeSidebar }
                    />
                </div>
                <li>Map</li>
                <li>Weather data</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        )
    }

    renderUl = () => {
        if(this.state.sidebar === "true"){
            return(
                this.returnList("open")
            )
        }else if(this.state.sidebar === "false"){
            return(
                this.returnList("close")
            )
        }else{
            return(
                <ul className="nav__ul-desktop">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            )
        }
    }

    renderButton = () => {
        if(this.state.sidebar === "false" || this.state.sidebar === null){
            return(
                <HeaderButton 
                    specificClassName="header__hamburgerButton" 
                    description="Hamburger button" 
                    imgUrl={hamburgerIcon} 
                    action={ this.openSidebar } 
                />
            )
        }
    }

    render(){
        return(
            <nav className="header__navbar">
                {this.renderUl()}
                {this.renderButton()}
            </nav>
        )
    }
}

export default Sidebar