import { Wizard } from './harry-potter';

const harryPotter = new Wizard('Harry', 30);
harryPotter.name = 'Harry Potter';
//harryPotter.name = 30
// harryPotter.age = 30; // Error: Property 'age' is private and only accessible within class 'HarryPotter'.

const hermione = new Wizard('Hermione', 30);

// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
    power: string;
}

const ron: Wizard = {
    name: 'Ron',
    age: 30
}

const hagrid: Person = {
    name: 'Hagrid',
    age: 60,
    power: 'hh'
}

type WithName = {
    name: string
}

function sayHello(person: WithName): void {
    console.log(`Hello ${person.name}`);
}

sayHello(harryPotter);
sayHello(ron); 
sayHello(hagrid)

