// api/products.js
export default function handler(req, res) {
    // Set the CORS header to allow all origins
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Set other headers as needed (optional)
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Respond with the product data
    res.status(200).json([
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
    ]);
}
