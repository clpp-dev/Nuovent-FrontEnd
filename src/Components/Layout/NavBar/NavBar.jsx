import React from "react";
import "./Style.css";
import { NavButtons } from "../../UI/NavButtons/NavButtons";
import ImgLogo from "../../../Img/logo-500x500.png"

export const NavBar = () => {
  return (
    <div className="comtainer-fluid bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <div className="container-fluid d-flex">
          <a className="navbar-brand" href="#">
            <img src={ImgLogo} alt="" width={50} height={50} className="rounded" />
          </a>
          <NavButtons/>
        </div>
      </nav>
    </div>
  );
};

