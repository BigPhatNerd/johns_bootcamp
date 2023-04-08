// forecast is your "parameter". This is what you pass to your
// formatTemperaturMessage() function. 
let forecast = {
  currentTemperature: 36,
  highTemperature: 44,
  lowTemperature: 32,
};

function formatTemperatureMessage(forecast) {
// Below the result variable is using a "template literal" which surrounds the
// string with `` and uses ${variableName} to insert variable    
  const result =  `It is currently ${forecast.currentTemperature} with a high of ${forecast.highTemperature} and a low of ${forecast.lowTemperature}.`

  //The same result variable can be used like this:
  const resultWrittenDifferently = 'It is currently ' + forecast.currentTemperature + ' with a high of ' + forecast.highTemperature + ' and a low of ' + forecast.lowTemperature + '.

  // We are console.logging the variable so you will see what is being returned
  console.log({ result, resultWrittenDifferently });

  // Here we RETURNING the result variable. This is what will be returned when
  // you call the function 
  return result
}

// This is where you actually call the function and pass the forecast object as
// the parameter. 
// You can write all the functions you want but if you don't
// actually call the function, nothing will happen
formatTemperatureMessage(forecast);


// You asked if you could put the variable inside the function:
// When you create a function you want it to be as versatile as possible, that
// is why parameters are important instead of putting the variables INSIDE the
// function
// Example:
const johnsName = 'John';
const wilsonsName = 'Wilson';

function sayHello(name){
    console.log('Hello ' + name)
}

// You don't necessarily have to pass a variable to the function, you can pass
// a string directly
sayHello(johnsName);
sayHello(wilsonsName)
sayHello('Bob the Builder');