import React from 'react';
import { FaUserCircle, FaBars, FaAngleRight, FaPhone, FaEnvelope, FaMap, FaUser } from 'react-icons/fa'; // Import icons from react-icons
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'; // Import icons from react-icons
import packageImg from '../assets/img/package.jpg';
import mumbaiiImg from '../assets/img/mumbaii.jpg'
import mandirImg from '../assets/img/mandir2.jpg';
import kashmirImg from '../assets/img/kashmir.jpg';
import tajmahalImg from '../assets/img/tajmahal.jpg';
import lakshadweepImg from '../assets/img/lakshadweep.jpg';
import valleyofflowersImg from '../assets/img/valleyofflowers.jpg';
import humayuntombImg from '../assets/img/humayuntomb.jpg';
import lehImg from '../assets/img/leh.jpg';
import varanasiImg from '../assets/img/varansi.jpg';
import coorgfallsImg from '../assets/img/corgfalls.jpg';
import sikkimImg from '../assets/img/sikkim.jpg';
import jaipurImg from '../assets/img/jaipur.jpg';


function TravelPackagesPage() {
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
                <div id="menu-btn"><FaBars /></div>
            </header>

            <div className="heading" style={{background: `url(${packageImg}) no-repeat`}}>
                <h1>Packages</h1>
            </div>

            <section className="packages">
                <h1 className="heading-title">top destinations</h1>
                <div className="box-container">
                    {/* Ladakh */}
                    <div className="box">
                        <div className="image">
                            <img src={mumbaiiImg} alt=""/>
                        </div>
                        <div className="content">
                            <h3>Mumbai</h3>
                            <p>Mumbai, a bustling metropolis on India's west coast, is renowned for its vibrant culture, diverse population, and thriving economy.</p>
                            <a href="/book" className="btn">book now</a>
                        </div>
                    </div>

                    {/* Adventure & Tour */}
                    <div className="box">
                        <div className="image">
                            <img src={mandirImg} alt=""/>
                        </div>
                        <div className="content">
                            <h3>Adventure & Tour</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a href="/book" className="btn">book now</a>
                        </div>
                    </div>

                    {/* Kashmir */}
                    <div className="box">
                        <div className="image">
                            <img src={kashmirImg} alt=""/>
                        </div>
                        <div className="content">
                            <h3>Kashmir</h3>
                            <p>Paradise on Earth, majestic mountains, serene lakes, and rich cultural heritage.</p>
                            <a href="/book" className="btn">book now</a>
                        </div>
                    </div>

                    {/* Taj Mahal */}
                    <div className="box">
                        <div className="image">
                            <img src={tajmahalImg} alt=""/>
                        </div>
                        <div className="content">
                            <h3>Taj Mahal</h3>
                            <p>Iconic symbol of love, breathtaking architecture, and timeless beauty in marble.</p>
                            <a href="/book" className="btn">book now</a>
                        </div>
                    </div>

                    {/* Lakshadweep */}
                    <div className="box">
                        <div className="image">
                            <img src={lakshadweepImg} alt=""/>
                        </div>
                        <div className="content">
                            <h3>Lakshadweep</h3>
                            <p>Pristine coral islands, crystal-clear waters, and untouched natural beauty.</p>
                            <a href="/book" className="btn">book now</a>
                        </div>
                    </div>

                    {/* Valley of Flowers: Himanchal */}
                    <div className="box">
                        <div className="image">
                            <img src={valleyofflowersImg} alt=""/>
                        </div>
                        <div className="content">
                            <h3>Valley of Flowers: Himanchal</h3>
                            <p>Spectacular alpine meadows, vibrant blooms, and rare Himalayan flora sanctuary.</p>
                            <a href="/book" className="btn">book now</a>
                        </div>
                    </div>

                    {/* Humayun Tomb */}
                    <div className="box">
                        <div className="image">
                            <img src={humayuntombImg} alt=""/>
                        </div>
                        <div className="content">
                            <h3>Humayun Tomb</h3>
                            <p>Exquisite Mughal architecture, UNESCO World Heritage site, and serene garden mausoleum.</p>
                            <a href="/book" className="btn">book now</a>
                        </div>
                    </div>

                    {/* Leh */}
                    <div className="box">
                        <div className="image">
                            <img src={lehImg} alt=""/>
                        </div>
                        <div className="content">
                            <h3>Leh</h3>
                            <p>Himalayan gem, ancient monasteries, stunning landscapes, and vibrant Tibetan culture.</p>
                            <a href="/book" className="btn">book now</a>
                        </div>
                    </div>

                    {/* Varanasi */}
                    <div className="box">
                        <div className="image">
                            <img src={varanasiImg} alt=""/>
                        </div>
                        <div className="content">
                            <h3>Varanasi</h3>
                            <p>Spiritual hub on Ganges, ancient ghats, labyrinthine alleys, and vibrant cultural tapestry.</p>
                            <a href="/book" className="btn">book now</a>
                        </div>
                    </div>

                    {/* Coorg Falls:Karnatka */}
                    <div className="box">
                        <div className="image">
                            <img src={coorgfallsImg} alt=""/>
                        </div>
                        <div className="content">
                            <h3>Coorg Falls:Karnatka</h3>
                            <p>Cascading waterfalls nestled in Coorg's lush greenery, offering scenic tranquility.</p>
                            <a href="/book" className="btn">book now</a>
                        </div>
                    </div>

                    {/* Sikkim */}
                    <div className="box">
                        <div className="image">
                            <img src={sikkimImg} alt=""/>
                        </div>
                        <div className="content">
                            <h3>Sikkim</h3>
                            <p>Himalayan paradise, majestic peaks, vibrant culture, and pristine landscapes beckoning adventurers.</p>
                            <a href="/book" className="btn">book now</a>
                        </div>
                    </div>

                    {/* Jaipur */}
                    <div className="box">
                        <div className="image">
                            <img src={jaipurImg} alt=""/>
                        </div>
                        <div className="content">
                            <h3>Jaipur</h3>
                            <p>Pink City, majestic forts, vibrant bazaars, and rich Rajputana architecture.</p>
                            <a href="/book" className="btn">book now</a>
                        </div>
                    </div>
                </div>

                <div className="load-more"><span className="btn">load-more</span></div>
            </section>

            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>quick links</h3>
                        <a href="/home"><FaAngleRight /> Home</a>
                        <a href="/about"><FaAngleRight /> About</a>
                        <a href="/packages"><FaAngleRight /> Packages</a>
                        <a href="/book"><FaAngleRight /> Bookings</a>
                    </div>

                    <div className="box">
                        <h3>extra links</h3>
                        <a href="#"><FaAngleRight /> Ask Questions</a>
                        <a href="#"><FaAngleRight /> About Us</a>
                        <a href="#"><FaAngleRight /> Privacy Policy</a>
                        <a href="#"><FaAngleRight /> Terms of Use</a>
                    </div>

                    <div className="box">
                        <h3>contact info</h3>
                        <a href="#"><FaPhone /> +91 1234567890</a>
                        <a href="#"><FaPhone /> +111-222-3333</a>
                        <a href="#"><FaEnvelope /> mystrytravel@info.com</a>
                        <a href="#"><FaMap /> Gautam Buddh Nagar, India - 201310</a>
                    </div>

                    <div className="box">
                        <h3>follow us</h3>
                        <a href="#"><AiFillFacebook /> Facebook</a>
                        <a href="#"><AiOutlineTwitter /> Twitter</a>
                        <a href="#"><AiFillInstagram /> Instagram</a>
                        <a href="#"><AiFillLinkedin /> Linkedin</a>
                    </div>
                </div>

                <div className="credit"> created by <span>Team Mysture</span> | all rights reserved! </div>
            </section>
        </>
    );
}

export default TravelPackagesPage;
