// Parent class for person can be mammal
// We can export a clss using export keyword
export class Mammal {
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
