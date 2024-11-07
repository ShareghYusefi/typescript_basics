// What is an Single Page Application (SPA)?
// An application with one HTML page, updated dynamically without refreshing the page.
// Angular is a SPA framework.
// What is typescript?
// TypeScript is a superset of JavaScript, used to build large applications with data types.
// TypeScript is transpiled to JavaScript.
// We can install the typescript transpiler using npm.
// npm install -g typescript
// How can we declare variables in TypeScript?
// var, let, const
// var is global scoped.
var x = 10;
if (x == 10) {
    // redefine the variable x globally
    var x = 20;
}
console.log(x); // 20
// let is block scoped.
var y = 10;
if (y == 10) {
    // try to redefine the variable y locally
    var y_1 = 20;
}
console.log(y); // 10
// const is block scoped.
// we cannot reassign a value to a const variable.
var z = 10;
// z = 20; // error
// "Let" is preferred over "var" as best practice.
