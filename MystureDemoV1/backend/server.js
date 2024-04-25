const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware
const routes = require('./route/routes');

const app = express();
// Middleware
app.use(express.json());
app.use(cors()); // Use cors middleware to enable CORS

// Connect to MongoDB
mongoose.connect('mongodb+srv://aadarshtomar5:Aadarsh123@cluster0.xw1i42n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));

// Use routes
app.use('/api', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
