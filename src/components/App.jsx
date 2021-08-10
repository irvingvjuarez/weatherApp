import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Layout from "./Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Weather from "../pages/Weather"
import NotFound from "../pages/NotFound"
import "./styles/App.css"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: {
                name: ""
            }
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = () => {
        let location = navigator.geolocation.getCurrentPosition(position => {
            let lon = position.coords.longitude
            let lat = position.coords.latitude
        
            this.getData(lat, lon)
        })
    }

    getData = async(lat, lon) => {
        try{
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=51e2f79a6ef7e59aa6374290d6ab52dc`)
            let data = await response.json()
            this.setState({
                data: data
            })
        }catch(error){
            console.log(`Fetch error: ${error}`)
        }
    }

    render(){
        const { name } = this.state.data

        return(
            <BrowserRouter>
                <Layout location={name}>
                    <Switch>
                        <Route exact path="/" render={(props) => (
                            <Home data={this.state.data}/>
                        )}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/weather-info" component={Weather}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }
}

export default App