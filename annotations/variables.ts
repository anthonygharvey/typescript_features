let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in Objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
// This function doesn't return anything, so the function annotation has void as
// the expected return value
// ': (i: number) => void' is the annotation (what we're telling TS the type of value
// we're assigning to logNumber)
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// -----------------------------------

// When to use Annotations

// 1) Functions that returns  the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}
// coordinates is type 'any' b/c JSON.parse returns a boolean, number, string, object, etc...
// depending on the string that's passed to it.  TS has no way to know what will be passed to it,
// so it makes it the 'any' type

const coordinates2: { x: number; y: number } = JSON.parse(json);
// coordinates2 will be an object type with the x and y properties of type number

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
// let foundWord = false

words.forEach(word => {
  if (word === 'green') foundWord = true;
});

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
// let numberAboveZero = false;
let numberAboveZero: boolean | number = false;

numbers.forEach(number => {
  if (number > 0) numberAboveZero = number;
});
