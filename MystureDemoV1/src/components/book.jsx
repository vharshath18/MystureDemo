import React, { useState } from 'react';
import valleyofflowersImg from '../assets/img/valleyofflowers.jpg';
import { FaUser } from 'react-icons/fa'; // Import icons from react-icons

function BookingPage() {
    const [bookingData, setBookingData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        location: 'destination1', // Default location
        guests: '',
        arrivalDate: '',
        departureDate: ''
    });

    const handleChange = (e) => {
        setBookingData({
            ...bookingData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Booking inserted:', data);
                // Redirect or display success message
                window.location.href = 'https://razorpay.com';
            } else {
                console.error('Booking error:', response.statusText);
                // Handle error or display error message
            }
        } catch (error) {
            console.error('Booking error:', error);
            // Handle error or display error message
        }
    };

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

            <div className="heading" style={{backgroundImage: `url(${valleyofflowersImg})`, backgroundRepeat: 'no-repeat'}}>
                <h1>Bookings</h1>
            </div>

            <section className="booking">
                <h1 className="heading-title">book your trip</h1>

                <form onSubmit={handleSubmit} className="book-form">
                    <div className="flex">
                        <div className="inputBox">
                            <span>name :</span>
                            <input type="text" placeholder="enter your name" name="name" value={bookingData.name} onChange={handleChange} />
                        </div>
                        <div className="inputBox">
                            <span>email :</span>
                            <input type="email" placeholder="enter your email" name="email" value={bookingData.email} onChange={handleChange} />
                        </div>
                        <div className="inputBox">
                            <span>phone :</span>
                            <input type="tel" placeholder="enter your phone number" name="phone" value={bookingData.phone} onChange={handleChange} />
                        </div>
                        <div className="inputBox">
                            <span>address :</span>
                            <input type="text" placeholder="enter your address" name="address" value={bookingData.address} onChange={handleChange} />
                        </div>
                        <div className="inputBox">
                            <span>where to :</span>
                            <select name="location" value={bookingData.location} onChange={handleChange}>
                                <option value="destination1">Mumbai</option>
                                <option value="destination2">Birla Mandir</option>
                                <option value="destination3">Kashmir</option>
                                <option value="destination4">Taj Mahal</option>
                                <option value="destination5">Lakshadweep</option>
                                <option value="destination6">Valley of Flowers: Himachal</option>
                                <option value="destination7">Humayun Tomb</option>
                                <option value="destination8">Leh</option>
                                <option value="destination9">Varanasi</option>
                                <option value="destination10">Coorg Falls: Karnataka</option>
                                <option value="destination11">Sikkim</option>
                                <option value="destination12">Jaipur</option>
                            </select>
                        </div>
                        <div className="inputBox">
                            <span>how many :</span>
                            <input type="number" placeholder="number of guests" name="guests" value={bookingData.guests} onChange={handleChange} />
                        </div>
                        <div className="inputBox">
                            <span>Arrival Date :</span>
                            <input type="date" name="arrivalDate" value={bookingData.arrivalDate} onChange={handleChange} />
                        </div>
                        <div className="inputBox">
                            <span>Departure Date :</span>
                            <input type="date" name="departureDate" value={bookingData.departureDate} onChange={handleChange} />
                        </div>
                    </div>
                    {/* <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div> */}
                    <button type="submit" className="btn">Submit</button>
                </form>
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

export default BookingPage;
