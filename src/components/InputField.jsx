import React from "react"
import HeaderButton from "./HeaderButton"

import "./styles/InputField.css"
import searchIcon from "../assets/icons/magnifying-glass.svg"

class InputField extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search: null
        }
    }

    searchOpen = () => {
        this.setState({
            search: true
        })

        setTimeout(() => {
            let input = document.querySelector(".header__input")
            input.focus()
            this.focus(input)
        }, 250)
    }

    focus = (input) => {
        setTimeout(() => {
            if(input === document.activeElement){
                this.focus(input)
            }else{
                this.setState({
                    search: false
                })
            }
        }, 1000)
    }

    render(){
        if(this.state.search){
            return(
                <div className="header__input-field large">
                    <HeaderButton 
                        specificClassName="header__inputButton" 
                        description="Search button" 
                        imgUrl={searchIcon} 
                        action={ this.searchOpen }
                    />
                    <input type="text" className="header__input" placeholder="Search a city"/>
                </div>
            )
        }else{
            return(
                <div className="header__input-field">
                    <HeaderButton 
                        specificClassName="header__searchButton" 
                        description="Search button" 
                        imgUrl={searchIcon} 
                        action={ this.searchOpen }
                    />
                </div>
            )
        }
    }
}

export default InputField