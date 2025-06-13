import React from "react";

export const Action = () => {
  return (
    <div id="action">
      <div className="text-center pb-4 " style={{background: "linear-gradient(to bottom, #4ca2cd, #67B26F)"}}>
        <h2 className="fw-bold pt-5 pb-3 text-white">Call To Action</h2>
        <p className="pb-4 w-75 mx-auto text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          incidunt omnis provident id expedita a esse voluptatum magnam nobis,
          voluptates dolorum libero quibusdam aliquid repudiandae, nisi aliquam
          cupiditate suscipit pariatur optio ipsum?
        </p>
        <button type="button" className="btn btn-outline-light border-2 rounded-5 fs-5" style={{padding:"10px 80px"}}>Primary</button>
      </div>
    </div>
  );
};
