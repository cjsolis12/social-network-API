const express = require('express');
const dotenv = require('dotenv').config()
const db = require('./config/connection')
const routes = require ('./routes')

const app = express();
const port = process.env.PORT || 3000;

// const dbName = 'socialNetworkDB'

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);



db.once('open', () => {
    app.listen(port, () =>{
        console.log(`API server running on ${port}`)
    })
})
