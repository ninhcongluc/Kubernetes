const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello Lee!");
})

app.get('/home', (req, res) => {
    res.send("Welcome!");
})

app.listen(port, () => {
    console.log(`NodeJS App listening on port ${port}`)
})