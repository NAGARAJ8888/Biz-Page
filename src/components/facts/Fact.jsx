import React from 'react'

export const Fact = () => {
  return (
    <>
    <div className="text-center">
      <h2 className="fw-bold pt-5 pb-3 heading-with-underline">FACTS</h2>
      <p className="pb-5 w-75 mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati incidunt omnis provident id
      </p>
    </div>
  
    <div className="container">
      <div className="row justify-content-center text-center g-4">
        <div className="col-md-3 col-6">
          <div>
            <span style={{ fontSize: "50px", fontWeight: "bold", color: "rgb(36, 192, 57)" }}>432</span>
            <p>Clients</p>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div>
            <span style={{ fontSize: "50px", fontWeight: "bold", color: "rgb(36, 192, 57)" }}>480</span>
            <p>Projects</p>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div>
            <span style={{ fontSize: "50px", fontWeight: "bold", color: "rgb(36, 192, 57)" }}>3241</span>
            <p className="text-nowrap">Hours of Support</p>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div>
            <span style={{ fontSize: "50px", fontWeight: "bold", color: "rgb(36, 192, 57)" }}>91</span>
            <p>Clients</p>
          </div>
        </div>
      </div>
    </div>
    <img src="/img/facts-img.png" alt="img" className="mx-auto d-block mt-5 img-fluid" />
  </>
  
  )
}