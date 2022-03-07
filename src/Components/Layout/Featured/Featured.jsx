import React, { useState, useEffect } from "react";
import "./Style.css";
import { HotelCard } from "../../UI/HotelCard/HotelCard";
import { TittleH2 } from "../../UI/TittleH2/TittleH2";

export const Featured = () => {

const [lastAnounoces, setLastAnounoces] = useState([])

    const urlApi = "https://nuoventr.herokuapp.com/home"
    console.log("🚀 ~ line 11 urlApi", urlApi)
    const fetchLastAnounces = async (url) =>{
        fetch(url)
        .then(response => response.json())
        .then(data => setLastAnounoces(data))
        .catch(error => console.log(error))
    }

useEffect(() =>{
  fetchLastAnounces(urlApi)
},[])

  return (
    <div className="cont-featured">
      <TittleH2 textTittle="Destacados" />
      <div className="cont-Cards-featured">
        <HotelCard anounces={lastAnounoces}/>
      </div>
    </div>
  );
};
