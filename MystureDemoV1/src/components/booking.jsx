import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, doc,getDoc,addDoc, collection } from 'firebase/firestore';
import firebaseConfig from '../public/firebaseConfig';
import checkAuthState from '../public/authState'; // Import the function to check authentication state
import './dashboard.css';

function BookingPackage() {
    const [hotelOptions, setHotelOptions] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("destination1");
    const [userData, setUserData] = useState(null);
    const app = initializeApp(firebaseConfig); // Initialize Firebase app
    const auth = getAuth(app);

    useEffect(() => {
        const app = initializeApp(firebaseConfig); // Initialize Firebase app
        const auth = getAuth(app); // Get Firebase auth instance

        // Check authentication state
        checkAuthState(auth, (user) => {
            if (!user) {
                // Redirect to login if user is not authenticated
                window.location.href = '/login';
            } else {
                // Fetch user data from Firestore
                const db = getFirestore(app);
                const userDoc = doc(db, 'users', user.uid);
                getDoc(userDoc)
                    .then((userSnapshot) => {
                        if (userSnapshot.exists()) {
                            setUserData(userSnapshot.data());
                        }
                    })
                    .catch((error) => {
                        console.error('Error fetching user data:', error.message);
                    });
            }
        });

        updateHotelOptions();
    }, [selectedLocation]);

    const updateHotelOptions = () => {
        let options = [];
        if (selectedLocation === "destination1") {
            options = [
                { value: 'Taj Palace', name: 'Taj Palace' },
                { value: 'Radison Blue', name: 'Radison Blue' },
                { value: 'The Liberty', name: 'The Liberty' }
            ];
        } else if (selectedLocation === "destination2") {
            options = [
                { value: 'Purani Haveli', name: 'Purani Haveli' },
                { value: 'Hotel Yash In', name: 'Hotel Yash In' },
                { value: 'Delhi Nivas', name: 'Delhi Nivas' }
            ];
        }
        setHotelOptions(options);
    };

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    const handleLogout = async () => {
        try { // Get Firebase auth instance
            await signOut(auth); // Sign out the user using Firebase auth
            window.location.href = '/login'; // Redirect to login page after logout
        } catch (error) {
            console.error('Logout error:', error.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        location: "destination1", // Default value
        guests: "",
        arrivals: "",
        leaving: "",
        stay: "", // Default value
        payment: "razorpay" // Default value
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            const db = getFirestore(app); // Assuming `app` is your Firebase app instance
            const bookingRef = collection(db, 'bookings');
            await addDoc(bookingRef, {
                userEmail: auth.currentUser.email,
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                address: formData.get('address'),
                location: selectedLocation,
                guests: formData.get('guests'),
                arrivalDate: formData.get('arrivals'),
                leavingDate: formData.get('leaving'),
                selectedHotel: formData.get('stay'),
                paymentMethod: formData.get('payment')
            });
            console.log('Booking submitted successfully!');
            history.push("/trips");
        } catch (error) {
            console.error('Error submitting booking:', error.message);
        }
    };

    return (
        <>
            <header>
                <section className="header">
                    <Link to="/" className="logo">Mysture: Navigating the Unexplored</Link>
                    <nav className="navbar">
                        <Link to="/bookPackage" id="book-btn">Book Packages</Link>
                        <Link to="/trips" id="feedback-btn">Manage Plans</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </nav>
                </section>
            </header>

            <main>
                <section className="booking">
                    <h1 className="heading-title">Book Your Trip</h1>

                    <form onSubmit={handleSubmit} className="book-form">
                        <div className="flex">
                            <div className="inputBox">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="phone">Phone:</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="address">Address:</label>
                                <input
                                    type="text"
                                    id="address"
                                    placeholder="Enter your address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="location">Where to:</label>
                                <select
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                >
                                    <option value="destination1">Mumbai</option>
                                    <option value="destination2">Delhi</option>
                                </select>
                            </div>

                            <div className="inputBox">
                                <label htmlFor="guests">How many:</label>
                                <input
                                    type="number"
                                    id="guests"
                                    placeholder="Number of guests"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="arrivals">Arrival Date:</label>
                                <input
                                    type="date"
                                    id="arrivals"
                                    name="arrivals"
                                    value={formData.arrivals}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="inputBox">
                                <label htmlFor="leaving">Leaving Date:</label>
                                <input
                                    type="date"
                                    id="leaving"
                                    name="leaving"
                                    value={formData.leaving}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="inputBox">
                                <label htmlFor="stay">Select Hotel To Stay:</label>
                                <select
                                    id="stay"
                                    name="stay"
                                    value={formData.stay}
                                    onChange={handleChange}
                                >
                                    {hotelOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="inputBox">
                                <label htmlFor="payment">Payment Method:</label>
                                <select
                                    id="payment"
                                    name="payment"
                                    value={formData.payment}
                                    onChange={handleChange}
                                >
                                    <option value="razorpay">Razorpay</option>
                                </select>
                            </div>
                        </div>

                        <input type="submit" value="Submit" className="btn" name="send" />
                    </form>
                </section>
            </main>

            <footer>
                <section className="footer">
                    <div className="box-container">
                        {/* Footer boxes... */}
                    </div>

                    <div className="credit">Created by <span>Team Mysture</span> | All rights reserved!</div>
                </section>
            </footer>
        </>
    );
}

export default BookingPackage;
