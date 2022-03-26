import React, { useEffect, useState } from 'react'
import { CapacityFilter } from '../../UI/CapacityFilter/CapacityFilter'
import { HotelCard } from '../../UI/HotelCard/HotelCard'
import { Location } from '../../UI/Location/Location'
import './Style.css'

export const FilterEvents = () => {

  const [anounoces, setAnounoces] = useState([])

  const urlApi = "https://nuoventr.herokuapp.com/anuncios"
  const fetchAnounces = async (url) =>{
      fetch(url)
      .then(response => response.json())
      .then(data => {
        setAnounoces(data)
      })
      .catch(error => console.log(error))
  }

useEffect(() =>{
fetchAnounces(urlApi)
},[])

  return (
    <div className="row container d-flex justify-content-center">
      <div className="container-fluid col-md-3 d-flex flex-column container px-4 py-5">
        <h2 className="pb-2 border-bottom">Filtros</h2>
        <h3 className="mt-4">Departamento</h3>
        <Location/>
        <h3 className="mt-4">Capacidad</h3>
        <CapacityFilter/>
      </div>
      <div className="col-md-8 container px-4 py-5">
        <h2 className="pb-2 border-bottom">Anuncios</h2>
          <HotelCard anounces={anounoces} colums="2"/>
      </div>
    </div>
  )
}


