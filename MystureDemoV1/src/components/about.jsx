import React from 'react';
import { FaMap, FaHandHoldingUsd, FaHeadset, FaUser  } from 'react-icons/fa'; // Import icons from react-icons
import roadTravelImg from '../assets/img/roadtravel.jpg';
import aboutTravelImg from '../assets/img/abouttravel.jpg';

function AboutPage() {
  return (
    <>
      <header className="header">
        <a href="/" className="logo">Mysture: Navigating the Unexplored</a>
        <nav className="navbar">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/packages">Packages</a>
          <a href="/book">Bookings</a>
          <a href="/register" className="fa fa-user-circle"> <FaUser/></a>
        </nav>
        <div id="menu-btn" className="fas fa-bars"></div>
      </header>
      
      <div className="heading" style={{background: `url(${roadTravelImg}) no-repeat`}}>
        <h1>about us</h1>
      </div>
      
      <section className="about">
        <div className="image">
          <img src={aboutTravelImg} alt="" />
        </div>
        <div className="content">
          <h3>why choose us?</h3>
          <p>"Mysture: Navigating the Unexplored" redefines travel with its innovative Mystery Plan. Offering both traditional and mystery options, users embark on journeys filled with surprises.</p>
          <p>Dynamic clues, powered by ML techniques like Neural Networks and NLP, create personalized adventures in real-time. Our image verification system ensures authenticity, rewarding users with credit points for exploring hidden gems.</p>
          <p>Mysture aims to transform travel into captivating, secure, and community-engaging experiences.</p>
          <div className="icons-container">
            <div className="icons">
              <FaMap />
              <span>top destinations</span>
            </div>
            <div className="icons">
              <FaHandHoldingUsd />
              <span>affordable price</span>
            </div>
            <div className="icons">
              <FaHeadset />
              <span>24/7 guide service</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="reviews">
        
      </section>
      
      <footer className="footer">
        <div className="box-container">
          {/* Footer boxes */}
        </div>
        <div className="credit"> created by <span>Team Mysture</span> | all rights reserved! </div>
      </footer>
    </>
  );
}

export default AboutPage;
