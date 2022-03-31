import React from "react";
import './Style.css'

export const Carousel = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide my-0"
      data-bs-ride="carousel"

    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.pexels.com/photos/64102/pexels-photo-64102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="picture1"
          />

          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Example headline 11111</h1>
              <p>
                Some representative placeholder content for the first slide of
                the carousel.
              </p>
              {/* <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Sign up today
                </a>
              </p> */}
            </div>
          </div>
        </div>


        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="picture2"
          />

          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>
                Some representative placeholder content for the second slide of
                the carousel.
              </p>
              {/* <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Learn more
                </a>
              </p> */}
            </div>
          </div>
        </div>


        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/461755/pexels-photo-461755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="picture3"
          />

          <div className="container">
            <div className="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
              {/* <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Browse gallery
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
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
