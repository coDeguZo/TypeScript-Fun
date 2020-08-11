// Arrays in Typescript

// The variable will point to an array of strings
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

// Annotate variables that will be arrays such as :
const wrongExampleArray = []; //This points to an any[].  No good.
const rightExampleArray: string[] = [];

const dates = [new Date(), new Date()];

// Complex Array.  How to Annotate:
const carsByMake: (string | number)[][] = [['F150', 'Camry', 'Camero', 5]];
// We are basically saying what the arrays contents will be. i.e array of array
const workingComplexArray: string[][] = [];

// 1) Typescipt can infer when extracting elements from an array.
const car = carMakers[0];
const myCar = carMakers.pop();

// 2) TS can prevent us from adding incompatible values to the array
// carMakers.push(100);
// TS will give us an error with the above code!

// 3) We can get help with 'map', forEach, 'reduce' functions
carMakers.map((car: string | number): string | number => {
  return car;
});

// 4)Flexible - arrays can still contain multiple different types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push(new Date());
// We will get an error with a new value that is not a Date or string.
// importantDates.push(100);

// IMPORTANT!!!
// We will use typed arrays when we need to represent a collection of
// records with some arbitrary sort order
