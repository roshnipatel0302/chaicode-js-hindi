// Different values of `score` and their conversion results
// let score = "33abc";  // Result: NaN
// let score = "33";      // Result: 33
// let score = null;      // Result: 0
// let score = true;      // Result: 1
// let score = "true";    // Result: NaN
let score = undefined;     // Result: NaN

console.log("Type of score:", typeof score);
console.log("Type of score (alternative syntax):", typeof(score));

let valueInNumber = Number(score);
console.log("Converted to Number:", valueInNumber, "| Type:", typeof valueInNumber);

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log("Original value:", isLoggedIn, "| Converted to Boolean:", booleanIsLoggedIn, "| Type:", typeof booleanIsLoggedIn);


let someNUMBER = 33;
let someNumber2 = String(someNUMBER);
console.log("someNUMBER",typeof someNumber2,someNUMBER)


// ************************************************Operation**********************************************************

let value = 3;
let negvalue = -value;
console.log("negvalue:", negvalue);  
// Output: negvalue: -3

console.log(2 + 2);  
// Output: 4

console.log(2 - 2);  
// Output: 0

console.log(2 * 2);  
// Output: 4

console.log(2 ** 2);  
// Output: 4  (Exponentiation: 2^2)

console.log(2 / 3);  
// Output: 0.6666666666666666

console.log(2 % 2);  
// Output: 0  (Remainder of 2/2)

let str = "roshni";
let str2 = "patel";
let str3 = str + str2;
console.log("str3:", str3);  
// Output: str3: roshni patel

console.log("2" + 2);  
// Output: "22"  (String concatenation)

console.log(2 + "2");  
// Output: "22"  (Number + String → String)

console.log("2" + "2");  
// Output: "22"  (String + String → Concatenation)

console.log("2" + 1 + 2);  
// Output: "212"  (String first, so all concatenated)

console.log(2 + 1 + "2");  
// Output: "32"  (Math first → 3 + "2" → "32")

console.log(true);
console.log(+true);

let num1,num2,num3;
num1=num2=num3=2+2;
console.log(num1,num2,num3);

// Step 1: Declare a variable `gamecounter` and assign it an initial value of 100.
let gamecounter = 100;  

// Step 2: Apply post-increment (`gamecounter++`).
// - Post-increment means the current value is used first (if needed in an expression), THEN it increases by 1.
// - Here, `gamecounter` is increased from 100 to 101 AFTER this statement executes.
gamecounter++;  

// Step 3: Print the updated value of `gamecounter`.
// - The value is now 101 because it was incremented in the previous step.
console.log(gamecounter);  // Output: 101


// Step 1: Declare a variable `gamecounter` and assign it an initial value of 100.
let gamecounter1 = 100;  

// Step 2: Apply pre-increment (`++gamecounter`).
// - Pre-increment means the value is increased FIRST, then used in any expression.
// - Here, `gamecounter` is incremented from 100 to 101 BEFORE being used.
console.log(++gamecounter1);  // Output: 101

// Step 3: The `gamecounter` variable now holds the value 101.





