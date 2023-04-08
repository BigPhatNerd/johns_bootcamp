let forecast = {
  currentTemperature: 36,
  highTemperature: 44,
  lowTemperature: 32,
};

function formatTemperatureMessage(forecast) {
  const result =  `It is currently ${forecast.currentTemperature} with a high of ${forecast.highTemperature} and a low of ${forecast.lowTemperature}.`

  console.log({ result });

  return result
}

formatTemperatureMessage(forecast);