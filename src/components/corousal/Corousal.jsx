import React from "react";

export const Corousal = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/img/cor1.jpg"
              className="d-block w-100 dark-theme-img"
              alt="Slide 1"
              style={{ height: "620px", objectFit: "conain" }}
            />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center centered-text">
              <h2 className="text-white fw-bold animated-text">
                Innovative Software Services
              </h2>
              <p className="text-white">
                Empowering businesses with cutting-edge technology and custom
                software solutions.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/img/cor2.webp"
              className="d-block w-100 dark-theme-img"
              alt="Slide 1"
              style={{ height: "620px", objectFit: "conain" }}
            />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center centered-text">
              <h2 className="text-white fw-bold animated-text">
                Innovative Software Services
              </h2>
              <p className="text-white">
                Empowering businesses with cutting-edge technology and custom
                software solutions.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/img/cor3.jpg"
              className="d-block w-100 dark-theme-img"
              alt="Slide 1"
              style={{ height: "620px", objectFit: "conain" }}
            />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center centered-text gap-3">
              <h2 className="text-white fw-bold animated-text">
                Innovative Software Services
              </h2>
              <p className="text-white">
                Empowering businesses with cutting-edge technology and custom
                software solutions.
              </p>
              <button
                type="button"
                className="btn btn-primary btn-lg rounded-5 px-4"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
