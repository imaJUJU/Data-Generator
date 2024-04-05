const express = require('express');
const generateRandomData = require('./dataGenerator');

const app = express();
const port = 4000;
const axios = require('axios');


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
        {id: 19, name: 'Kegalle'},
        {id: 20, name: 'Kilinochchi'},
        {id: 21, name: 'Monaragala'},
        {id: 22, name: 'Anuradhapura'},
        {id: 23, name: 'Polonnaruwa'},
        {id: 24, name: 'Badulla'},
        {id: 25, name: 'Ratnapura'},
    ]
    let weatherData = new Array()

    for (const district of districts) {
        let obj = { 
            districtId: district.id, 
            districtName: district.name,
            ...generateRandomData()
        }
        weatherData.push(obj);
    }
  console.log(weatherData);

  axios.post('http://13.228.225.19:3030/saveData', weatherData)
.then(response => {
    console.log('Response:', response.data);
})
.catch(error => {
    console.error('Error:', error);
});
}


const interval = setInterval(
    generateDistrictData, 1 * 60 * 1000); 


app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});


process.on('SIGINT', () => {
  clearInterval(interval);
  process.exit();
});
