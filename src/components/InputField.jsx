import React from "react"
import HeaderButton from "./HeaderButton"

import "./styles/InputField.css"
import searchIcon from "../assets/icons/magnifying-glass.svg"

import fetchData from "../utils/fetchData"

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

        let input = document.querySelector(".header__input")
        input.addEventListener("keyup", this.enterListener)
    
        input.focus()
        this.focus(input)
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

    enterListener = e => {
        if(e.keyCode === 13){
            e.target.blur()
            fetchData(this.props.component, e.target.value)
            e.target.value = ""
        }
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
                    <input type="text" className="header__input input-display" placeholder="Search a city" />
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
                    <input type="text" className="header__input input-hidden"/>
                </div>
            )
        }
    }
}

export default InputField