const express = require('express');
const cors = require('cors')
const { getPublicToken } = require('../services/aps.js');

let router = express.Router();
router.use(cors({
    origin: '*',
    credentials: true, // Enable credentials (cookies, Authorization headers, etc.)
}));

router.get('/api/auth/token', async function (req, res, next) {
    try {
        const publicToken = await getPublicToken();
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
        res.json(publicToken);
    } catch (err) {
        next(err);
    }
});

module.exports = router;