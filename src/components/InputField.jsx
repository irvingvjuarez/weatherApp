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
    }

    render(){
        if(this.state.search){
            return(
                <div className="header__input-field">
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
                <HeaderButton 
                    specificClassName="header__searchButton" 
                    description="Search button" 
                    imgUrl={searchIcon} 
                    action={ this.searchOpen }
                />
            )
        }
    }
}

export default InputField