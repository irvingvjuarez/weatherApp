import React from "react"
import Loader from "../components/Loader"
import Section from "../components/Section"

import avatar from "../assets/images/avatar3.jpg"

import "./styles/Contact.css"

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            error: null
        }
    }

    componentDidMount(){
        // this.fetchGitHubData()
    }

    fetchGitHubData = async() => {
        this.setState({
            loading: true,
            error: null
        })
        const API = "https://api.github.com/users/IrvingJuarez/repos"

        try{
            const response = await fetch(API)
            const data = await response.json()
            return data
        }catch(error){
            this.setState({
                loading: false,
                error: error
            })
        }
    }

    render(){
        if(this.state.loading){
            return(
                <section className="contact-main">
                    <Loader />
                </section>
            )
        }else if(this.state.error){
            return(
                <section className="contact-main">

                </section>
            )
        }else{
            return(
                <section className="contact-main">
                    <Section title="">
                        <img src={avatar} className="avatarImage" />
                        <div className="titles">
                            <h2>Irving Juárez</h2>
                            <h3>Fronted developer</h3>
                            <nav className="socialMedia">
                                <ul>
                                    <li><a href="https://twitter.com/juarez1_irving"><img src="" /></a></li>
                                    <li><a href="https://github.com/IrvingJuarez/"><img src="" /></a></li>
                                    <li><a href="mailto: irvingjuarez274@gmail.com"><img src="" /></a></li>
                                </ul>
                            </nav>
                        </div>
                    </Section>

                    <Section title="About me">
                        <p>
                            Frontend engineer with high level of mastery in React js and preprocessors such like Stylus or Sass. I develop prefessional websites using the correct tools, such as Webpack, Babel, etc. 
                            <br /><br />
                            I like to create useful web apps that solve real life problems. In my free time I like to develop complex videogames for the web that actually become more complex than most web pages.
                            <br /><br />
                            I consider myself a problem solver and you can contact me through an email to start working on your next awesome web page.
                        </p>
                    </Section>
                </section>
            )
        }
    }
}

export default Contact