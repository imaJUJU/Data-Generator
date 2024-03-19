function generateRandomData() {
    
    const temperature = Math.random() * (40 - 10) + 10; 
    const humidity = Math.random() * (100 - 0) + 0; 
    const airPressure = Math.random() * (1100 - 900) + 900; 
  
    // Return an object containing the generated data
    return {
      temperature: temperature.toFixed(2), 
      humidity: humidity.toFixed(2), 
      airPressure: airPressure.toFixed(2) 
    };
  }
  
 
  module.exports = generateRandomData;
  