//Fetch methods:
//1.Get >> Read Data
//2.Post >> Create Data
//3.Put >> Update Data
//4.Delete >>Delete Data
//  in 4 ko CRUD Opretions kehty hn.
//  ye featuer server or clint me comunication kr wata he.ye ek promis return krta he.
//  
//Structure:

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((Response) => Response.json())  //jsom= java script object notetion.
// .then((data) => {
//     const users = document.getElementById("users");
//     
//     data.forEach(user => {
//         users.innerHTML += `<li>${user.phone}</li>`//
//         users.innerHTML += `<li>${user.name}</li>`        
                
//     });
// });

// post structure:

// fetch(
//     "https://jsonplaceholder.typicode.com/post",
//     {
//         method: "POST",
//         headers: {
//             "content-type": "application.json",
//         },
//         body: JSON.stringify({ //data over the internet json form me travel nahi krta. is liy stringify kr ke post krty hn.
//             name: "Ali",
//             age: 22,
//         }),
//     }

// );


// one more example:
// const button = document.getElementById("loadBtn");
// const usersList = document.getElementById("users");

// button.addEventListener("click", () => {
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((Response) => Response.json())  //json= java script object notetion.
// .then((data) => {
//     usersList.innerHTML = "";
    
//     data.forEach(user => {
//         // users.innerHTML += `<li>${user.phone}</li>`
//         usersList.innerHTML += `<li>${user.name}</li>`        
                
//     });
// })
//     .catch((error) => {
//         console.log("Error", error);
        
//     });

// });

let button = document.getElementById("loadBtn");
let userList = document.getElementById("users");

button.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response) => Response.json())
    .then((data) => {
        userList.innerHTML = "";
        data.forEach(user => {
            userList.innerHTML += `<li>${user.name}</li>`
        });

    })
    .catch((error) => {
        console.log("Error", error);
        
    });



});