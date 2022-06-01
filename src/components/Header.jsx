import React from "react"
import Navbar from "./Navbar"
import InputField from "./InputField"

import "./styles/Header.css"

class Header extends React.Component{
  constructor(props){
    super(props)
  }

  renderTitle(){
    return (
      <h3 className="header__cityName">
        {this.props.component.state.error ? "City not found" : `${ this.props.location }`}
      </h3>
    )
  }

  render(){
    return(
      <header>
        <Navbar />
        {this.renderTitle()}
        <InputField component={this.props.component} />
      </header>
    )
  }
}

export default Header
