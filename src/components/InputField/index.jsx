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
  const inputRef = useRef(null)
  const handleSearch = () => {
    setSearch(true)
    inputRef.current.focus()
  }
  const handleChange = (e) => fetchCities(e, setSearchOptions)
  const handleFetch = (e) => fetchData(component, e.target.textContent)
  const handleBlur = (e) => setTimeout(() => {
    e.target.value = ""
    setSearch(false)
    setSearchOptions([])
  }, 200)

  return(
    <div className={`header__input-field ${search && "large"}`}>
      <HeaderButton
        specificClassName={search ? "header__inputButton" : "header__searchButton"}
        description="Search button"
        imgUrl={searchIcon}
        action={ handleSearch }
      />
      <input
        ref={inputRef}
        type="text"
        className={`header__input ${search ? "input-display" : "input-hidden"}`}
        placeholder={search ? "Search a city" : ""}
        onChange={handleChange}
        onKeyUp={(e) => enterListener(e, component)}
        onBlur={handleBlur}
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
