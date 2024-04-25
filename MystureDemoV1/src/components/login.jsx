import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import the signInWithEmailAndPassword function
import { getAuth } from 'firebase/auth'; // Import the getAuth function from firebase/auth
import firebaseConfig from '../public/firebaseConfig';

function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        try {
            // Initialize the Firebase app with the config object
            const firebaseApp = initializeApp(firebaseConfig);

            // Get the Auth and Firestore instances from the initialized Firebase app
            const auth = getAuth(firebaseApp);

            // Sign in user with email and password
            await signInWithEmailAndPassword(auth, formData.email, formData.password);

            // Navigate to dashboard after successful login
            navigate('/dashboard');
        } catch (error) {
            console.error('Login error:', error.message);
            setErrorMessage(error.message);
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

            <div className="login">
                <div className="form-wrapper">
                    <h2>Login</h2>
                    
                    <form id="signInForm" className="form" onSubmit={handleSubmitLogin}>
                        <input type="email" id="emailAddress" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                        <input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                        <div className="g-recaptcha" data-sitekey="6LcJusQpAAAAAPhS9nWNxRhl_8RRSCp9eKuuTWUg"></div><br/>
                        <button type="submit" className="btn">Sign In</button>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                </div>
            </div>

            <footer className="footer">
                <div className="box-container">
                    {/* Footer boxes */}
                </div>
                <div className="credit"> created by <span>Team Mysture</span> | all rights reserved! </div>
            </footer>
        </>
    );
}

export default LoginPage;
