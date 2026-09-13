// 1. Arithmetic operators: +, -, *, /, %, **
let a = 10;
let b = 3;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b); //Reminder
// console.log(a**b); //Power

// 2. Assignment operators. Used to assign/change values: +=, -=, *=, /=
// let x = 10; //  =assign
// x += 5; //   add and assign
// x -= 2; //   subtract and assign
// x *= 2; //   multiply and assign
// x /= 2; //   divide and assign
// console.log(x);

//3. Comparison operators: >, <, >=, <=, ==, ===, !==

// console.log(10>5); //   greater than. result: true
// console.log(10<5); //   less than. result: false
// console.log(10>=5); //  greater than or equal. result: true
// console.log(10<=5); //  less than or equal. result: false
// == equal. check value only
// let age = 25;
// let height = "25";
// console.log(age==height); //result: true
//=== equal. check value + type
// let age = 25;
// let height = "25";
// console.log(age===height); //result: false qun ke data type same nahi he. 1st ki number 2nd ki string
// console.log(10===10); //equal. result: true
// console.log(10===5); // equal. result: false
// console.log(10!==10); // not equal. result: true
// console.log(10!==5); //  not equal. result: false

//4. Logical operators: &&, ||, ! (&&= and | ||= or | != not)

// let age =25;
// console.log(age > 15 && age < 30); // age 15 se ziada he or 30 se km he. result true
// console.log(age > 30 || age === 25);  // age ziada he 30 se ya age brabar he 25 ke. result true
// console.log(age > 30 || age === 20); //     age ziada he 30 se ya brabar he 20 ke. result false
// console.log(!(age > 18)); // age is NOT greater than 18. result false
// console.log(!(age < 18)); // age is NOT less than 18. result true

//5.Increment and Decrement operators: ++, -- (++ adds 1  == subtracts 1)

// let age = 25;
// age++  // add 1 on age. result 26
// age-- // subtracts 1 from age. result 24
// console.log(age); 

//Conditional Operators: if, if....else, else if
//Structure: if(){} elas{}
//if...else
// let age = 15;
// if (age >= 18) {
//     console.log("adult");
//     } else {
//         console.log("Minor");
//     }  // result Minor

// let age = 20;
// if (age >= 18) {
//     console.log("adult");
// } else {
//     console.log("minor");
// }           //result adult

//else if
// let age = 20;
// if (age >= 30) {
//     console.log("adult");
// } else if ( age >= 20) {
//     console.log("age is 20");
// } else {
//     console.log("Minor");
// }       //result age is 20

// let age = 20;
// if (age >= 18) {
//     console.log("adult");
// } else if (age >= 20) {
//     console.log("age is 20");
// } else {
//     console.log("Minor");

// } //result Adult 
//Q: why not "age is 20" A: JavaScript checks the conditions from top to bottom. First condition age >= 18 → true So it runs:adult, 
//Then JavaScript stops checking the else if and else. So this:else if (age >= 20) is never checked.
//Important rule: 
//if       → checked first
//else if  → checked only if previous condition is false
//else     → runs if all conditions are false

//6.Ternary operator: ?, : (?=if true, :=if false) ye if else ki shortform he.

// let age = 20;
// let rslt = age >= 18 ? "adult" : "minor"; // age agr 18 se ziada ya braber he to adult output do wrna minor output do. result Adult. qun ke age 20 he
// console.log(rslt);

// let age = 15;
// let rslt = age >= 18 ? "adult" : "minor"; // age agr 18 se ziada ya braber he to adult output do wrna minor output do. result minor. qun ke age 15 he
// console.log(rslt);

