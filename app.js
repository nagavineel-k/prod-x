const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    console.log('404 Error - Entered/Current route is not valid...')
    res.status(404).send('<h3>Page Not Found...</h3>')
})



app.listen(3000);