import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, query, where, getDocs } from 'firebase/firestore';
import firebaseConfig from '../public/firebaseConfig';
import "./mt.css";

function MC() {
    const { tripId } = useParams();
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const app = initializeApp(firebaseConfig); // Initialize Firebase app
    const auth = getAuth(app);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleUpload = async () => {
        if (image) {
            try {
                const storage = getStorage(app);
                const imageRef = ref(storage, `images/${image.name}`);
                await uploadBytes(imageRef, image);

                // Get download URL for the uploaded image
                const downloadURL = await getDownloadURL(imageRef);
                setImageUrl(downloadURL);
                // Initialize Firebase
                const db = getFirestore(app); // Remove firebaseConfig argument from getFirestore
                const tripRef = doc(db, 'bookings', tripId);

                // Update the trip document with the image URL
                await updateDoc(tripRef, {
                    imageURL: downloadURL // Replace '' with the actual URL of the uploaded image
                });

                console.log('Image uploaded successfully!');
                // Add any further actions here, such as redirecting to a confirmation page
            } catch (error) {
                console.error('Error uploading image:', error.message);
            }
        } else {
            console.error('No image selected!');
        }
    };

    return (
        <>
            <header>
                <h1>Mystery Plan Concept</h1>
                <nav>
                    <Link to="/bookPackage">Book New Trip</Link>
                    <Link to="/trips">Manage Plans</Link>
                    <Link to="/logout">Logout</Link>
                </nav>
            </header>

            <main>
                <div>
                    <h1>Upload Image for Trip ID: {tripId}</h1>
                    <input type="file" onChange={handleImageChange} />
                    <button onClick={handleUpload}>Upload Image</button>
                </div>
            </main>

            <footer>
                <section className="footer">
                    {/* Your footer content */}
                </section>
            </footer>
        </>
    );
}

export default MC;
