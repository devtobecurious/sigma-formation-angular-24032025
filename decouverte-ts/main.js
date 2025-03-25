"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const harry_potter_1 = require("./harry-potter");
const harryPotter = new harry_potter_1.Wizard('Harry', 30);
harryPotter.name = 'Harry Potter';
//harryPotter.name = 30
// harryPotter.age = 30; // Error: Property 'age' is private and only accessible within class 'HarryPotter'.
const hermione = new harry_potter_1.Wizard('Hermione', 30);
const ron = {
    name: 'Ron',
    age: 30
};
const hagrid = {
    name: 'Hagrid',
    age: 60
};
