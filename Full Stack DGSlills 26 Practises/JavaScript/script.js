// function SetupButton(massage) {

//     const button = document.querySelector("#btn");

//     button.addEventListener("click", function() {
//         alert(massage);
//     });

// }

// SetupButton("Welcome to Java Script");


// function sayHello() {
//   return "Hello World";
// }

// let message = sayHello();
// console.log(message);

// function sayHello() {
//   return "Hello Pakistan";
// }

// console.log(sayHello());

// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }

// // Call the toCelcius() function
// let value = toCelsius(77);
// console.log(value);

// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }

// let value = toCelsius;
// console.log(value);

// function SyHello(){
//     return "Hello Kaachi";
// }
// let text = SyHello();
// console.log(text);

// function greetin (){
//     return "Greeting Karachi";
// }

// function salam (){
//     document.getElementById("demo").innerHTML = greetin();
// }


// function add (a,b){
//     return a+b;
// }

// const sm = add(5,6);


// function result(){
//     document.getElementById("demo").innerHTML = sm;
// }

// function CreateBankAccount (){
//     let balance = 1000;

//     return {
//         checkBalance: function(){
//             return balance;
//         },
//         deposit: function (amount){
//             balance = balance + amount;
//             return balance;
//         },

//     };
// }

// const account = CreateBankAccount();

// function showbalnce(){
//     document.getElementById("demo").innerHTML = account.checkBalance();
// }

// function showdeposit (){
//     document.getElementById("demo").innerHTML = account.deposit((500));
// }
// console.log(account.checkBalance());
// console.log(account.deposit(500));

// function sayHello(name) {
//   return "Hello " + name;
// }

// let greeting = sayHello("John");
// console.log(greeting);

// function fullname (firstName, lastName){
// return firstName + " " + lastName;
// }
// const name = fullname("Ahmad", "Amin");
// console.log(name);

// function multiply(a, b) {
//   return "Done";
// // execution stops here
//   return a * b;         //Code written after a return statement will NOT be executed. result: "done"
//                         // is ne return a * b; ko excecute nahi kia
// }

// let result = multiply(4, 3);
// console.log(result);

// function checkAge (age){
//     if (age < 18){          //If return is inside the if, you often don't need else, because return already stops the function.
//         return "too yong"; //this return stoped function immediately. It does NOT continue to: return "Access granted"; 
//                             // You can use return to stop a function early
//     }
//     return "access granted";
// }

// const check = checkAge(17);
// console.log(check);

// function toCelcius (forenhet){
//     return (5/9) * (forenhet-32);
// }

// toCelcius(77);

// // function checkToCelcius(){

// document.getElementById("demo").innerHTML = toCelcius(77);
// // }

// x = findMax(1, 123, 500, 115, 44, 88);

// function findMax () {
//     let max = -Infinity;
//     for (let i = 0; i < arguments.length; i++){
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }

// let x = findMax(1, 123, 500, 115, 144, 88, 788);
// console.log(x);


//Arguments Can Be Variables

// let x = 7
// let y = 10

// function multiply (a, b){
//     return a*b;
// }

// let xy = multiply(x, y);
// console.log(xy);

// function show(){
//     document.getElementById("demo").innerHTML = xy;
// }

// function SetupButton(message){
//     let button = document.querySelector("#btn");
//     button.addEventListener("click", function(){
//         alert(message);
//     });
// }

// SetupButton("welcom to DG Skills MERN Course");

    // DOM Manipulation Practice
// const button = document.getElementById("btn");
// button.innerHTML = "Click Here Janab";
// more examples:


//asynchronous > callback function


// let result;

// setTimeout(function() {
//   result = 5;
// }, 1000);

// console.log(result);


// function myDisplayer(some) {
//   console.log(some);
// }

// function done(value) {
//   myDisplayer(value);
// }

// setTimeout(function() {
//   done(5);
// }, 2000);


// setTimeout(function () {
//     myDisplayer("Finished!");
// }, 3000);

// function myDisplayer(text) {
//     console.log(text);
// }

// function myDisplayer (some){
//     console.log(some);
// }

// function myCalculater (num1, num2){
//     let sum = num1+num2;
//     return sum;
// }

// let result = myCalculater(5,5);
// myDisplayer(result);

// function myDisplayer(some) {
//   console.log(some);
// }

// // Function to calculate a sum
// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   myDisplayer(sum);
// }

// myCalculator(5, 5);

const content = document.querySelector("#content");

document.querySelector("#homeBtn").addEventListener("click", () => {
    content.textContent = "Home Content";
});

document.querySelector("#aboutBtn").addEventListener("click", () => {
    content.textContent = "About Content";
});

document.querySelector("#contactBtn").addEventListener("click", () => {
    content.textContent = "Contact Content";
});