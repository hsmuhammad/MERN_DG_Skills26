"use strict";
//Functions & Type Annotations
// function greet (name: string):void { //voide ka matlb ke ye function kuch return nahi kry ga.
//     console.log("Helio "+ name);
// }
// greet("waleed"); // is ko node practice.ts ke sath run kren to out put Helio waleed ho gi.
// // agr is ko greet(5); kr dn or tsc practice.ts ke sath run kren to error show hoga.
//mention function parameturs type like:
// function add (a: number, b: number): number {
//     return a+b;
// }
// let reusult: number = add(10,20); // agr number ki jaga string kren gy to compile time essue aay ga.
// console.log(reusult);
//return type for better readability
// function square (num: number): number { //mean kr result bhi number ho
//     return num*num
// }
// function welcome (name: string): string {
//     return "welcom" + name;
// }
// variable can also store function with spesific signature like: 
// let multiply; // let multiply: (a: number, b: number) means variable must contain a function that receives two numbers. | => number means function must return a number.
// multiply = (x, y) => x * y; // Now we're actually assigning a function to multiply.
//It's basically:
//multiply = function(x, y) {
//return x * y;       
//};
//let multiply: (a: number, b: number) => number; is the rule:"Any function stored in multiply must take 2 numbers and return a number."
//Then: multiply = (x, y) => x * y; follows that rule. ✅
// optional Parameters:
function introduce(name, age) {
    if (age) { //agr mention ho like: introduce("Ali", 22);
        console.log(name + " is " + age);
    }
    else {
        console.log(name);
    }
}
// introduce("Ali");
// introduce("Ali", 22);
//"?" make a parameter optional. optional parameter come after required ones.
