// The goal of this file is to introduce me to different types that properties or functions refer to.
// Primitive Type: Numbers, boolean, strings, symbols, void, undefined, null
// Object Types: functions, arrays, classes, objects

// Hover over today and you see that today refers to the type Date
const today = new Date();
today.getMonth();

const person = {
  age: 20,
};

class Color {
  hello() {
    console.log('Hello there');
  }
}

const red = new Color();

// Age refers to number type, which is a primitative Type
let age = 50;
