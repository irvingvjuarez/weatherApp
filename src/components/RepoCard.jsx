import React from "react"

import repoLogo from "../assets/icons/bookLogo.png"
import "./styles/RepoCard.css"

const RepoCard = (props) => {
    return(
        <div className="repo-main">
            <div className="repo-main__header">
                <img src={repoLogo} alt="repo logo" />
                <a href={props.link} target="_blank">{props.title}</a>
            </div>

            <div className="repo-main__body">
                {props.description}
            </div>
        </div>
    )
}

export default RepoCard