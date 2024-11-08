"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mammal = void 0;
// Parent class for person can be mammal
// We can export a clss using export keyword
var Mammal = /** @class */ (function () {
    // constructor function
    function Mammal(hasHairArg, isWarmBloodedArg) {
        this.hasHair = hasHairArg;
        this.isWarmBlooded = isWarmBloodedArg;
    }
    // methods
    Mammal.prototype.eat = function () {
        console.log("Mammal is eating");
    };
    return Mammal;
}());
exports.Mammal = Mammal;
