// models/booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    guests: {
        type: Number,
        required: true
    },
    arrivals: {
        type: Date,
        required: true
    },
    leaving: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Booking', bookingSchema);
