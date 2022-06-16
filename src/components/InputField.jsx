import React, { useState } from "react"
import HeaderButton from "./HeaderButton"

import "./styles/InputField.css"
import searchIcon from "../assets/icons/magnifying-glass.svg"

import fetchData from "../utils/fetchData"

const SearchField = ({ component }) => {
  const [search, setSearch] = useState(null)
  const handleSearch = () => {
    setSearch(true)

    let input = document.querySelector(".header__input")
    input.addEventListener("keyup", enterListener)

    /**Set focus to the input box */
    input.focus()
    handleFocus(input)
  }

  const enterListener = e => {
    if(e.keyCode === 13){
      e.target.blur()
      fetchData(component, e.target.value)
      e.target.value = ""
    }
  }

  const handleFocus = (input) => {
    setTimeout(() => {
      if(input === document.activeElement){
        handleFocus(input)
      }else{
        setSearch(false)
      }
    }, 1000)
  }

  return(
    <div className={`header__input-field ${search && "large"}`}>
      <HeaderButton
        specificClassName={search ? "header__inputButton" : "header__searchButton"}
        description="Search button"
        imgUrl={searchIcon}
        action={ handleSearch }
      />
      <input type="text" className={`header__input ${search ? "input-display" : "input-hidden"}`} placeholder={search ? "Search a city" : ""} />
    </div>
  )
}

export default SearchField
