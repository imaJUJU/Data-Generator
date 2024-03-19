// server.js

const express = require('express');
const generateRandomData = require('./dataGenerator');

const app = express();
const port = process.env.PORT || 3000;

// Function to generate random data every 5 minutes
function generateDistrictData() {
    let districts = [
        {id: 1, name: 'Colombo'},
        {id: 2, name: 'Kandy'},
        {id: 3, name: 'Gampaha'},
        {id: 4, name: 'Matale'},
        {id: 5, name: 'Kalutara'},
        {id: 6, name: 'Nuwara Eliya'},
        {id: 7, name: 'Galle'},
        {id: 8, name: 'Matara'},
        {id: 9, name: 'Hambantota'},
        {id: 10, name: 'Jaffna'},
        {id: 11, name: 'Mannar'},
        {id: 12, name: 'Vavuniya'},
        {id: 13, name: 'Mullaitivu'},
        {id: 14, name: 'Batticaloa'},
        {id: 15, name: 'Ampara'},
        {id: 16, name: 'Trincomalee'},
        {id: 17, name: 'Kurunegala'},
        {id: 18, name: 'Puttalam'},
        {id: 19, name: 'Gampaha'},
        {id: 20, name: 'Gampaha'},
        {id: 21, name: 'Gampaha'},
        {id: 22, name: 'Gampaha'},
        {id: 23, name: 'Gampaha'},
        {id: 24, name: 'Gampaha'},
        {id: 25, name: 'Gampaha'},
    ]
    let weatherData = new Array()

    for (const district of districts) {
        let obj = { 
            districtId: district.id, 
            districtName: district.name,
            ...generateRandomData()
        }
        weatherData.push(obj)
    }
  console.log(weatherData);
 
}


// Set up interval to generate and send data every 5 minutes
const interval = setInterval(
    generateDistrictData, 1 * 60 * 1000); // 5 minutes in milliseconds


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Handle process termination (optional)
process.on('SIGINT', () => {
  clearInterval(interval); // Stop the interval timer
  process.exit(); // Exit the process
});
