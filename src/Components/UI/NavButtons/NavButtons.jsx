import "./Style.css"
import React from 'react'
import {NavLink} from "react-router-dom";
import { ImHome } from 'react-icons/im';
import { GiPartyPopper } from 'react-icons/gi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { IoIosCreate } from 'react-icons/io';
import { AuthUser } from "../../Helpers/AuthUser/AuthUser";
// import { Logout } from "../../Helpers/Logout/Logout";

export const NavButtons = () => {
  let userIsLoggedIn = AuthUser();

  return (
      <>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-0 ms-md-3 d-flex flex-wrap">
            <NavLink to="/" className="nav-link rounded d-flex flex-column justify-content-center align-items-center"><ImHome className="" />Home</NavLink>
            <NavLink to="/zonaeventos" className="nav-link d-flex flex-column justify-content-center align-items-center"><GiPartyPopper className="" />Zona Eventos</NavLink>

            {
              userIsLoggedIn ? "" 
              : <NavLink to="/registro" className="nav-link d-flex flex-column justify-content-center align-items-center"><AiOutlineUserAdd className="" />Registro</NavLink>
            }

            {
              userIsLoggedIn ? ""
              : <NavLink to="/login" className="nav-link d-flex flex-column justify-content-center align-items-center"><FiLogIn className="" />Login</NavLink>
            }

            {
              userIsLoggedIn ?
              <NavLink to="/crearanuncio" className="nav-link d-flex flex-column justify-content-center align-items-center"><IoIosCreate className="" />Crear Anuncio</NavLink>
              : ""
            }

            {
              userIsLoggedIn ?
              <NavLink to="/home" className="nav-link d-flex flex-column justify-content-center align-items-center"><FiLogOut className="" />Cerrar Sesión</NavLink>
              : ""
            }

          </div>
        </div>
      </>
  )
}


