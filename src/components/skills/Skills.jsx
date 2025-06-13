import React from "react";

export const Skills = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="fw-bold pt-5 pb-3 heading-with-underline">ABOUT US</h2>
        <p className=" w-75 mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          incidunt omnis provident id expedita a esse voluptatum magnam nobis,
          voluptates dolorum libero quibusdam aliquid repudiandae, nisi aliquam
          cupiditate suscipit pariatur optio ipsum?
        </p>
      </div>
      <div className="p-5 text-white">
      <div className="progress my-3 rounded-0"  style={{ height:"35px", margin:"0 10%" }}>
        <div
          className="bg-success"
          role="progressbar"
          style={{ 
            width: "100%", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            padding: "0 10px"
          }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        > <span>HTML</span><span>100%</span></div>
      </div>
      <div className="progress my-3 rounded-0" style={{ height:"35px", margin:"0 10%" }}>
        <div
          className="bg-info"
          role="progressbar"
          style={{ 
            width: "80%", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            padding: "0 10px"
          }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ><span>CSS</span><span>80%</span></div>
      </div>
      <div className="progress my-3 rounded-0" style={{ height: "35px", margin:"0 10%" }}>
        <div
          className="bg-warning"
          role="progressbar"
          style={{ 
            width: "70%", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            padding: "0 10px"
          }}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ><span>JAVASCRIPT</span><span>70%</span></div>
      </div>
      <div className="progress rounded-0" style={{ height: "35px", margin:"0 10%", marginTop:"0" }}>
        <div
          className="bg-danger"
          role="progressbar"
          style={{ 
            width: "75%", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            padding: "0 10px"
          }}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ><span>REACT</span><span>75%</span></div>
      </div>
      </div>
    </>
  );
};
