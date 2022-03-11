import "./Style.css"
import React from 'react'
import { Button } from "../Button/Button"
import { Link } from "react-router-dom";


export const HotelCard = ({anounces}) => {
  console.log(anounces);
  return (
    <div className="grid-card">
      {
        anounces.map((item, index) => (
        <div key={index} className="card">
          <img className="card-img-top" src={item.picture} alt="" />
          <div className="card-body">
            <h5 className="card-title">{item.nomAnounce}</h5>
            <p className="card-text">Descripcion: {item.description}</p>
            <p className="card-text">Capacidad: {item.numCapacity}</p>
            <p className="card-text">Lugar: {item.city}</p>
            <Link to="/login" className="btn btn-primary">Ver más</Link>
          </div>
        </div>
      ))}
    </div>
  )
}