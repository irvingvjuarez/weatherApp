import React, { useState } from "react"
import HeaderButton from "../HeaderButton"

import "../styles/InputField.css"
import searchIcon from "../../assets/icons/magnifying-glass.svg"

// utils
import { enterListener, handleFocus } from "./utils"

const InputField = ({ component }) => {
  const [search, setSearch] = useState(null)
  const handleSearch = () => {
    setSearch(true)

    let input = document.querySelector(".header__input")
    input.addEventListener("keyup", (e) => enterListener(e, component))

    /**Set focus to the input box */
    input.focus()
    handleFocus(input, setSearch)
  }

  return(
    <div className={`header__input-field ${search && "large"}`}>
      <HeaderButton
        specificClassName={search ? "header__inputButton" : "header__searchButton"}
        description="Search button"
        imgUrl={searchIcon}
        action={ handleSearch }
      />
      <input
        type="text"
        className={`header__input ${search ? "input-display" : "input-hidden"}`}
        placeholder={search ? "Search a city" : ""} />
    </div>
  )
}

export default InputField
