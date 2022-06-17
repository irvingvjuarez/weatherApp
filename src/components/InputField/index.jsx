import React, { useEffect, useState } from "react"
import HeaderButton from "../HeaderButton"

import "../styles/InputField.css"
import searchIcon from "../../assets/icons/magnifying-glass.svg"

// utils
import { enterListener, getWhere, handleFocus } from "./utils"
import { CITIES_API } from "../../globals"

const citiesRequestConfig = {
  headers: {
    'X-Parse-Application-Id': process.env.CitiesApiApplicationID,
    'X-Parse-REST-API-Key': process.env.CitiesApiKey
  }
}

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

  useEffect(() => {
    /**tol is the input from search box */
    const where = getWhere("tol")
    const api = CITIES_API.replace("{where}", where)

    fetch(api, citiesRequestConfig)
      .then(res => res.json())
      .then(data => console.log("Cites API data:", data))
      .catch(err => console.log("There has been an error: ", err.message))
  }, [])

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
