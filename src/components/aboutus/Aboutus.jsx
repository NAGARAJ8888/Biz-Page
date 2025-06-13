import React from 'react'
import "./About.css";
export const Aboutus = () => {
  return (
    <div id='about'>
    <div className='text-center py-5'>
        <h2 className='fw-bold pt-5 pb-3 heading-with-underline' >ABOUT US</h2>
        <p className='pb-5 w-75 mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati incidunt omnis provident id expedita a esse voluptatum magnam nobis, voluptates dolorum libero quibusdam aliquid repudiandae, nisi aliquam cupiditate suscipit pariatur optio ipsum?</p>
    </div>
    <div className="card-group mx-auto gap-5 card-container pb-4" style={{width:"90%"}}>
  <div className="card w-75 mx-auto">
    <img src="/img/laptop2.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div className="card w-75 mx-auto">
    <img src="/img/laptop2.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div className="card w-75 mx-auto">
    <img src="/img/laptop2.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
</div>

    </div>
  )
}
