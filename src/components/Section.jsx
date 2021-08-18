import React from "react"
import "./styles/Section.css"

const Section = (props) => (
    <section className="sectionMain">
        <h2>{props.title}</h2>
        {props.children}
    </section>
)

export default Section