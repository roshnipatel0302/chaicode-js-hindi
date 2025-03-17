const score = 45;
const balance = new Number(56);

console.log("Balance:", balance);  // Number object
console.log("Type of balance:", typeof balance);  

// ✅ Number Methods
console.log("To String:", balance.toString());  
console.log("Length of String:", balance.toString().length);
console.log("Fixed to 2 decimal places:", balance.toFixed(2));  
console.log("Precision (4 digits):", balance.toPrecision(4));  
console.log("Exponential form:", balance.toExponential(2));  
console.log("Value as number:", balance.valueOf());  

// ✅ Global Number Methods
console.log("Max value in JS:", Number.MAX_VALUE);
console.log("Min value in JS:", Number.MIN_VALUE);
console.log("Positive Infinity:", Number.POSITIVE_INFINITY);
console.log("Negative Infinity:", Number.NEGATIVE_INFINITY);
console.log("Is 56 an Integer?", Number.isInteger(balance));
console.log("Is 56 a NaN?", Number.isNaN(balance));
console.log("ParseInt from '45.67':", Number.parseInt("45.67"));
console.log("ParseFloat from '45.67':", Number.parseFloat("45.67"));
console.log("Is finite (56):", Number.isFinite(balance));
console.log("Is finite (Infinity):", Number.isFinite(Infinity));
console.log("Is NaN ('hello'):", Number.isNaN(Number("hello")));


// **************************************************************************Maths********************************************************
console.log(Math);
console.log(Math.round(4.4));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(4,3.4,7,8,9));
console.log(Math.max(4,3.4,7,8,9));
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max =20;

console.log((Math.floor(Math.random()*(max-min)+1)) +min)


