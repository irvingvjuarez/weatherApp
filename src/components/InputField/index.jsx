import React, { useRef, useState } from "react"
import HeaderButton from "../HeaderButton"

import "../styles/InputField.css"
import searchIcon from "../../assets/icons/magnifying-glass.svg"

// utils
import { enterListener, fetchCities } from "./utils"
import fetchData from "../../utils/fetchData"

const InputField = ({ component }) => {
  const [search, setSearch] = useState(null)
  const [searchOptions, setSearchOptions] = useState([])
  const handleSearch = () => {
    setSearch(true)

    let input = document.querySelector(".header__input")
    input.addEventListener("keyup", (e) => enterListener(e, component))

    /**Set focus to the input box */
    input.focus()
    input.addEventListener("blur", () => {
      setTimeout(() => {
        setSearch(false)
        setSearchOptions([])
      }, 200)
    })
  }
  const handleChange = (e) => fetchCities(e, setSearchOptions)
  const handleFetch = (e) => fetchData(component, e.target.textContent)

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
        placeholder={search ? "Search a city" : ""}
        onChange={handleChange}
      />
      {(searchOptions.length && search) > 0 && (
        <ul className="header__option-list">
          {searchOptions.map(option =>
            <li
              key={option.cityId}
              onClick={handleFetch}
            >{option.name}</li>
          )}
        </ul>
      )}
    </div>
  )
}

export default InputField
