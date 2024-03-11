const express = require('express');
const cors = require('cors')
const { getPublicToken } = require('../services/aps.js');

let router = express.Router();
router.use(cors())
router.get('/api/auth/token', async function (req, res, next) {
    try {
        res.json(await getPublicToken());
    } catch (err) {
        next(err);
    }
});

module.exports = router;