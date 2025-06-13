import React from 'react'

export const Team = () => {
  return (
    <div id='team' style={{scrollMarginTop: "20px"}}>
    <div className="text-center">
      <h2 className="fw-bold pt-5 pb-3 heading-with-underline">TEAM</h2>
      <p className="pb-5 w-75 mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati incidunt omnis provident id
      </p>
    </div>
    <div className='d-flex justify-content-center gap-5 flex-wrap'>
    <img src="img/profile_photo.jpg" alt="pro_photo" className="img-fluid object-fit-cover"/>
    <img src="img/profile_photo.jpg" alt="pro_photo" className="img-fluid object-fit-cover"/>
    <img src="img/profile_photo.jpg" alt="pro_photo" className="img-fluid object-fit-cover"/>
    <img src="img/profile_photo.jpg" alt="pro_photo" className="img-fluid object-fit-cover"/>
    </div>
    </div>
  )
}
