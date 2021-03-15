const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log("Add Product page executed....");
    setTimeout(() => {
        res.send('<form action="/product" method="POST"><input type="text" name="productTitle" /><button type="submit">Add Product</button></form>');
    }, 1000);
})

router.post('/product', (req, res, next) => {
    console.log("Product page executed....");
    console.log(req.body);
    res.redirect('/');
})

module.exports = router