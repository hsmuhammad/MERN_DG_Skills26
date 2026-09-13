//insatallatin: npm install -g typescript
//check installation: tsc -v
//The TypeScript compiler is called: tsc
//For example, later you'll have: app.ts and use: tsc app.ts which creates: app.js

// let studintName: string = "Ali";
// studintName = 5; //error show ho ga, qun ke type string define ki he.compile kr ny ke liy command(tsc practice.ts) run krty hn to is me bhi error show ho ga.

// let age: number = 5
// age = true; // error

let studintName: string = "Ali";
let marks: number = 90;
let passed: boolean = true;
let skills: string [] = ["HTML", "CSS"];

//agr studentName ko ali se waleed krna ho like:
studintName = "waleed"; // ye ok he
 
//TypeScript inference
//TypeScript inference means TypeScript can automatically figure out the type of a variable, 
//so you don't always have to write the type yourself. like:

// let studintName = "Ali";
// let marks = 90;
// let passed = true;
// let skills = ["HTML", "CSS"]; 

// it will work.  qun ke type script ko basil types ka idea hota he.

