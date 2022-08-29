import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import peopleData from "./data"


export default function App() {
  const peoples = peopleData.map(people => <Card 
    key = {people.id}
    item = {people}
  />)

  return (
      <div>
        <Navbar />
        <Hero />
        <section className="cards--list">
          {peoples}
        </section>
        
      </div>
  )
}
