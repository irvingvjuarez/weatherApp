import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Layout from "./Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Weather from "../pages/Weather"
import NotFound from "../pages/NotFound"
import "./styles/App.css"

import fetchData from "../utils/fetchData"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            error: null,
            data: {
                name: "",
                coord: {}
            }
        }
    }

    componentDidMount(){
        fetchData(this)
    }

    render(){
        const { name } = this.state.data

        return(
            <BrowserRouter>
                <Layout location={name} component={this} >
                    <Switch>
                        <Route exact path="/" render={(props) => (
                            <Home component={this}/>
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