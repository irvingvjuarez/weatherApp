import React from "react"
import Section from "../components/Section"
import RepoCard from "../components/RepoCard"

import avatar from "../assets/images/avatar3.jpg"
import twitter from "../assets/icons/twitter.png"
import github from "../assets/icons/github.png"
import mail from "../assets/icons/mail.png"

import "./styles/Contact.css"

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount(){
        this.fetchGitHubData()
    }

    fetchGitHubData = async() => {
        const API = "https://api.github.com/users/IrvingJuarez/repos"

        try{
            const response = await fetch(API)
            const data = await response.json()

            this.setState({
                data: data
            })
        }catch(error){
            //
        }
    }

    renderRepoData = () => {

        if(this.state.data){
            return(
                <Section title="Latest repositories">
                    <article className="repos-container">
                        {this.state.data.map(repo => {
                            let flag = false
                            if(repo.name == "Pacman-Remastered"){
                                flag = true
                            }else if(repo.name == "equation-solver"){
                                flag = true
                            }else if(repo.name == "weatherApp"){
                                flag = true
                            }
        
                            if(flag){
                                return(
                                    <RepoCard key={repo.id} title={repo.name} link={repo.html_url} description={repo.description} />
                                )
                            }
                        })}
                    </article>
                </Section>
            )
        }
    }

    render(){
        return(
            <section className="contact-main">
                <Section title="">
                    <img src={avatar} className="avatarImage" />
                    <div className="titles">
                        <h2>Irving Juárez</h2>
                        <h3>Fronted developer</h3>
                        <nav className="socialMedia">
                            <ul>
                                <li><a href="https://twitter.com/juarez1_irving"><img src={twitter} /></a></li>
                                <li><a href="https://github.com/IrvingJuarez/"><img src={github} /></a></li>
                                <li><a href="mailto: irvingjuarez274@gmail.com"><img src={mail} /></a></li>
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
                        <br /><br />
                    </p>
                </Section>

                {this.renderRepoData()}
            </section>
        )
    }
}

export default Contact