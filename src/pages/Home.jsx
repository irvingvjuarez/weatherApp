import React from "react"
import Loader from "../components/Loader"
import Map from "../components/Map"

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    
    render(){
        const { data } = this.props

        if(data.name === ""){
            return(
                <Loader />
            )
        }else{
            return (
                <Map lat={data.coord.lat} lon={data.coord.lon}/>
            )
        }
    }
}

export default Home