import React from "react"
import star from "../images/star.png"


export default function Card(props) {
    let card = props.item
    
    let image = require("../images/" + card.coverImg)

    let badgeText
    if (card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (card.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText != null && <div className="card--badge">{badgeText}</div>}
            <img src={image} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{card.stats.rating}</span>
                <span className="gray">({card.stats.reviewCount}) • </span>
                <span className="gray">{card.location}</span>
            </div>

            <p className="card--title">{card.title}</p>
            <p className="card--price">
                <span className="bold">
                    From ${card.price}
                </span>
                 / person
            </p>
        </div>
    )
}
