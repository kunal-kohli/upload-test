require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 9000;


app.get('/', (req, res) => {
    console.log('', process.env.PORT);
    res.send('WORKING');
});

app.get('/data', (req, res) => {
    console.log('', process.env.PORT);
    res.send('WORKING-fine');
});

app.get('/data-data', (req, res) => {
    console.log('', process.env.PORT);
    res.send('WORKING-fine');
});

app.listen(port, () => {
    console.log('WORKING');
});
