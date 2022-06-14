import React from "react";
import "./Style.css";
import data from "./data.json";
import { InnerItem } from "./InnerItem";
import { IdicatorsButton } from "./IdicatorsButton";





export const Carousel = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide my-0"
      data-bs-ride="carousel"
    >
      <IdicatorsButton data={data.sliders} />

      <InnerItem data={data.sliders} />

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
