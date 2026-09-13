// array syntex 
//  let fruites = ["Mengo", "Apple"];
//array call:
// console.log(fruites); //result: [ 'Mengo', 'Apple' ]
// console.log(fruites[0]); // result: Mengo
// console.log(fruites[1]); // result: Apple
//.push();: use for add a value at end.
//.unshift();: use for add a value at start.
//.pop();: use for remove last value
//.shift();: use for remove first value
// let fruites = ["Mengo", "Apple"];
// fruites.push("Kiwi");
// fruites.unshift("Pinipple");
// fruites.pop();
// fruites.shift();
// console.log(fruites); // result: [ 'Mengo', 'Apple', 'Kiwi' ]
// console.log(fruites); // result: [ 'Pinipple', 'Mengo', 'Apple', 'Kiwi' ]
// console.log(fruites); // result: [ 'Pinipple', 'Mengo', 'Apple' ]
// console.log(fruites); // result: [ 'Mengo', 'Apple' ] 

//.length: usually tells the loop how many items it needs to go through.
//.length helps determine when the loop should stop by telling it how many items are in the array.
//Array iteration: going through items one by one
//we use loop for Array iteration. like:

// let fruites = ["Applie", "Mengo", "Orange", "Pinniple", "Kiwi"];
// for (let i = 0; i < fruites.length; i++){
//     console.log(fruites[i]);
// }
// result:
// Applie
// Mengo
// Orange
// Pinniple
// Kiwi

//.forEach(): used to go through every item in an array, one by one.
//it is same to "for" (loop). no difference in output here.
//only syntex difference
// let fruites = ["Apple", "Mango", "Orange", "Pinniple","Kiwi"];
// fruites.forEach (function (frut){  // Normal Gunction
//     console.log(frut)
// });
// fruites.forEach((frut) => {  // Arrow Function with {}
//     console.log(frut);
// });

//output for  all:
// Apple
// Mango
// Orange
// Pinniple
// Kiwi

// fruites.forEach((frut) => console.log(frut)); // Arrow function without {} 

//.map();: creates a new array by performing a function on each array element

let prices = [100, 200, 300]; 
// let updatedPrice = prices.map(function(value){  // normal function
//     return value*2;

// });

// let updatedPrice = prices.map((value) => {  // arrow function
// return value*2
// });

// let updatedPrice = prices.map((value) => value*2); // arrow function without {}

// console.log(prices); // result: [ 100, 200, 300 ]
// console.log(updatedPrice); // result: [ 200, 400, 600 ]

//.filter(); : use for filter

// let ages = [12, 18, 20, 15];
// let adults = ages.filter(function(age){
//     return age >= 18;
// });
// let adults = ages.filter((age) =>{ 
//     return age >=18
// });

// let adults = ages.filter((age) => age >= 18);
// console.log(adults); //[ 18, 20 ]
// console.log(ages); // [ 12, 18, 20, 15 ]

//.forEach(); .map(); .filter(); ye 3no prictically buht ziada use hoty hn

//.reduce() takes all elements of an array and reduces them to one final value.
// let marks = [10, 30, 50];
// let total = marks.reduce(function(sum, mark){ //function me two parameter put krny hn. sum and mark ki jaga a, b bhi kr sakty hn.
//     return sum + mark;  //is ko sum * mark bhi kr sakty hn. 
// }, 0);  // 0 ko 10 kr dn gy to result 100 ho ga
// console.log(total); // result: 90
// Expalinetion:
// numbers → array
// .reduce() → array method
// sum → accumulator/result so far
// num → current element
// sum + num → operation you want to perform
// 0 → initial value
// total → stores the final returned result

// let marks = [10, 30, 50];
// let total = marks.reduce((a, b) => a+b, 0);
// console.log(total); //result 90

// let total = marks.reduce((a, b) => a+b, 10);
// console.log(total); //result 100

// let total = marks.reduce((a, b) => a*b, 0);
// console.log(total); //result 0

// let total = marks.reduce((a, b) => a*b, 1);
// console.log(total); //result 15000


// ecommerce me cart me jo data save hota he ya instagram me jo post jo save hoti he wo array ke methode se save hoti he.