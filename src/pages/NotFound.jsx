import React from "react"
import { Link } from "react-router-dom"
import "./styles/NotFound.css"

import image404 from "../assets/images/404.jpg"

class NotFound extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="error404-container">
                <img src={image404} alt="Error 404 image" />
                <Link className="return-btn" to="/">Go to home</Link>
            </div>
        )
    }
}

export default NotFound