import React from "react";
import "./Style.css";
import PropTypes from "prop-types";
import {Button} from "../../UI/Button/Button"

export const NavBar = () => {
  return (
    <nav className="cont-navbar">
      <Button text="Home" />
      <Button text="Zona Eventos" />
      <Button text="Registro" />
      <Button text="Login" />
    </nav>
  );
};

NavBar.propTypes = {};
