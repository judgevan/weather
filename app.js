const { log } = require('console');
const express = require('express');
const https = require('https');

const app = express();

app.get('/', function(req, res) {

const url="https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=b09378f51e9e87bced870a62a4934328&unit=metric"

https.get(url, function(response) {
    console.log(response.statuCode);

    response.on('data', function(data){ 
        const weatherData = JSON.parse(data)
        const temp = weatherData.main.temp
        console.log(temp);
});

res.send("serever is up and running")
});

app.listen(202, function(req, res) {
    console.log('server is running on port 202');
})