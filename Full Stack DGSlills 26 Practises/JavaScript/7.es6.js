//Template Literal Syntax:
//backticks + ${}
//backticks = `  | uses backticks ` instead of quotes
//Example:


// let name = "Ahmad";

// console.log(`Hello ${name}`);

// Example:

// let email = `Dear all,
// you MERN Class will start at 8:00 pm.
// Please join on time.

// Thanks`;

// console.log(`Email is ${email}`);

//double quotes " " me line break ke liy \n required hota he. but backticks ` ` me ye required nahi.
// back end me jb hm email template defind kr rahy hn gy to template liiril ko buht zeada usekr rhay hn gy.

// Array destructure: 
// Array destructuring means: Taking values out of an array and putting them into separate variables.
// old method:
// var fruits = ["Apple", "Mango", "Oreng"];

// var first = fruits[0];
// var second = fruits[1];
// var third = fruits[2];

// console.log(first, second, third );

// ES6 method :

// let fruts = ["Apple", "Mango", "Orange"];
// let [frst, scond] =fruts;
// console.log(frst, scond); //result: Apple Mango 
// agr ksi resion se mango ko skip krna he to dermian me , add kr dn gy.
// like: let [frst, , scond]; console.log(frst, scond); result Apple Orange

// Object destructure:
// let user = {
//     firstname: "Ali", 
//     age: 22,
//     city: "Lahor",

// };
// let {firstname, age} = user;
// console.log(firstname, age);

//DOM Manipulation
//DOM = Document Object Model: DOM is the browser's JavaScript representation of your HTML page.
// DOM like a map, jo java sript ko ye bata he ke kon si cheez kahan update krni he.
//For example, your HTML:

//<h1>Hello</h1>
//<button id="btn">Click me</button>

//When the browser loads it, it creates a DOM tree:

// Document
//  ├── h1
//  │    └── "Hello"
//  │
//  └── button
//       └── "Click me"

//JavaScript can use the DOM to find and change HTML elements.
//const button = document.getElementById("btn");
// document → the HTML page's DOM
// querySelector() → finds an element
// "#btn" → finds the element with id="btn"
// Then you can change it:
//button.innerHTML = "Clicked!";

// document.querySelector like:
// document.querySelector(".box");   // finding class
// document.querySelector("button"); // finding tag
// document.querySelector("#btn");   // finding ID

//getElementById() finds ID only  |  querySelector() finds CSS selectors

// more examples:
// HTML
//<h1 id="title"> Welcome Student</h1>//
//<p class="message">Learnig DOM today</p>
//<ul id="topics">
//    <li>Selecting Elements</li>//
//    <li>Changing Content</li>
//</ul>
//<button id="changeBtn">Change Page</button>

// let title = document.getElementById("title");//ya aesy kr ln:
// let title = document.querySelector("#title"); //select by id
// let message =document.querySelector(".message"); // select by calss
// let topic = document.querySelector("ul"); // select by tag
// title.innerHTML = "Dom is working";
// message.innerHTML = "Welcome Back";
// topic.innerHTML = "<li> Topic 1 </li> <li> Topic 2 </li>";
//message.textContent = "Welcome Again";

// innerHTML ki jaga textContent bhi use kr sakty hn.
//difference:
//innerHTML Works with HTML tags too, like btn.innerHTML = "Hello <b>Ali</b>";
//textContent Works with text only.
// message.style.color = "green";
// message.style.backgroundColor = "yellow";

//buttion click ho to text change ho jy:

// const title = document.querySelector("#title");
// const btn = document.querySelector("#ChangeBtn");
// btn.addEventListener("click", function(){
//     title.textContent = "Welcome to DG Skills";
// });

// form submit ho to input feild ka text show jay ya similar:
// const form = document.querySelector("#form");
// const inputName = document.querySelector("#name");
// const message = document.querySelector("#message");

// form.addEventListener ("submit", function(){
//     event.preventDefault();
//     // message.textContent = inputName.value;
//     // ya
//     message.textContent = "Thank you for submit";
// });
// is method me name show to ho jy ga mgr foran hidde ho jay ga, qun ke submit button browser ko refresh kr deta he.
// is ke liy hm use krty hn: event.preventDefault ();

const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

btn.addEventListener("click", function(){
        if (input.value === "") {
        return;
    } // added by cahtgpt qun ke is ke bagher empty input field me bhi empty task add ho raha tha.
    const li = document.createElement("li");
    li.textContent = input.value;
    list.append(li);
    input.value = "";
    const dlt = document.createElement("button");
    dlt.textContent = "Delete Task";
    li.append(dlt);
    dlt.addEventListener("click", function(){
        li.remove();
    });
});








