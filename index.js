require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 9000;


app.get('/', (req, res) => {
    res.send('WORKING');
});

app.listen(port, () => {
    console.log('WORKING');
});
