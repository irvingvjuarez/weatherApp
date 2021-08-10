import React from "react"
import loader from "../assets/gifs/loader.gif"

import "./styles/Loader.css"

function Loader(){
    return(
        <div className="loading-field">
            <img src={loader} alt="Loading logo" />
        </div>
    )
}

export default Loader