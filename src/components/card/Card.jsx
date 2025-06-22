import React from "react";
import './Card.css'

const Card = ({ icon, title = "Card Title", description = "With supporting text below as a natural lead-in to additional content." }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
      <div
        className="card custom-card text-white shadow"
        style={{ backgroundColor: "#171725", width: "100%", maxWidth: "320px" }}
      >
        <div className="card-body">
          <div className="icon mb-3 fs-3">{icon}</div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
