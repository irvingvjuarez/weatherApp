import React from "react"
import Loader from "../components/Loader"
import Map from "../components/Map"

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const { data, loading, error } = this.props.component.state

        if(loading){
            return(
                <Loader />
            )
        }else{
            return(
                <Map lat={data.coord.lat} lon={data.coord.lon}/>
            )
        }
    }
}

export default Home