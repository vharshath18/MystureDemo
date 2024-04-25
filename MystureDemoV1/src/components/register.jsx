import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import firebaseConfig from '../public/firebaseConfig';

function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phone: '',
        occupation: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        try {
            // Initialize the Firebase app with the config object
            const firebaseApp = initializeApp(firebaseConfig);

            // Get the Auth and Firestore instances from the initialized Firebase app
            const auth = getAuth(firebaseApp);
            const firestore = getFirestore(firebaseApp);

            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

            // Get user's unique ID from Firebase Authentication
            const userId = userCredential.user.uid;

            // Save user data to Firestore
            await setDoc(doc(collection(firestore, 'users'), userId), {
                username: formData.username,
                email: formData.email,
                phone: formData.phone,
                occupation: formData.occupation,
            });

            // Display success message
            setSuccessMessage('Registration successful! Redirecting to login page...');

            // Redirect to login page after a brief delay
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } catch (error) {
            console.error('Register error:', error.message);
            // Handle error here
        }
    };

    return (
        <>
            <header className="header">
                {/* Header content */}
            </header>

            <div className="register">
                <div className="form-wrapper">
                    <h2>Sign Up</h2>
                    {successMessage && (
                        <div className="alert success">
                            <span className="close" onClick={() => setSuccessMessage('')}>×</span>
                            {successMessage}
                        </div>
                    )}
                    <form id="signUpForm" className="form" onSubmit={handleSubmitRegister}>
                        <input type="text" id="username" name="username" placeholder="Name" 
                            value={formData.username} onChange={handleChange} required />
                        <input type="email" id="email" name="email" placeholder="Email" 
                            value={formData.email} onChange={handleChange} required />
                        <input type="tel" id="phone" name="phone" placeholder="Phone" 
                            value={formData.phone} onChange={handleChange} required />
                        <select id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} required>
                            <option value="" disabled>Select Occupation</option>
                            <option value="govt">Government Service</option>
                            <option value="private">Private Service</option>
                            <option value="student">Student</option>
                            <option value="unemployed">Unemployed</option>
                        </select>
                        <input type="password" id="password" name="password" placeholder="New Password" 
                            value={formData.password} onChange={handleChange} required />
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required />
                        <div className="g-recaptcha" data-sitekey="6LcJusQpAAAAAPhS9nWNxRhl_8RRSCp9eKuuTWUg"></div>
                        <button type="submit" className="btn">Sign Up</button>
                    </form>
                    
                </div>
            </div>

            <footer className="footer">
                {/* Footer content */}
            </footer>
        </>
    );
}

export default RegisterPage;
