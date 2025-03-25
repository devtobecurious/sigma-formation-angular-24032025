"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wizard = void 0;
class Wizard {
    // private name: string;
    // private age: number;
    // constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    // }
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('constructor');
    }
}
exports.Wizard = Wizard;
