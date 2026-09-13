//Function declaration
// function greet (name){ //You are saying:"Create a function called greet."name is a parameter. It's like an empty box waiting for a value.

//     console.log("hello",name); //means When someone gives me a name, print hello + that name

// }     
// greet("waleed") //Now you are giving "waleed" to the function. so name = "waleed"
// greet("Ali")
// greet("Ahmad")

//Parameter:A parameter is the variable written when creating the function. 
//Argument An argument is the actual value you give when calling the function.
//Parameter can more then one like:

// function add (a,b) {
//     console.log(a+b);
// }

// add (5,6);
// add (4,3);

//Return VS Console

// function add (a,b) {
//     return a+b;
// }

// const result = add (5,9);
// console.log(result); 
// // is function ka maqsad ye he ke us ko koi value return kren or aagy utilize kr saken. 
// agr koi output need ho to console use kren gy.

// Function expression. function inside a variable:like
// const sayHi = function(){
//     console.log("Assalam o Alikum");
// }
// sayHi();
//more examples from chatgpt:
// const sayHi = function(){
//     console.log("sayHi");
// }
// sayHi();

// const greet = function(name){
//     console.log("Hello",name);
// }

// greet("Khalid");

// const plus = function(a,b){
//     console.log(a+b);
// }

// plus(3,9);

// const add2 = function (a,b){
//     return a+b;
// }

// const added = add2(8,9);
// console.log(added);

//Function declaration me function ko pehly cal kr sakty hn. jesy:
// greet("Ahamd");
// function greet (name){
//     console.log("Hello", name);
// }   

//Function expression me function pehly call nahi kr sakty. Error=Cannot access 'sayHi' before initialization
// sayHi();
// const sayHi = function(){
//     console.log("Assalam o Alikum");
// }  

// qun ke function declaration me java sript knows about the function declaration before running the code.
// function expration me cannot normally call it before the variable is assigned the function.
// ye same hoisting behavior he.

// Arrow Function:
// Ye JavaScript ES6 ne introduse kia he. Modren JS Development ye use hota he.
//Syntex: 
//const functionName = (parameters) => {
    // code
//};
//jesy:
// const greet = (name) => {
//     console.log("Hello",name);
// }
// greet("Ali");

//exampl of return
// const multiply = (n)=>{
//     return n*n;
// }
// const multi = multiply(5);
// console.log(multi);

//exampl of return direct apply without new variable
// const square = (n)=>{
//     return n*n;
// }
// console.log(square(2));

// const add = (a,b) => {
//     return a+b;
// }
// console.log(add(4,3));

// Note! ye "return" keyword or () ke bagher bhi can work jesy:
// const square = (n) => n*n;
// console.log(square(3));

// const add = (a,b) => a+b;
// console.log(add(4,7));

//like food delivery application or cost calculate krni he.cost: 1km =Rs.20. example:
// const deliveryCharges = (km) => km*20;
// console.log(deliveryCharges(5));

//ye same he below example ke

// const dCharges = function (km){
//     return km*20;
// }
// console.log(dCharges(10));

// and also of this example also:
// const charges = (km) => {
//     return km*20;
// }
// console.log(charges(15));

//3no methode same hn or:
// const square = (n) => n*n;
// console.log(square(3));
// ye sb se short he.
//mgr jb zrorat hogi th "return" keyword zaror aay ga.
//Default perameters jesy:
// const greet = (name= "Guest")=>{
//     console.log("Hello",name);
// }

// greet();// jb yahan() me koi value nahi ho gi default value (guest) print ho jy ga. 
//otherwise jo value den gy kesy Ahmad wo print ho jy gi.
// agr default value nahi rakhen gy "Hello" ke sath "undefide" show ga. 
// is se bachny ke liy uselly default value rakhi jati he.

// function order (Item, Quantity = 1){
//     console.log(Item + " x " + Quantity); //+ is being used to join things together.
// }
// order("pizza",3); //output pizza x 3
// order("Burger");// output Burger x 1. 
// value 1 by default show ho gi. agr function me = 1 nahi krty to "undefinde" show hota.
// jesy Daraz me koi Item add to cartr krty hn to by default value 1 show ho rahi hoti he.


//rest peramaters: it collects extra/many values into one array.
//Syntext function name(...values) {
//} jesy:

// const showNumbers = (...number) =>{
//     console.log("Number ", number);
//     }
// showNumbers(1,2,3,4,5,6);//result :Number  [ 1, 2, 3, 4, 5, 6 ]






// function totalMarks (...marks){
//     let total = 0; 
//     for(let mark of marks){ 
//         total+=mark; 
//     }
//     return total;
// }
// console.log(totalMarks(80,70,90));

// //Details:

// function totalMarks (...marks){// it means Collect all the values given to the function into one array.
//     let total = 0; //this variable is for keep the total marks. it stores the running total.
//     for(let mark of marks){ //loop is liy use kia ke rest perameters array type [''] result how krta he. is ko avoid kerny ke liy loop use kia.
//         total+=mark; //This is where we add each mark to total. += is assignment operators means add and assign
//     }
//     return total; // return sends the value back to the function call(console.log(totalMarks(80,70,90));) is me totalMarks() ye "function call" he.
// }
// console.log(totalMarks(80,70,90));



// let greet = (name) =>{
//     console.log("Hello", name);
// }

// greet("Ahmad");

// let add = (n) => n*n;
// console.log (add(5));

// let greet = (name) => console.log("hello", name);
// greet("ahmad");

// const DC = (km) => km*20;
// console.log(DC(5));

// function ordr (item, quantity = 1){
//     console.log(item + " x " + quantity);
// }
// ordr("pizza", 3);
// ordr("burger");

// same result with return

function ordr (item, quantity=1){
    return item + " x " + quantity;
}
console.log(ordr("pizza", 3));
console.log(ordr("burger"));
