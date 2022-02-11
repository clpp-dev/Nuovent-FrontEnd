import "./Style.css"
import React from 'react'
import PropTypes from 'prop-types'
import { Button } from "../Button/Button"

export const HotelCard = () => {
  return (
    <div className="Card">
        <img src="https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="IMAGEN" />
        <h3>Hotel campestre SENA</h3>
        <ul>
            <li>Cuidad: Armenia</li>
            <li>Capacidad: 180pax</li>
            <li>Tipo: Rural</li>
        </ul>
        <Button text="Ver más"/>
    </div>
  )
}

HotelCard.propTypes = {

}

