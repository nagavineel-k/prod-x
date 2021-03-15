const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Home Page executed....');
    res.send('<h3>Home Page</h3>');
});

module.exports = router;