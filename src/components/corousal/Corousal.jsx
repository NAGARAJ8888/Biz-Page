import React from "react";
import "./Corousal.css"; // Import your custom styles

export const Corousal = () => {
  const images = ["cor1.jpg", "cor2.webp", "cor3.jpg"];

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="carousel-overlay-wrapper position-relative">
              <img
                src={`/img/${img}`}
                className="d-block w-100 carousel-img"
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-overlay"></div>
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center gap-3">
                <h2 className="text-white fw-bold animated-text">
                  Innovative Software Services
                </h2>
                <p className="text-white">
                  Empowering businesses with cutting-edge technology and custom
                  software solutions.
                </p>
                {index === 2 && (
                  <button className="btn btn-primary btn-lg rounded-5 px-4">
                    Get Started
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
