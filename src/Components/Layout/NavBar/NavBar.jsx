import React from "react";
import "./Style.css";
import { NavButtons } from "../../UI/NavButtons/NavButtons";
import { Logo } from "../../UI/Logo/Logo";

export const NavBar = () => {
  return (
    <nav className="cont-navbar">
      <Logo/>
      <NavButtons/>
    </nav>
  );
};

