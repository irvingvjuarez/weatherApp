import React from "react"
import HeaderButton from "./HeaderButton"

import closedIcon from "../assets/icons/cancel.svg"
import hamburgerIcon from "../assets/icons/hamburgerButton.svg"
import css from "./styles/Navbar.css"

class Sidebar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sidebar: false
        }

        this.openSidebar = this.openSidebar.bind(this);
        this.closeSidebar = this.closeSidebar.bind(this);
    }

    openSidebar = () => {
        this.setState({
            sidebar: true
        })
    }

    closeSidebar = () => {
        this.setState({
            sidebar: false
        })
    }

    render(){
        if(this.state.sidebar){
            return(
                <nav className="header__navbar">
                    
                    <ul className="nav__ul-mobile">
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
                </nav>
            )
        }else{
            return(
                <nav className="header__navbar">
                    <HeaderButton 
                        specificClassName="header__hamburgerButton" 
                        description="Hamburger button" 
                        imgUrl={hamburgerIcon} 
                        action={ this.openSidebar } 
                    />

                    <ul className="nav__ul-desktop">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            )
        }
    }
}

export default Sidebar