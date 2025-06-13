import React from "react";
const Card = ({ icon }) => {
  return (
    <>
      <div className="card w-75" 
            style={{ backgroundColor: "#171725" }}>
        <div className="card-body">
        <h5 className="card-title" style={{ paddingBottom: "10px" }}>
            {icon}
          </h5>
          <h5 className="card-title text-white">Card title</h5>
          <p className="card-text text-white">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
