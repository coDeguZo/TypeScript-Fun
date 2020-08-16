// Practice TypeScript

// Adding TS Annotation to variable
const number: number = 8;
const string: string = 'number';
const boolean: boolean = true;
const nothing: null = null;
const notDefined: undefined = undefined;

// TS Inference
const numberIs = 8;
const stringIs = 'number';
const booleanIs = true;
const nothingIs = null;
const notDefinedIs = undefined;

// Functions
const newFunction = (a: number, b: number) => {
  return a + b;
};

let array: string[] = ['yolo', 'whazzup', 'rad', 'lol'];
let array2: Array<string> = ['yolo', 'whazzup', 'rad', 'lol'];
