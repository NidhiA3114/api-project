// Import necessary modules
const express = require('express');
const cors = require('cors');

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Define the API route
app.get('/api/products', (req, res) => {
  console.log('API Route Accessed'); // Log when the route is accessed
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
  ];
  res.json(products);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
