const add = (a: number, b: number): number => {
  return a + b;
};

// The return value for 'subtract' is 'void' b/c we didn't specify a return type
// and TS will not catch the error we made by omitting the return value in the
// body of the function
const subtract = (a: number, b: number) => {
  a - b;
};

const subtract2 = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

// same syntax for anonomous functions
const multiply = function(a: number, b: number): number {
  return a * b;
};

// The 'void' return type is for a function that does not return a value
const logger = (message: string): void => {
  console.log(message);
  // A function with a 'void' return type can also return 'null' and 'undefined'
};

const throwError = (message: string): never => {
  throw new Error(message);
  // anytime you throw an error, the function will technically not return anything
  // so use the 'never' return value
};

const throwErrorAlternative = (message: string): string => {
  if (!message) throw new Error(message);
  return message;
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// Destructuring with annotations
// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

// replace the variable 'forecast' with the destructuring statement
// The destructuring and annotation portions are always separate statements
// separated by the colon :
const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
