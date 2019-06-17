import { LabeledObject } from './Interfaces'

class Branch {
    constructor(code: number, name: string) {
        this.Code = code,
            this.Name = name
    }
    Code: number
    Name: string
}

class LabeledImplObject implements LabeledObject {
    constructor(objectName: string, label: string) {
        this.objectName = objectName;
        this.label = label;
    }
    objectName: string = "obj";
    label: string;
    currentTime: Date = new Date();
}

class Animal {
    protected name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number): void {
        console.log(`${this.name} moves ${distanceInMeters} meters`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log('Woof!');
    }
}

class Snake extends Animal {
    move(distanceInMeters: number): void {
        console.log('Slithering');
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    move(distanceInMeters: number = 45): void {
        console.log('Galloping');
        super.move(distanceInMeters);
    }
}


class Animal1 {
    /*private*/ name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal1 {
    constructor(theName: string) { super(theName); }
}

class Employee {
    /*private */ name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal1("Goat");
let rhino = new Rhino("Rhino");
let employee = new Employee("Bob");

animal = rhino;
animal = employee;

class Octopus {
    readonly numberOfLegs: number = 8;
    //name property set automatically
    constructor(readonly name: string) { }
}

export { Branch, LabeledImplObject, Animal, Dog, Snake, Horse, Octopus }