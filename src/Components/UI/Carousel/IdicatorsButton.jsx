import React from "react";

export const IdicatorsButton = ({ data }) => {
  return (
    <div className="carousel-indicators">
      {data.map((item, key) =>
          key == 0 ? (
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={key}
              className="active"
              aria-current="true"
              aria-label={"Silide " + key}
          />
          ) : key < 6 ? (
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={key}
              aria-label={"Silide " + key}
            />
          ) : ""
        )}
    </div>
  );
};
