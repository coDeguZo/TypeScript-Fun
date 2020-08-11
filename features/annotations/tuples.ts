// TS: Tuples

// Array-Like structure where each element
// represents some property of a record
// Tuples are in the form of arrays
// Tuples have a fixed order.

const drink = {
  color: 'brown',
  carbbonated: true,
  sugar: 40,
};

// Tuple: Adding an annotation into an array makes the valued array a tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];
// Code below wont work because of annotation.
// pepsi[0] = 4;
// pepsi[2] = 'brown';

// Type Alias
// We can reuse anywhere we use a type
type Drink = [string, boolean, number];

const coke: Drink = ['Black', true, 40];
const sprite: Drink = ['clear', true, 56];

// Tuples are not used very often!!
