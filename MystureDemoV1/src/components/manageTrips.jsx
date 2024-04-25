import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import firebaseConfig from '../public/firebaseConfig';
import "./mt.css";

function ManageTrips() {
    const [userTrips, setUserTrips] = useState([]);
    const app = initializeApp(firebaseConfig); // Initialize Firebase app
    const auth = getAuth(app);

    useEffect(() => {
        const fetchUserTrips = async () => {
            try {
                const db = getFirestore(app);
                const user = auth.currentUser;
                if (user) {
                    const tripsRef = collection(db, 'bookings');
                    const q = query(tripsRef, where('userEmail', '==', user.email));
                    const querySnapshot = await getDocs(q);
                    const trips = [];
                    querySnapshot.forEach((doc) => {
                        trips.push({ id: doc.id, ...doc.data() });
                    });
                    setUserTrips(trips);
                } else {
                    console.log('User not logged in');
                }
            } catch (error) {
                console.error('Error fetching user trips:', error.message);
            }
        };

        fetchUserTrips();
    }, [app, auth]);

    return (
        <div className="container">
            <header>
                <h1>Manage Trips</h1>
                <nav>
                    <Link to="/bookPackage">Book New Trip</Link>
                    <Link to="/trips">Manage Plans</Link>
                    <Link to="/logout">Logout</Link>
                </nav>
            </header>
            <main>
                <section className="trips-list">
                    <h2>Your Trips</h2>
                    <ul>
                        {userTrips.map(trip => (
                            <li key={trip.id}>
                                <a href={`/uploadImage/${trip.id}`}>
                                    <div>
                                        <p>Name: {trip.name}</p>
                                        <p>Email: {trip.email}</p>
                                        <p>Phone: {trip.phone}</p>
                                        <p>Address: {trip.address}</p>
                                        <p>Location: {trip.location}</p>
                                        <p>Guests: {trip.guests}</p>
                                        <p>Arrival Date: {trip.arrivalDate}</p>
                                        <p>Leaving Date: {trip.leavingDate}</p>
                                        <p>Hotel: {trip.selectedHotel}</p>
                                        <p>Payment Method: {trip.paymentMethod}</p>
                                    </div>
                                </a>
                            </li>
                        ))}

                    </ul>
                </section>
            </main>
            <footer>
                <p>Created by Team Mysture | All rights reserved!</p>
            </footer>
        </div>
    );
}

export default ManageTrips;
