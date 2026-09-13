//Clousers: inner function or outer function= clousers
// Definition:
// Inner function + remembered outer variables = closure.
// function outer (){
//     let name = "Ali";

//     function inner(){
//         console.log(name);
//     }

//     inner();
// }

// outer();

//The inner function can remember/access the name variable from outer.

// function outer2 (){
//     let course = "MERN";

//     function inner2(){
//         console.log(course);
//     }

//     inner2();
// }

// outer2();

//outer2(): is se outer2 function ne call how. jis me ek variable he"course". or ek inner function he "inner2".
//inner2 print kr rha he outer2 ke variable ko. is ko Lexical Scope Kehty hn. 
// yani inner funtion apny srouding variables ko access kr sakta he.

// function outer3(){
//     let fName = "Ali";

//     function inner3(){
//         console.log(fName);
//     }

//     return inner3
// }

// const myfunction = outer3()
// myfunction();
// myfunction me inner3 return ho chuka he jo ke ek console print krt ga.

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
// console.log(account.checkBalance());
// console.log(account.deposit(500));


// function createBC(){

//     let balance = 1000;
    
//     return{
//         checkBalance: function (){
//             return balance;
//         },
//         deposit: function (amount){
//             balance = balance + amount;
//             return balance;
//         },
//     };
// }

// const acc = createBC();
// console.log(acc.checkBalance());
// console.log(acc.deposit(500));

// is ko data privacy ke liy bhi use kr sakty hn. qun ke is use ka jo bhi balance wo internal function ke liy accessible nahi he.
// only can console or Plus.

// function CreateDiscount (discount){
//     return function(price){
//           return  price-(price*discount)/100;

//         };
    
// }

// const StudentDiscount = CreateDiscount(20);
// const SpecialDiscount = CreateDiscount(50);
// console.log(StudentDiscount(1000));
// console.log(SpecialDiscount(1000));

// console.log(CreateDiscount(20)(1000));


// function SetupButton (massage){
//     const button = document.querySelector("#btn");
//     button.addEventListener("click", function (){
//         alert (massage);
//     });
    
// }

// SetupButton ("Welcome to Java Script");

// function createApi (baseUrl) {
//     return function(endpoint) {
//         return baseUrl+endpoint;
//     };
// }

// const api = createApi("https://api.example.com");

// console.log(api("/user"));
// console.log(api("/product"));

// function createbankaccount (){
//     let balance =1000;
//     return{
//         checkbalance: function (){
//             return balance;

//         },
//         deposit: function(amount){
//             balance = balance + amount;
//             return balance;
//         },
//     };
// }

// let account = createbankaccount();
// console.log(account.checkbalance());
// console.log(account.deposit(500));

// function createdis (discount){
//     return function (price){
//         return price - (price*discount)/100;
//     };
// }

// let studentdiscount = createdis(20);
// let specialdiscount = createdis(50);
// console.log(studentdiscount(1000));
// console.log(specialdiscount(1000));


// function SetupButton(message){
//     const button = document.querySelector("#btn"); refer to buttn id in HTML
//     button.addEventListner("click", function(){
//         alert(message);
//     });
// }

// SetupButton("welcome to java script course");

function createApi(baseUrl){
    return function (endpoint){
        return baseUrl + endpoint;
    };
}

const api = createApi("https://api.example.com");
console.log(api("/feature products"));
console.log(api("/users"));

