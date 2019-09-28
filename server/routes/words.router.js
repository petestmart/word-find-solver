const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/dictionary', (req, res) => {
    res.send(dictionary)
}) // end router.get/dictionary

