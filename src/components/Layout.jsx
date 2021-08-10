import React from "react"
import Header from "./Header"

function Layout(props){
    return(
        <React.Fragment>
            <Header/>
            {props.children}
        </React.Fragment>
    )
}

export default Layout