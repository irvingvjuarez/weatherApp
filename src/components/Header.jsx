import React from "react"
import Navbar from "./Navbar"
import InputField from "./InputField"

import "./styles/Header.css"

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <header>
                <Navbar />

                <h3 className="header__cityName">{ this.props.location }</h3>

                <InputField component={this.props.component} />
            </header>
        )
    }
}

export default Header