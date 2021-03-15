const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/add-product', (req, res, next) => {
    console.log('Add-Product page executed....');
    setTimeout(() => {
        res.send('<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>')
    }, 1000);
});

app.use('/product', (req, res, next) => {
    console.log('Product page executed....');
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('Home Page executed....');
    res.send('<h3>Home Page</h3>');
})

app.listen(3000);