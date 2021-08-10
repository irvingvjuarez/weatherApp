import React from "react"

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <h2>{this.props.location}</h2>
        )
    }
}

export default Home