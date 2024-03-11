const express = require('express');
const { getPublicToken } = require('../services/aps.js');

let router = express.Router();

router.get('/api/auth/token', async function (req, res, next) {
    console.log("api token call")
    try {
        res.json(await getPublicToken());
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;