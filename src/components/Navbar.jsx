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

    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  componentDidUpdate = () => {
    let list = document.querySelector("ul")
    if(list.classList.contains("nav__ul-mobile")){
      let links = [...document.querySelectorAll("a")]
      links.map(link => link.addEventListener("click", this.closeSidebar))
    }
  }

  toggleSidebar = () => {
    const { sidebar } = this.state

    this.setState({
      sidebar: !sidebar
    })
  }

  renderUl = () => {
    const { sidebar } = this.state
    const nameClass = sidebar ? "open" : "close";

    return(
      <>
        <ul className={`nav__ul-mobile ${nameClass}`}>
          <div className="navbar-header">
            <HeaderButton
              specificClassName="header__closeButton"
              description="Close button"
              imgUrl={closedIcon}
              action={ this.toggleSidebar }
            />
          </div>
          <li onClick={this.toggleSidebar}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={this.toggleSidebar}>
            <Link to="/map">Interactive Map</Link>
          </li>
          <li onClick={this.toggleSidebar}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={this.toggleSidebar}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <ul className="nav__ul-desktop">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </>
    )
  }

  renderButton = () => {
    if(!this.state.sidebar){
      return(
        <HeaderButton
          specificClassName="header__hamburgerButton"
          description="Hamburger button"
          imgUrl={hamburgerIcon}
          action={ this.toggleSidebar }
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
