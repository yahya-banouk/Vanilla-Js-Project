// Primitive data types
// string, number, boolean, null, undefined, symbol
const name ="john";

const age = 30;
const isEmployed = true;

const nothing = null;

let undefinedVariable ;

let sym = Symbol();

console.log(typeof sym);
console.log(undefinedVariable);
console.log(typeof name);
console.log(typeof age);
console.log(typeof isEmployed);
console.log(typeof nothing);


// non primitive data types

//literal object
const ceties = {
  name: "paris",
  population: 2000000,
};
console.log('cities',typeof ceties);

const greeting = function(){
  console.log('hello');
};
console.log('greeting', typeof greeting);


const today = new Date();
console.log('today', typeof today);


const arr = [1,2,3];

console.log('arr',typeof arr);