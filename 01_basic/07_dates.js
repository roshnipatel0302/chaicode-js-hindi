//Dates
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toUTCString());
console.log(myDate.toTimeString());
console.log(myDate.toTimeString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23);
let myCreatedDate1 = new Date(2023,0,56);
let myCreatedDate2 = new Date(2023,0,1,5,30);
let myCreatedDate3 = new Date("2023-3-4");
let myCreatedDate4 = new Date("04-03-2025");
let timeStamp = Date.now()
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toDateString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate4.toLocaleString());
console.log(timeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getMonth());
console.log(newDate.getSeconds());
console.log(newDate.getTime());
console.log(newDate.getTimezoneOffset());
console.log(newDate.getUTCDate());
console.log(newDate.getUTCDay());

const newDate1 = new Date(); // Current date & time

const formattedDate = newDate1.toLocaleString('default', {  
  weekday: "long",   // Monday, Tuesday, ...
  year: "numeric",   // 2024
  month: "long",     // January, February, ...
  day: "numeric",    // 1, 2, 3, ...
  hour: "2-digit",   // 01, 02, 03 (12-hour format)
  minute: "2-digit", // 01, 02, 59
  second: "2-digit", // 00, 01, 59
  hour12: true       // AM/PM format (true for 12-hour, false for 24-hour)
});

console.log(formattedDate);






 