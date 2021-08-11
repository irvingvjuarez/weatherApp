import React from "react"
import Navbar from "./Navbar"
import InputField from "./InputField"

import "./styles/Header.css"

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    renderTitle(){
        if(this.props.component.state.error){
            console.log(this.props.component.state.error)
            return(
                <h3 className="header__cityName">City not found</h3>
            )
        }else if(!this.props.component.state.loading){
            return (
                <h3 className="header__cityName">{ this.props.location }</h3>
            )
        }
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