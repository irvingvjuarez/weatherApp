import React from "react"
import Loader from "../components/Loader"

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    
    render(){
        const { location } = this.props

        if(location === ""){
            return(
                <Loader />
            )
        }else{
            return (
                <h2>{ location }</h2>
            )
        }
    }
}

export default Home