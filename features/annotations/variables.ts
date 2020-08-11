// Tells Typescript that apples can only be assigned as a type number

// Type Annotations: We tell Typescript the type
// Ex: let apples: number = 5

// Type Inference: We let TypeScript guess the type

let apples = 5;
// Example:
let applesEx: number = 5;
// applesEx = 'dssd';

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in Objects
let now: Date = new Date();

// Array: Type Array that contains strings
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [5, 6, 7, 8];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}
let car: Car = new Car();

// Object Literal   Need a colon
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//  Function            Annotation
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// // When to use annotations
// // 1) Function that returns the 'any' type

// const json = '{"X": 10, "y": 20}';
// const coordinates = JSON.parse(json);
// console.log(coordinates);

// // Any:
// // A type, just as a string or bboolean are
// // Means TS has no idea what this is - can't check for correct property references
// // Avoid variables with 'any' at all costs

// // Ex:
// coordinates.vdfvfav;
// // No error message

// Fixing the above code:

const json = '{"X": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// Below Code wont work!
// coordinates.vdfvfav;

// 2) When we declare a variables on one line and iniatialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
// Better code:
// let foundWord: false

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable who type cannot be inferred correctly
let numbers = [-10, -1, 12];
// We use the pipe to say that the variable can be a boolean or number
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numbersAboveZero = numbers[i];
  }
}
