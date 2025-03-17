const name = "sunsun patel";
const repoCount = 30;

// ✅ Corrected template literal usage
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("sunsun patel");

// ✅ Accessing characters
console.log(gameName[0]);  
console.log(gameName[1]);  
console.log(gameName[2]);  
console.log(gameName[3]);  

console.log(gameName.__proto__);  

// ✅ String Properties
console.log("Length:", gameName.length);  

// ✅ String Methods
console.log("Uppercase:", gameName.toUpperCase());  
console.log("Lowercase:", gameName.toLowerCase());  
console.log("Character at index 4:", gameName.charAt(4));      
console.log("Index of 'p':", gameName.indexOf('p'));   
console.log("Last Index of 's':", gameName.lastIndexOf('s'));
console.log("Includes 'patel':", gameName.includes('patel'));
console.log("Starts with 'sun':", gameName.startsWith('sun'));
console.log("Ends with 'patel':", gameName.endsWith('patel'));
console.log("Substring (0-6):", gameName.substring(0, 6));  
console.log("Slice (-5):", gameName.slice(-5));        
console.log("Replace 'sunsun' with 'Raj':", gameName.replace('sunsun', 'Raj')); 
console.log("Split by space:", gameName.split(' '));        
console.log("Concatenation:", gameName.concat(" is a gamer"));
console.log("Trimmed string:", gameName.trim());            
console.log("Repeated 2 times:", gameName.repeat(2));         
console.log("Pad Start (15, '-'):", gameName.padStart(15, '-')); 
console.log("Pad End (15, '*'):", gameName.padEnd(15, '*'));   
console.log("Match 'sun':", gameName.match(/sun/g));     
console.log("Search 'patel':", gameName.search('patel'));   
console.log("Locale Compare (with itself):", gameName.localeCompare('sunsun patel')); 
console.log("Normalized string:", gameName.normalize());       
console.log("Unicode of first character:", gameName.codePointAt(0));    
