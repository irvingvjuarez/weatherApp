import React from "react"
import "./styles/DetailCard.css"

const DetailCard = (props) => (
    <article className="detail-card">
        <img src={props.img} alt={`${props.title} logo`} />
        <p>{props.value} {props.units}</p>
        <h2>{props.title}</h2>
    </article>
)

export default DetailCard