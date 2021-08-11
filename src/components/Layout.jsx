import React from "react"
import Header from "./Header"

function Layout(props){
    return(
        <React.Fragment>
            <Header location={props.location} component={props.component} />
            {props.children}
        </React.Fragment>
    )
}

export default Layout