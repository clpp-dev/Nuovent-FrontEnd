import "./Style.css"
import React from 'react'
import { Button } from "../Button/Button"

export const HotelCard = ({anounces}) => {
  console.log(anounces);
  return (
    <div className="grid-card">
      {
        anounces.map((item, index) => (
        <div key={index} className="card">
          <img className="imgCard" src={item.arrayImages[0]} alt="" />
          <h5 className="">{item.nomAnounce}</h5>
          <p className="">{item.description}</p>
          <p className="">{item.numCapacity}</p>
          <p className="">{item.location}</p>
          <Button text="Ver más"/>
        </div>
      ))}
    </div>
  )
}