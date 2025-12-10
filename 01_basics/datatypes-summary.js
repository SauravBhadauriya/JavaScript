// 1st. Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIN = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 15545485756487987852n



// 2nd. Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "saurav",
    age: 24,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);
// console.log(typeof heros);



// https://262.ecma-international.org/5.1/#sec-11.4.3




//------------------------Memories-------------------

// Stack (Primitive), Heap (NoN-Primitive)

let myInstaname = "saurav_thakur17"

let anothername = myInstaname
anothername = "Sauravbhadauriya17"


console.log(myInstaname);
console.log(anothername);


let userOne = {
    email: "user@example.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user@google.com"

console.log(userOne.email);
console.log(userTwo.email);
