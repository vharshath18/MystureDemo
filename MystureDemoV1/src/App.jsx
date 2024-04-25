import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import AboutPage from './components/about'
import BookingPage from './components/book'
import HomePage from './components/home'
import TravelPackagesPage from './components/packages'
import RegisterPage from './components/register'
import LoginPage from './components/login'
import UserProfile from './components/dashboard'
import BookingPackage from './components/booking';
import ManageTrips from './components/manageTrips';
import MC from './components/MCP';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />      <Route path="/home" element={<HomePage />} />

          {/* Specify the Home component */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/bookPackage" element={<BookingPackage />} />
          <Route path="/trips" element={<ManageTrips />} />
          <Route path="/uploadImage/:tripId" element={<MC />} />
          <Route path="/packages" element={<TravelPackagesPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<UserProfile />} />



          {/* Add more routes for other pages if needed */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
