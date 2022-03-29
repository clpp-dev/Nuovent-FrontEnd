import "./Style.css"
import React from 'react'
import { Button } from "../Button/Button"
import { Link } from "react-router-dom";
import Logo from "../../../Img/logo-500x500.png"


export const HotelCard = ({anounces}) => {
  console.log(anounces);

  return (
    <div className={`row row-cols-1 row-cols-lg-2 row-cols-xl-3  align-items-stretch g-4 py-5`}>
      {
        anounces.map((item, index) => (
          <div key={index} className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded shadow-lg"
            style={{ backgroundImage: `url('${item[1].picture1}')` }}
          >
            <div className="d-flex flex-column justify-content-center h-100 py-3 text-white text-shadow-1 align-items-center">
              <h2 className="pt-5 mt-5 mb-4 display-10 lh-1 fw-bold">
                {item[1].nomAnounce}
              </h2>
              <ul className="d-flex list-unstyled mt-auto justify-content-center align-items-center">
                <li className="d-flex flex-column align-items-center mx-1">
                  <p className="fs-5">{item[1].location}</p>
                  <p className="fs-5">Capacidad {item[1].numCapacity}</p>
                </li>
              </ul>
            </div>
            <a href="#" className="btn btn-dark rounded-0 py-3 m-0">Ver más</a>
          </div>
        </div>
      ))}
    </div>
  )
}

// <div key={index} className="card custom-card" style={{width: '18rem'}}>
// <img className="card-img-top w-100 h-100" src={item.picture1} alt={item.nomAnounce} />
// <div className="card-body">
//   <h5 className="card-title">{item.nomAnounce}</h5>
//   <p className="card-text">Descripcion: {item.description}</p>
//   <p className="card-text">Capacidad: {item.numCapacity}</p>
//   <p className="card-text">Lugar: {item.city}</p>
//   <Link to="/login" className="btn btn-primary">Ver más</Link>
// </div>
// </div>