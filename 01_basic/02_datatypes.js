"use strict";

// Primitive Data Types
let name = "Roshni"; // String
let age = 56; // Number
let isLoggedIn = false; // Boolean
let city; // Undefined (not assigned any value yet)
let score = null; // Null (explicitly set to 'nothing')

// Non-Primitive Data Type (Object)
let user = {
    username: "roshnipatel",
    email: "roshni@gmail.com",
    age: 25
}; // ObjectS

// BigInt Example
let bigNumber = BigInt(123456789012345678901234567890);

// Symbol Example
let uniqueID = Symbol("id");

// Output with typeof
console.log("Type of name:", typeof name, name); // string
console.log("Type of age:", typeof age, age); // number
console.log("Type of isLoggedIn:", typeof isLoggedIn, isLoggedIn); // boolean
console.log("Type of city:", typeof city, city); // undefined
console.log("Type of score:", typeof score, score); // object (this is a JS bug; null should ideally be 'null')
console.log("Type of user:", typeof user, user); // object
console.log("Type of bigNumber:", typeof bigNumber, bigNumber); // bigint
console.log("Type of uniqueID:", typeof uniqueID, uniqueID); // symbol
