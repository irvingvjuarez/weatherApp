import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Layout from "../components/Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Weather from "../pages/Weather"
import NotFound from "../pages/NotFound"

import fetchData from "../utils/fetchData"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      error: null,
      data: {
        name: "",
        coord: {},
        weather: [{}],
        sys: {},
        main: {},
        timezone_offset: 0,
        wind: {},
        daily: [
          {
            weather: [],
            temp: {}
          }
        ],
        hourly: [
          {
            temp: 0,
            pop: 0,
            dt: 0
          }
        ]
      }
    },
    this.flag = 0
  }

  componentDidMount(){
    fetchData(this, "Mexico City")
  }

  render(){
    const { name } = this.state.data

    return(
      <BrowserRouter>
        <Layout location={name} component={this} >
          <Switch>
            <Route exact path="/" render={() => <Home state={this.state} />}/>
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route exact path="/weather-info" render={() => <Weather state={this.state} />} />
            <Route path="/weather-info" component={Weather} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App
