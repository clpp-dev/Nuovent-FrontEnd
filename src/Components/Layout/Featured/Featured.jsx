import "./Style.css";
import React from "react";
import PropTypes from "prop-types";
import { HotelCard } from "../../UI/HotelCard/HotelCard";
import { TittleH2 } from "../../UI/TittleH2/TittleH2";

export const Featured = (props) => {
  return (
    <div className="cont-featured">
      <TittleH2 textTittle="HOLA MUNDO" />
      <div className="cont-Cards-featured">
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </div>
    </div>
  );
};

Featured.propTypes = {};
