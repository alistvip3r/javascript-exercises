const convertToCelsius = function(temp) {
  const tempConverted = Number(temp);
  const tempInCelsius = (tempConverted - 32) * 5 / 9;
  return Math.round(tempInCelsius * 10) / 10;
};

const convertToFahrenheit = function() {
  
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
