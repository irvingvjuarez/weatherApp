import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Layout from "./Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Weather from "../pages/Weather"
import NotFound from "../pages/NotFound"
import "./styles/App.css"

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/weather-info" component={Weather}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App