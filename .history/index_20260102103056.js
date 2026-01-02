// This is the main JavaScript file for the Advance 🙌 javascript project
//var, let and const
//two versions of javascript
//ES5 - 2009
//ES6 old var, let - 2015 new version const and let

// we will used both version of es6 and es5
// es5 - var
// es6 - let and const
// difference between var, let and const
// 1. var is function scoped
// var add self into window object
// function testVar() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log(i);

// }
// testVar();
//    let are  block scoped
// let con't add self into window object
// function testLet() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log(i);

// }
// testLet();
// 2. var can be re-declared and updated
//    let can be updated but not re-declared
//    const can neither be updated nor re-declared
//

// practical of var, let and const

// var a = 10;
// var a = 20; // re-declared
// a = 30; // updated
// console.log("var a:", a); // 30
// scopping difference
// if (1 == 1) {
//     var x = 10; // function scoped
// }
// console.log(x);

// let
// let b = 10;
// let b = 15; // re-declared error
// b = 20; // updated
// console.log(b);
// if (1 == 1) {
//     let x = 10; // function scoped
//     console.log(x);

// }
// console.log(x);

// const  cannot be updated or re-declared
// const c = 10;
// const c = 20;
// c = 30;
// console.log(c);

// if (1 == 1) {
//     const  x = 10; // function scoped
//     console.log(x);

// }
// console.log(x);
// ====================================================================
// Templete Literals
// ======================================

// var user = "John";
// var greeting = "Hello " + user; before es6 and template literals
// var greeting = `Hello ${user}; welcome to template literals`
// console.log(greeting);

// used in function
// var fName = "John";
// var lName = "Doe";
// function fullName(fName, lName) {
//     return `Your full name is ${fName} ${lName}`;
// }

// let result = fullName(fName, lName);
// console.log(result);

//  ====================================================================
// Arrow Functions
// ======================================
//  funcation add(a, b) { normal function
//         return a + b;
//  }
//  add(5, 10); // 15

// let add = function(a, b){ // function expression
//     return a + b;
// }
// add(5, 10); // 15
//  arrow function
// let add = (a, b) => {
//     return a + b;
// }
// let result = add(5, 10); // 15
// console.log(result);

//  ====================================================================
// Rest operator
// ======================================

// let sum = (name, ...args) => {

//     console.log(`Hello ${name}`);
//     let sum = 0;
//     for (let i in args) {
//         sum += args[i];
//     }
//     return sum;
// }
// console.log(sum("John", 1, 2, 3, 4, 5)); // 15

//  ====================================================================
// var , let , const
// ======================================

// var a = "I am var";
// var a = "Hello " can be re-declared
// a = "world"       can be re-assign
// console.log(a);

// const
// const a = "I am const";
// // var a = "Hello " cannot be re-declared
// // a = "world"      cannot be re-assign
// console.log(a);
// // a = "world"
// console.log(a);

// let

// let a = "i am let";
// let a = "world";  cannot be re-declared
// a = "hello";      // can be re-assign
// a = "hello";
// console.log(a);

// if (1 == 1) {
//     var a = "hello"
//     console.log(a);

// }
// console.log(a);

// if (1 == 1) {
//     let a = "hello"
//     console.log(a);

// }
// console.log(a);


// if (1 == 1) {
//     const a = "hello"
//     console.log(a);

// }
// console.log(a);

// templet staring and templet literals

// let user = "gulzar khan";
// let marks = 550;
// // console.log("Hello" +  user);
// // console.log(`Hello ${user}, welcome to templet literals`);
// console.log(`Hello ${user}, your marks is = ${marks}`);

// let fName = "Gulzar";
// let lName = "Khan";

// function fullName(fName, lName) {
//     return `your fullName is ${fName} ${lName}`;
// }

// let result = fullName(fName, lName);
// console.log(result);

// rest operator

// function sum(name, ...args) {
//     let sum = 0;

//     for (let i in args) {
//         sum += args[i]
//     }
//     // console.log(sum);
//     document.writeln(`Hello ${name}, sum is  = ${sum}`);


// }

// sum("John", 23, 21, 34)
// sum("John", 23, 21)

// spread operator

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);


// function sum(name, ...args) {
//     let sum = 0;

//     for (let i in args) {
//         sum += args[i]
//     }
//     document.writeln(`Hello ${name}, sum is  = ${sum}`);

// }
// let arr = [10, 20, 30, 40];

// sum("John", ...arr);

// const object1 = {
//     name: "Gulzar",
//     age: 30,
//     city: "New York"
// };

// const object2 = {
//     name: "John",
//     age: 25,
//     country: "USA"
// };
// const mergedObject = { ...object1, ...object2 };
// console.log(mergedObject);


// Distructuring ARRAY

// let array = ["Gulzar", 30, "New York", ["male", 23000]];

// let [name, age, city, [gender, salary]] = array;

// console.log(`This is ${name}, his age is ${age}, the city is ${city}, gender is ${gender} and salary is ${salary}`);

let array = ["Gulzar", 30, "New York"];
let [name, ...city] = array;


console.log(`The name is ${name} and the ${city}`);
