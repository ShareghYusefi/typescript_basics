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
// Data types in TypeScript
// We can define a variables data type using a colon.
// Built-in data types
// number, string, boolean, void, null, undefined
var customMessage = "Hello, World!";
var num = 10;
var isValid = true;
var nullValue = null;
var undefinedValue = undefined;
function greet() {
    console.log("Hello, World!");
    // does not return anything, so return type is void
    return;
}
// Any data type
// any
var anyValue = 10;
anyValue = "Hello, World!";
// Type operators
console.log(typeof num); // number
console.log(typeof customMessage); // string
console.log(typeof isValid); // boolean
// User-defined data types
// Arrays, tuples, classes and interfaces
// Arrays
var numbers = [1, 2, 3, 4, 5];
var names = ["John", "Doe", "Jane"];
// Tuples: when we have a known number of elements with different data types.
var person = ["John", 25, true];
// Classes
var Person = /** @class */ (function () {
    function Person(nameArg, ageArg, isStudentArg) {
        this.name = nameArg;
        this.age = ageArg;
        this.isStudent = isStudentArg;
    }
    return Person;
}());
var person1 = new Person("John", 25, true);
console.log(person1);
