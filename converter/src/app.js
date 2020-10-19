const express = require('express');
const app = express();
const router = require('./routes/router');

// Setting routes
app.use('/', router);

// set the view engine to ejs
app.set('view engine', 'ejs');

// Server listener
app.listen(3000, () => {
    console.log('The server is running');
})

