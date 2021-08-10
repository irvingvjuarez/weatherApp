import React from "react"
import { Link } from "react-router-dom"
import HeaderButton from "./HeaderButton"

import closedIcon from "../assets/icons/cancel.svg"
import hamburgerIcon from "../assets/icons/hamburgerButton.svg"
import "./styles/Navbar.css"

class Sidebar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sidebar: null
        }

        this.openSidebar = this.openSidebar.bind(this);
        this.closeSidebar = this.closeSidebar.bind(this);
    }

    componentDidUpdate = () => {
        let links = [...document.querySelectorAll("a")]
        links.map(link => {
            link.addEventListener("click", this.closeSidebar)
            console.log("Hi")
        })
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
                <li><Link to="/">Map</Link></li>
                <li><Link to="/weather-info">Weather data</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
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