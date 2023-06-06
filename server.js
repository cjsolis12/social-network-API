const express = require('express');
const db = require('./config/connection')

const app = express();
const port = 3001;

const dbName = 'socialNetworkDB'

app.listen(port, () =>{
    console.log(`API server running on ${port}`)
})