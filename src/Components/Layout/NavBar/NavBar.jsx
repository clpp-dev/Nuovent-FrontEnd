import React from "react";
import "./Style.css";
import PropTypes from "prop-types";
import {Button} from "../../UI/Button/Button"
import { NavButton } from "../../UI/NavButton/NavButton";


export const NavBar = () => {
  return (
    <nav className="cont-navbar">
      <NavButton text="Home" icon="ImHome" />
      <NavButton text="Zona Eventos" icon="GiPartyPopper" />
      <NavButton text="Registro" icon="AiOutlineUserAdd" />
      <NavButton text="Login" icon="FiLogIn" />
    </nav>
  );
};

NavBar.propTypes = {};
