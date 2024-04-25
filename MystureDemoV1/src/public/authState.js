import { initializeApp } from 'firebase/app';
import { onAuthStateChanged } from 'firebase/auth';
import firebaseConfig from '../public/firebaseConfig';

const checkAuthState = (auth, callback) => {
    const app = initializeApp(firebaseConfig); // Initialize Firebase app

    onAuthStateChanged(auth, (user) => {
        callback(user);
    });
};

export default checkAuthState;