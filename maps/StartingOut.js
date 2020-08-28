// First TS Project: Web App Random Generator
// Using TS Effectively
// User and Company will have properties


// I will be using the Parcel Bundler to run TS 
// code in the browser:
// npm install -g parcel-bundler

// Parcel Bundler
// - Will see the index.ts file and compile to JS
//   then replace this script tag

// Coventional Wisdom
// - Capitolize any file that we are going
//   export.
// - index.ts will import not be exported
//   so will remain lowercase

// Faker NPM
// - Will be using this npm to generate name,
//   company, and address details.
// - We will need to install Type deifinition
//   file.
// - Some npm files have the Type definition 
//   file like axios. 
// - Typed Naming Scheme: @types/{library name}
// - Comes from Definitely Typed
// - npm install @types/faker

// Exporting Files
// - Whenever we use Export by itself, see User.ts,
//   you have to place curlies in imported filed
//   see index.ts
// - This is a way to export multiple things from file.
// - Convention in TypeScript is tp never use export 
//   'default' statements.  Helps with not worrying about
//   curly braces.

// Google Maps API Usuage
// - Video 58 talks about how to get key