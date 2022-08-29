import React from "react"
import airbibLogo from "../images/airbnb-logo.png"

export default function Navbar(){
    return(
        <nav>
            <img src={airbibLogo} 
            className="airbnb-logo"
            />
        </nav>
    )
}