import React from "react"
import css from "./styles/App.css"
import Header from "./Header"

class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Header />
        )
    }
}

export default App