const express = require('express');
const app = express();
const port = process.env.port || '3000';
const web = require('./routes/web'); // Updated to remove destructuring

// Set Template Engine
app.set('view engine', 'ejs');

// Load Routes
app.use('/', web);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});