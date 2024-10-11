// api/products.js
export default function handler(req, res) {
    // Handle CORS for preflight requests
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.status(200).end();
        return;
    }

    // Set CORS header for actual requests
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Respond with updated product data
    res.status(200).json([
        { id: 1, name: 'Tshirt', price: 1000 },
        { id: 2, name: 'Top', price: 2000 },
    ]);
}
