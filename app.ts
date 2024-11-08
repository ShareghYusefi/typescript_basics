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
let y = 10;
if (y == 10) {
  // try to redefine the variable y locally
  let y = 20;
}
console.log(y); // 10

// const is block scoped.
// we cannot reassign a value to a const variable.

const z = 10;
// z = 20; // error

// "Let" is preferred over "var" as best practice.

// Data types in TypeScript
// We can define a variables data type using a colon.

// Built-in data types
// number, string, boolean, void, null, undefined
let customMessage: string = "Hello, World!";
let num: number = 10;
let isValid: boolean = true;
let nullValue: null = null;
let undefinedValue: undefined = undefined;

function greet(): void {
  console.log("Hello, World!");
  // does not return anything, so return type is void
  return;
}

// Any data type
// any
let anyValue: any = 10;
anyValue = "Hello, World!";

// Type operators
console.log(typeof num); // number
console.log(typeof customMessage); // string
console.log(typeof isValid); // boolean

// User-defined data types
// Arrays, tuples, classes and interfaces
// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["John", "Doe", "Jane"];

// Tuples: when we have a known number of elements with different data types.
let person: [string, number, boolean] = ["John", 25, true];

// Classes
class Person {
  // properties
  name: string;
  age: number;
  isStudent: boolean;

  // constructor function used for initialization
  constructor(nameArg: string, ageArg: number, isStudentArg: boolean) {
    this.name = nameArg;
    this.age = ageArg;
    this.isStudent = isStudentArg;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// instantiating a class = creating a object instance
// new keyword is used to create an object instance
let person1 = new Person("John", 25, true);
person1.greet();
console.log(person1);

// What is Inheritance?
// When a class inherits properties or methods from another class.

// Parent class for person can be mammal
class Mammal {
  // properties
  hasHair: boolean;
  isWarmBlooded: boolean;

  // constructor function
  constructor(hasHairArg: boolean, isWarmBloodedArg: boolean) {
    this.hasHair = hasHairArg;
    this.isWarmBlooded = isWarmBloodedArg;
  }

  // methods
  eat(): void {
    console.log("Mammal is eating");
  }
}

// we can inherit from mammal class using extends keyword
class Animal extends Mammal {
  // properties
  // What are access modifiers? public, private, protected
  // These are used to control access to properties and methods in a class.

  // public: accessible within and outside of a class
  public name: string;
  // proteced: accessible within the class and its subclasses
  protected age: number;
  // private: accessible only within the class
  private hasTail: boolean;

  // constructor function
  constructor(
    nameArg: string,
    ageArg: number,
    hasHairArg: boolean,
    isWarmBloodedArg: boolean
  ) {
    // we can use super keyword to call the parent class constructor
    super(hasHairArg, isWarmBloodedArg);
    this.name = nameArg;
    this.age = ageArg;
  }

  sleep(): void {
    console.log(this.name + " is sleeping");
  }
}

// We create an instance of the Animal class and call the eat method.
let cat = new Animal("Cat", 2, true, true);
console.log(cat);
cat.eat();

// What is an Interface?
// An interface custom data type, we use it to define the structure for an object.

// Interface for a Animal object
interface IAnimal {
  name: string;
  age: number;
  hasHair: boolean;
  isWarmBlooded: boolean;
  eat(): void;
  sleep(): void;
}

let dog: IAnimal = new Animal("Dog", 3, true, true);
console.log(dog);
dog.sleep();
