import { Branch, LabeledImplObject } from './Types';
import { AccountInfo, LabeledObject, Point, SquareConfig, ReadonlyPoint } from './Interfaces';
import { SearchFunction } from './Interfaces';
import { StringArray } from './Interfaces';
import { Dog, Animal, Snake, Horse, Octopus } from './Types';

var nameToUpperCase = (name: string): string => {
    return name.toUpperCase();
}

console.log(nameToUpperCase("abc"));

var logBranch = () => {
    const branch = new Branch(1075, "İstanbul");
    console.log(branch.Code);
}


function selamVer(isim: String) {
    return "Hello " + isim;
}

let selam = selamVer("Fatih");

const tuple: [number, number, boolean] = [1, 2, false];

let person: any = "person";
console.log(person);
person = true;
console.log(person);

enum SmsStatusType {
    New,
    Sent,
    HasError
}

console.log(SmsStatusType.New);
console.log(SmsStatusType[0]);

const error = (message: string): never => {
    throw new Error(message);
}

//error("An exception has occured");
/*
const showError = (): Error => {
    return error("Bir hata oluştu");
}

showError();
*/

//type assertion
let foo: any = 1;
let bar = <string>foo;
console.log(typeof bar);
//console.log(nameToUpperCase(bar));

/*
var account = {} as AccountInfo;
account.number = 1075;
console.log(account);
*/

//mistake in jsx
var account1 = <AccountInfo>{};
account1.number = 1075;

console.log(account1);

declare var myPoint: Point;



function printLabel(labeledObject: LabeledObject) {
    console.log(labeledObject.label);
}


var obj2 = {
    label: "etiket",
    objectName: "object1"
};

printLabel(obj2);

function printObjectLabel(labeledObject: { label: string }) {
    console.log(labeledObject.label);
}

var obj3 = {
    abc: "def"
}


const labeledObjectInstance: LabeledImplObject = new LabeledImplObject("objectInstanceName", "labelInstance");
const labeledObjectInstance2: LabeledImplObject = {
    currentTime: new Date(),
    label: "labeledObjectInstance2",
    objectName: "objectInstanceName2"
}
printLabel(labeledObjectInstance);

console.log(labeledObjectInstance);
console.log(labeledObjectInstance2);

function createSquare(config: SquareConfig): { color: string, area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }

    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

var blackSquare = createSquare({ color: "black" });
var defaultSquare = createSquare({});
var incorrectSquare = createSquare({ colour: "red" } as SquareConfig);
var indexSignatureSquare = createSquare({ colour: "red" });
console.log(blackSquare);
console.log(defaultSquare);
console.log(incorrectSquare);
console.log(indexSignatureSquare);

//printObjectLabel(obj3);



//Readonly


let p1: ReadonlyPoint = { x: 100, y: 150 };

console.log(p1);

var searchImpl: SearchFunction = function (src: string, sub: string): string {
    return "seachImpl";
}

console.log(searchImpl("", ""));

const myArray: StringArray = ["Fatih", "Berksöz"];

console.log(myArray[0]);


//classes

let dog: Dog = new Dog("kopek");
dog.move(100);
dog.bark();


let horse: Animal = new Horse("at");
horse.move(100);

let horse1: Horse = new Horse("at1");
horse1.move();


let snake: Snake = new Snake("yilan");
snake.move(50);



const oct = new Octopus("oct");
//oct.name = "abc";
console.log(oct.name);