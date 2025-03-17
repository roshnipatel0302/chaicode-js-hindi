// #primitive datatype 7 :String , Number,Boolean,Null,Undefined,Symbol,BigInt

// String
let name = "Roshni";
console.log(typeof name); // Output: string

// Number
let age = 25;
console.log(typeof age); // Output: number

// Boolean
let isDeveloper = true;
console.log(typeof isDeveloper); // Output: boolean

// Null (empty or intentional absence of value)
let emptyValue = null;
console.log(typeof emptyValue); // Output: object (a known JavaScript quirk)

// Undefined (value not assigned)
let undefinedValue;
console.log(typeof undefinedValue); // Output: undefined

// Symbol (unique identifier)
let uniqueKey = Symbol("id");
console.log(typeof uniqueKey); // Output: symbol

// BigInt (large integers beyond Number limit)
let bigNumber = BigInt(9007199254740991) + BigInt(1);
console.log(typeof bigNumber); // Output: bigint



//REference (Non Primitive)
// Array,Objects,functions

// Array (List of values)
let fruits = ["Apple", "Mango", "Banana"];
console.log(typeof fruits); // Output: object
console.log(fruits[1]); // Output: Mango

// Object (Key-Value Pairs)
let person = {
  name: "Roshni",
  age: 25,
  isDeveloper: true,
};
console.log(typeof person); // Output: object
console.log(person.name); // Output: Roshni

// Function (Reusable block of code)
function greet() {
  return "Hello, World!";
}
console.log(typeof greet); // Output: function
console.log(greet()); // Output: Hello, World!



// *************************************************************************Memory Allocation************************************************

//stack(Primitive) heap(non-primitive)



// 1.stack(Primitive)
let name1 = "roshni patel";
let name2 =  name1
name2="sunsun patel"
console.log(name1)
console.log(name2)   // do not change original value

// 2.heap(non-primitive)
let object1 ={
  email:"goluaaa.com",
  age:23
}

let object2 = object1
object2.email="sunsun.com";
console.log(object2,object1) //it chnages  original value.