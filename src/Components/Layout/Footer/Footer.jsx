import React from 'react'
import './Style.css'
import { Logo } from '../../UI/Logo/Logo'
export const Footer = () => {
  return (
    <div className="container-fluid bg-dark">
    <footer className="row row-cols-5 py-5 my-5 border-top d-flex justify-content-evenly flex-wrap">
      <div className="col d-flex flex-column flex-wrap">
        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
          <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
        </a>
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
        <h5 className="text-light">Mapa del sitio</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Zona Eventos</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Login</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Registro</a></li>
        </ul>
      </div>
    </footer>
  </div>
  )
}
