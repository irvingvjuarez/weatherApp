import React from "react"
import Navbar from "./Navbar"
import InputField from "./InputField"

import "./styles/Header.css"

class Header extends React.Component{
  render(){
    const { location, component: { state } } = this.props

    return(
      <header>
        <Navbar />
        <h3 className="header__cityName">
          {state.error ? "City not found" : `${ location }`}
        </h3>
        <InputField component={this.props.component} />
      </header>
    )
  }
}

export default Header
