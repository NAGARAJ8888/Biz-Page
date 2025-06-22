import React from 'react';
import './Team.css';

export const Team = () => {
  const teamMembers = [
    { name: "Alice Johnson", img: "img/profile_photo.jpg" },
    { name: "Bob Smith", img: "img/profile_photo.jpg" },
    { name: "Clara Ray", img: "img/profile_photo.jpg" },
    { name: "David Lee", img: "img/profile_photo.jpg" }
  ];

  return (
    <div id='team' style={{ scrollMarginTop: "20px" }}>
      <div className="text-center">
        <h2 className="fw-bold pt-5 pb-3 heading-with-underline">TEAM</h2>
        <p className="pb-5 w-75 mx-auto">
          Meet our creative and dedicated professionals working to build innovative solutions.
        </p>
      </div>
      <div className='team-container d-flex justify-content-center gap-4 flex-wrap'>
        {teamMembers.map((member, index) => (
          <div className="team-card position-relative" key={index}>
            <img
              src={member.img}
              alt={member.name}
              className="img-fluid team-img rounded"
            />
            <div className="overlay">
              <div className="overlay-text">{member.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
