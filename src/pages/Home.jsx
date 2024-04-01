import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div id="home-page">
      <div id="blue-page">
        <p id="home-heading">Nacto Care</p>
        <p id="home-tagline">
          Elevating Indian Nursing and Revolutionizing Home Care through Nacto
          Care
        </p>
        <p id="small-tagline">Bring care to your own home</p>
        <button id="book-nurse-btn">Book a Nurse</button>
        <div id="stats">
          <div className="stat-detail">
            <p className="stat-detail-heading">100k+</p>
            <p className="stat-detail-desc">Total Patients</p>
          </div>
          <div className="stat-detail">
            <p className="stat-detail-heading">15k+</p>
            <p className="stat-detail-desc">Registered Nurses</p>
          </div>
          <div className="stat-detail">
            <p className="stat-detail-heading">20+</p>
            <p className="stat-detail-desc">Nacto Cities</p>
          </div>
        </div>
      </div>
      <div id="green-page">
        <div id="nurse-box">
          <div id="nurse-box-img">
            <img src="./nurse.png" id='nurse-img'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
