"use strict";
// What is an Single Page Application (SPA)?
// An application with one HTML page, updated dynamically without refreshing the page.
// Angular is a SPA framework.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
    // constructor function used for initialization
    function Person(nameArg, ageArg, isStudentArg) {
        this.name = nameArg;
        this.age = ageArg;
        this.isStudent = isStudentArg;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
// instantiating a class = creating a object instance
// new keyword is used to create an object instance
var person1 = new Person("John", 25, true);
person1.greet();
console.log(person1);
// What is Inheritance?
// When a class inherits properties or methods from another class.
// import mammal class from mammal.ts file
var mammal_1 = require("./mammal");
// we can inherit from mammal class using extends keyword
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    // constructor function
    function Animal(nameArg, ageArg, hasHairArg, isWarmBloodedArg) {
        // we can use super keyword to call the parent class constructor
        var _this = _super.call(this, hasHairArg, isWarmBloodedArg) || this;
        // private: accessible only within the class
        _this._hasTail = true;
        _this.name = nameArg;
        _this.age = ageArg;
        return _this;
    }
    Animal.prototype.sleep = function () {
        console.log(this.name + " is sleeping");
    };
    Object.defineProperty(Animal.prototype, "hasTail", {
        // getter and setter methods for private properties
        get: function () {
            return this._hasTail;
        },
        set: function (value) {
            this._hasTail = value;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}(mammal_1.Mammal));
// We create an instance of the Animal class and call the eat method.
var cat = new Animal("Cat", 2, true, true);
console.log(cat);
cat.eat();
console.log("Find this text");
// this call the getter method
console.log(cat.hasTail); // true
// this call the setter method
console.log((cat.hasTail = false)); // false
var dog = new Animal("Dog", 3, true, true);
console.log(dog);
dog.sleep();
// Type Assertion
// Type assertion is used to tell the compiler the type of a variable.
var message = "Hello, World!";
// we can use angle brackets to tell the compiler the type of a variable
var messageLength = message.length;
var alternateMessageLength = message.length;
