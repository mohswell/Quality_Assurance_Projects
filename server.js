const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');

const API_KEY = process.env.API_KEY;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const app = express();

app.use(cors()); // Enable CORS

app.get('/', async (_req, res) => {
    res.send('Hello World');
});

//news endpoint
app.get('/news', async (_req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${API_KEY}`);
        res.json(response.data.articles);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

//weather enpoint
app.get('/weather/:city', async (req, res) => {
    try {
        const city = req.params.city;
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`);
        //res.json(response.data);
        res.send(JSON.stringify(response.data, null, 2));
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(3000, () => {
    console.log("App is listening to port 3000");
});