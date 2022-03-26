import "./Style.css"
import React from 'react'
import {NavLink} from "react-router-dom";
import { ImHome } from 'react-icons/im';
import { GiPartyPopper } from 'react-icons/gi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { IoIosCreate } from 'react-icons/io';

export const NavButtons = () => {
  return (
      <>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link"><ImHome/>Home</NavLink>
            <NavLink to="/zonaeventos" className="nav-link"><GiPartyPopper/>Zona Eventos</NavLink>
            <NavLink to="/registro" className="nav-link"><AiOutlineUserAdd/>Registro</NavLink>
            <NavLink to="/login" className="nav-link"><FiLogIn/>Login</NavLink>
            <NavLink to="/crearanuncio" className="nav-link"><IoIosCreate/>Crear Anuncio</NavLink>
          </div>
        </div>
      </>
  )
}


