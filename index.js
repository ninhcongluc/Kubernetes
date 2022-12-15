const express = require('express');

const app = express();

const port = 8001;

app.get('/', (req, res) => {
    res.send("Hello Lee!");
})

app.listen(port, () => {
    console.log(`NodeJS App listening on port ${port}`)
})