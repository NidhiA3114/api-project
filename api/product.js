// api/products.js
export default function handler(req, res) {
    // Allow preflight requests for CORS (OPTIONS method)
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.status(200).end();  // End the request here
        return;
    }

    // Set the CORS headers for GET requests
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Respond with the product data for GET requests
    res.status(200).json([
        { id: 1, name: 'Tshirt', price: 1000 },
        { id: 2, name: 'Top', price: 2000},
    ]);
}
