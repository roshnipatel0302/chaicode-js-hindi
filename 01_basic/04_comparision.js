console.log(2 > 1);   // true  (2 is greater than 1)
console.log(2 >= 1);  // true  (2 is greater than or equal to 1)
console.log(2 < 1);   // false (2 is not less than 1)
console.log(2 <= 1);  // false (2 is not less than or equal to 1)

console.log("2" > 1);   // true  ("2" is converted to number 2, and 2 > 1)
console.log("02" > 1);  // true  ("02" is converted to number 2, and 2 > 1)

console.log(null > 0);   // false (null is converted to 0, and 0 > 0 is false)
console.log(null == 0);  // false (null only equals undefined, not 0)
console.log(null >= 0);  // true  (null is converted to 0, and 0 >= 0 is true)

console.log(undefined > 0);   // false (undefined cannot be converted to a number for comparison)
console.log(undefined == 0);  // false (undefined only equals null, not 0)
console.log(undefined >= 0);  // false (undefined cannot be converted properly, so result is false)


console.log(undefined === 0); //strict check with 3 three equal