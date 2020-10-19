const express = require('express');
const app = express();
const router = require('./routes/router');
const path = require('path');

// Setting routes
app.use('/', router);

app.use(express.static(path.join(__dirname, 'public')));

// set the view engine to ejs
app.set('view engine', 'ejs');

// Server listener
app.listen(3000, () => {
    console.log('The server is running');
})

