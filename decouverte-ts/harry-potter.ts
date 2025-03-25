interface PersonBis {
    name: string;
    age: number;
}


export class Wizard implements PersonBis {
    // private name: string;
    // private age: number;

    // constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    // }

    constructor(public name: string, public age: number) {
        console.log('constructor');
    }

    // private _power = '';
    // get power(): string {
    //     return this._power;
    // }
    // set power(power: string) {
    //     this._power = power;
    // }
}