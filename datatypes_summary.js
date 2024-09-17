// Primitive

// 7 types :-
/* String
Number
Boolean
null
undefined
Symbol
BigInt */

const score = 100
const scoreDec = 100.25

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigNumber = 1223123123123123123123123231n

// Reference (Non primitive)
/* Array
Objects
Functions */

const heros = ["Spiderman", "Ironman", "Doctor Strange"];
let myObj = {
    name: "Krishna",
    age: 19,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp);
