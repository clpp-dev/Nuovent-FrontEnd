import React from 'react'
import './Style.css'
import { Logo } from '../../UI/Logo/Logo'
export const Footer = () => {
  return (
    <div className="container-fluid bg-dark">
    <footer className="row row-cols-5 py-2 my-2 border-top d-flex justify-content-evenly flex-wrap">
      <div className="col d-flex flex-column flex-wrap justify-content-center">
        <Logo width="50" height="50"/>
        <p className="text-muted">© 2021</p>
      </div>
      <div className="col d-flex flex-column flex-wrap">
        <h5 className="text-light">Mapa del sitio</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/home" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="/zonaeventos" className="nav-link p-0 text-muted">Zona Eventos</a></li>
          <li className="nav-item mb-2"><a href="/login" className="nav-link p-0 text-muted">Login</a></li>
          <li className="nav-item mb-2"><a href="/registro" className="nav-link p-0 text-muted">Registro</a></li>
        </ul>
      </div>
      <div className="col d-flex flex-column flex-wrap">
        <h5 className="text-light">Links de interes</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Términos y condiciones</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Facbook</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Instagram</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  </div>
  )
}
