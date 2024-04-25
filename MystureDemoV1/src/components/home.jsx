import React from 'react';
import './styles.css'
import { FaUser } from 'react-icons/fa'; // Import icons from react-icons

import img1 from '../assets/img/home-slide-1.jpg';
import icon1 from '../assets/img/icon-1.png';
import globeImg from '../assets/img/globe.jpg';
import ladakhImg from '../assets/img/ladakh.jpg';

function HomePage() {
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

            <section className="home">
                <div className="swiper home-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide slide" style={{background: `url(${img1}) no-repeat`}}>
                            <div className="content">
                                <span>explore, discover, travel</span>
                                <h3>travel around the India</h3>
                                <a href="/packages" className="btn">discover more</a>
                            </div>
                        </div>
                        {/* Repeat similar structure for other slides */}
                    </div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </section>

            <section className="services">
                <h1 className="heading-title"> our services</h1>
                <div className="box-container">
                    <div className="box">
                        <img src={icon1} alt=""/>
                        <h3>adventure</h3>
                    </div>
                    {/* Repeat similar structure for other service boxes */}
                </div>
            </section>

            <section className="home-about">
                <div className="image">
                    <img src={globeImg} alt=""/>
                </div>
                <div className="content">
                    <h3>about us</h3>
                    <p>Mysture: Navigating the Unexplored offers Traditional and Mystery Plans. Dynamic clues, ML-powered, lead to offbeat discoveries. Validate exploration with image verification.</p>
                    <a href="/about" className="btn">read more</a>
                </div>
            </section>

            <section className="home-packages">
                <h1 className="heading"> our packages </h1>
                <div className="box-container">
                    <div className="box">
                        <div className="image">
                            <img src={ladakhImg} alt=""/>
                        </div>
                        <div className="content">
                            <h3>Ladakh</h3>
                            <p>High-altitude desert, breathtaking landscapes, vibrant Buddhist culture, and adventurous trekking opportunities.</p>
                            <a href="/book" className="btn">book</a>
                        </div>
                    </div>
                    {/* Repeat similar structure for other package boxes */}
                </div>
                <div className="load-more"><a href="/packages" className="btn">load more</a></div>
            </section>

            <section className="home-offer">
                <div className="content">
                    <h3>upto 30% off</h3>
                    <p>Explore our website and seize the moment! Enjoy an exclusive 30% discount on all bookings. Time is ticking, so secure your trip now to avoid missing out on this fantastic offer. Book today and embark on your dream adventure at an unbeatable price!</p>
                    <a href="/book" className="btn">book now</a>
                </div>
            </section>

            <section className="footer">
                <div className="box-container">
                    {/* Footer boxes */}
                </div>
                <div className="credit"> created by <span>Team Mysture</span> | all rights reserved! </div>
            </section>
        </>
    );
}

export default HomePage;
