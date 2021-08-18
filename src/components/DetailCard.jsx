import React from "react"
import "./styles/DetailCard.css"

const DetailCard = (props) => (
    <article className="detail-card">
        <img src={props.imgUrl} alt={`${props.title} logo`} />
        <h3>5 <span>km/h</span></h3>
        <h2>{props.title}</h2>
    </article>
)

export default DetailCard