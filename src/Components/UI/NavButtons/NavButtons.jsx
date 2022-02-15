import "./Style.css"
import React from 'react'
import {NavLink} from "react-router-dom";
import { ImHome } from 'react-icons/im';
import { GiPartyPopper } from 'react-icons/gi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';


export const NavButtons = () => {
  return (
      <nav className="cont-buttons" >
        <ul>
          <li >
            <NavLink to="/" className="nav-button"><ImHome/>Home</NavLink>
          </li>
          <li>
            <NavLink to="/zonaeventos" className="nav-button"><GiPartyPopper/>Zona Eventos</NavLink>
          </li>
          <li>
            <NavLink to="/registro" className="nav-button"><AiOutlineUserAdd/>Registro</NavLink>
            </li>
          <li>
            <NavLink to="/login" className="nav-button"><FiLogIn/>Login</NavLink>
            
            </li>
        </ul>
      </nav>
  )
}


