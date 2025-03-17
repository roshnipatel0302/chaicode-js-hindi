const myArr = [0, 1, 2, 3, 4, 5, 6, true, "hitesh"];
const myArr2 = ["sunsun", "hitesh", "roshni"];
const myArr3 = ["a", "b", "c", "d"];

console.log("Original Arrays:");
console.log("myArr:", myArr);
console.log("myArr2:", myArr2);
console.log("myArr3:", myArr3);

// Length
console.log("\nArray Lengths:");
console.log("myArr Length:", myArr.length);
console.log("myArr2 Length:", myArr2.length);

// Push & Pop
myArr.push(100);
console.log("\nAfter Push (100):", myArr);
myArr.pop();
console.log("After Pop:", myArr);

// Unshift & Shift
myArr.unshift("Start");
console.log("\nAfter Unshift ('Start'):", myArr);
myArr.shift();
console.log("After Shift:", myArr);

// Includes & IndexOf
console.log("\nIncludes & IndexOf:");
console.log("Includes 4?", myArr.includes(4));
console.log("Index of 4:", myArr.indexOf(4));

// Join
console.log("\nJoin Array as String:", myArr.join(" - "));

// Slice (Non-Mutating)
console.log("\nSlice (2, 5):", myArr.slice(2, 5));
console.log("After Slice (Original Unchanged):", myArr);

// Splice (Mutating)
myArr.splice(2, 3, "X", "Y");
console.log("\nAfter Splice (Replace index 2-4 with 'X' and 'Y'):", myArr);

// Map
const mappedArr = myArr.map(item => String(item) + "!");
console.log("\nMapped Array:", mappedArr);

// Filter
const filteredArr = myArr.filter(item => typeof item === "number");
console.log("\nFiltered Numbers:", filteredArr);

// Reduce (Sum)
const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("\nSum using Reduce:", sum);

// ForEach
console.log("\nForEach (Numbers Doubled):");
numbers.forEach(num => console.log(num * 2));

// Sorting
const names = ["Roshni", "Hitesh", "Aman"];
names.sort();
console.log("\nSorted Names:", names);
names.reverse();
console.log("Reversed Names:", names);

// Sorting Numbers
const nums = [5, 2, 8, 1, 10];
nums.sort((a, b) => a - b);
console.log("\nSorted Numbers (Ascending):", nums);
nums.sort((a, b) => b - a);
console.log("Sorted Numbers (Descending):", nums);

// Find
const firstMatch = numbers.find(num => num > 25);
console.log("\nFind First Number > 25:", firstMatch);

// Every & Some
console.log("\nEvery & Some:");
console.log("Every number > 5?", numbers.every(num => num > 5));
console.log("Some numbers > 25?", numbers.some(num => num > 25));


console.log("Original Arrays:");
console.log("myArr:", myArr);
console.log("myArr2:", myArr2);
console.log("myArr3:", myArr3);

// ✅ Check if it's an Array (Array.isArray)
console.log("\nChecking Arrays:");
console.log("Is myArr an Array?", Array.isArray(myArr)); // true
console.log("Is {} an Array?", Array.isArray({})); // false

// ✅ Convert Array-like object to Array (Array.from)
const str = "Hello";
const newArray = Array.from(str);
console.log("\nArray.from Example:");
console.log("String to Array:", newArray); // ['H', 'e', 'l', 'l', 'o']

// ✅ Creating an Array from a Set
const mySet = new Set([1, 2, 3, 4]);
const arrFromSet = Array.from(mySet);
console.log("Set to Array:", arrFromSet); // [1, 2, 3, 4]

// ✅ Creating an Array from a Map
const myMap = new Map([[1, "one"], [2, "two"]]);
const arrFromMap = Array.from(myMap);
console.log("Map to Array:", arrFromMap); // [[1, "one"], [2, "two"]]

// ✅ Array of Arrays (Nested Arrays)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("\nArray of Arrays (Matrix):");
console.log(matrix);
console.log("First row:", matrix[0]); // [1, 2, 3]
console.log("Element at [1][2]:", matrix[1][2]); // 6

// ✅ Flattening Nested Arrays
const flatArray = matrix.flat();
console.log("\nFlattened Array:", flatArray); // [1,2,3,4,5,6,7,8,9]

// ✅ Push & Pop
myArr.push(100);
console.log("\nAfter Push (100):", myArr);
myArr.pop();
console.log("After Pop:", myArr);

// ✅ Unshift & Shift
myArr.unshift("Start");
console.log("\nAfter Unshift ('Start'):", myArr);
myArr.shift();
console.log("After Shift:", myArr);

// ✅ Includes & IndexOf
console.log("\nIncludes & IndexOf:");
console.log("Includes 4?", myArr.includes(4));
console.log("Index of 4:", myArr.indexOf(4));

// ✅ Join
console.log("\nJoin Array as String:", myArr.join(" - "));

// ✅ Slice (Non-Mutating)
console.log("\nSlice (2, 5):", myArr.slice(2, 5));
console.log("After Slice (Original Unchanged):", myArr);

// ✅ Splice (Mutating)
myArr.splice(2, 3, "X", "Y");
console.log("\nAfter Splice (Replace index 2-4 with 'X' and 'Y'):", myArr);



// ✅ ForEach
console.log("\nForEach (Numbers Doubled):");
numbers.forEach(num => console.log(num * 2));



// ✅ Every & Some
console.log("\nEvery & Some:");
console.log("Every number > 5?", numbers.every(num => num > 5));
console.log("Some numbers > 25?", numbers.some(num => num > 25));

