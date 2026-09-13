// call back function

// function greet (name, callback) {
//     console.log("hello", name);
//     callback();
// }

// function load (){
//     console.log("data loaded");
// }

// greet("sajjad", load);


// Promis

// normal function:
// function login (user, password){
//     if (user === "admin" && password === "1234"){
//         console.log("login successfully");
//     }
//     else {
//         console.log("logim faled");
//     }
// }

// login("admin", "12345");

// promis functuin

// function login (user, password){
//     return new Promise ((resolve, reject) => {
//         if (user === "admin" && password === "1234") {
//             resolve ("login Successfully");
//         } else {
//             reject ("login failed");
//         }
//     });
// }

// login ("admin", "12345")
// .then ((result) => {
//     console.log(result);
// }
// )

// .catch ((err) => {
//     console.log(err);
// });

// function login (user, pw) {
//     return new Promise((resolve, reject) => {
//         if (user === "admin" && pw === "1234"){
//             resolve("success");
//         }else {
//             reject("fld");
//         }
//     });
// }

// login("admin", "1236")
// .then ((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// });

//async await

// async function ko promis return krny wala function baan deta he.
// promise me hame .then or .catch ka function use krna hota he.

// async function sayHello (){
//     return "Hello Student";
// }

// sayHello() .then((msg) => {
//     console.log(msg);
// }) 
// async se normal function promis me change ho gea.
//await: is ka kam ksi promis ke result ka wait krna he.

// async function sayHello(){
//     return "Hello";
// }

// const data = await sayHello();
// console.log(data);
//mean jo promis return hona he, us ke resolve ya reject hony ka wait kro, us ke baad meri out put console kr do.
// async await use hota he promis chining ke consept ke sulotion ke liy.

// function getUser(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("user loaded");
//         }, 2000);
        
//     });
// }

// async function loadUser() {
//     let result = await getUser();
//     console.log(result);
    
// }
// console.log("1");

// loadUser();

// console.log("2");

// function getUser(){
//     return new Promise((resolve) => {
//         setTimeout(()=> {
//             resolve("dataLoaded");
//         },2000 );
//     });
// }

// async function loadUser (){
//     let result = await getUser();
//     console.log(result);
// }

// loadUser();

// function fetchData (){
//     return new Promise((resolve) => {
//        resolve("Hello"); 
//     });
// }

// fetchData() 
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// async function load() {
//         try{
//         let data = await fetchData();
//         console.log(data);
//     } catch (err) {
//     console.log(err);
//     }
// }

// dono tariqy theek hn

// async function getPost() {
//     console.log("7")
//     try{
//         console.log("4");
//         let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//         console.log("3")
//         let data = await response.json();
//         console.log("data", data.length);
        

//     } catch (error) {
//         console.log(error);

//     }
    
// }
// console.log("9");
// getPost();
// console.log("8");


async function getPost(){
    try {
             let response = await fetch("https://jsonplaceholder.typicode.com/todos");
             let data = await response.json();
            console.log("Data", data.length);

    } catch (err) {
        console.log(err);
    }
    
}

    getPost();