import "./Style.css"
import React from 'react'
import { Button } from "../Button/Button"
import { Link } from "react-router-dom";
import Logo from "../../../Img/logo-500x500.png"


export const HotelCard = ({anounces}, {colums}) => {
  console.log(anounces);
  console.log(colums);
  return (
    <div className={`row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5`}>
      {
        anounces.map((item, index) => (
          <div key={index} className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
            style={{ backgroundImage: `url('${item.picture1}')` }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                {item.nomAnounce}
              </h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={Logo}
                    alt="Nuovent"
                    width={32}
                    height={32}
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill" />
                  </svg>
                  <small>{item.location}</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    {/* <use xlinkHref="#calendar3" /> */}
                  </svg>
                  <small>Capacidad: {item.numCapacity}</small>
                </li>
              </ul>
            </div>
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