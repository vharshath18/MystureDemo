import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import firebaseConfig from '../public/firebaseConfig';
import checkAuthState from '../public/authState'; // Import the function to check authentication state
import './dashboard.css';


function UserProfile() {
    const [userData, setUserData] = useState(null);

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
                getDoc(userDoc).then((userSnapshot) => {
                    if (userSnapshot.exists()) {
                        setUserData(userSnapshot.data());
                    }
                }).catch((error) => {
                    console.error('Error fetching user data:', error.message);
                });
            }
        });
    }, []);

    const handleLogout = async () => {
        try {
            const app = initializeApp(firebaseConfig); // Initialize Firebase app
            const auth = getAuth(app); // Get Firebase auth instance
            await signOut(auth); // Sign out the user using Firebase auth
            window.location.href = '/login'; // Redirect to login page after logout
        } catch (error) {
            console.error('Logout error:', error.message);
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

            <div id="user-profile-content" className="content">
                {userData && (
                    <div>
                        <h2>User Profile</h2>
                        <p>Name: {userData.name}</p>
                        <p>Email: {userData.email}</p>
                        <p>Phone: {userData.phone}</p>
                        <p>Occupation: {userData.occupation}</p>
                    </div>
                )}
            </div>

            <footer>
                <section className="footer">
                    {/* Footer content */}
                </section>
            </footer>
        </>
    );
}

export default UserProfile;
