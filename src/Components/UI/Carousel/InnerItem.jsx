import React from "react";
import "./Style.css";

export const InnerItem = ({ data }) => {
  console.log("DATA: ", data);
  return (
    <>
      <div className="carousel-inner">
        {data.map((item, key) =>
          key == 0 ? (
            <div className="carousel-item active" key={key}>
              <img src={item.img} alt={item.title} />
              <div className="container">
                <div className="carousel-caption text-start">
                  {item.title ? <h1>{item.title}</h1> : ""}
                  {item.text ? <p> {item.text} </p> : ""}
                </div>
              </div>
            </div>
          ) : key < 6 ? (
            <div className="carousel-item" key={key}>
              <img src={item.img} alt={item.title} />
              <div className="container">
                <div className="carousel-caption text-start">
                  {item.title ? <h1>{item.title}</h1> : ""}
                  {item.text ? <p> {item.text} </p> : ""}
                </div>
              </div>
            </div>
          )
          : ""
        )}
      </div>
    </>
  );
};
