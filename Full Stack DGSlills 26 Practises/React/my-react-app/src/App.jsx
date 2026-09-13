// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import { useState } from 'react';
import './App.css';


//using Tailwind 
// function App () {
//   return(
//     <div className='min-h-screen flex items-center justify-center bg-gray-200'>

//       <h1 className='text-5xl font-bold text-blue-600'>Hello Tailwind</h1>
      
//     </div>
//   );
// }
// export default App;

//JSX: JSX stands for JavaScript XML, is ki help se HTML code bhi javascript me mention kr sakty hn.
//rule: return keyword ke sath ek hi tag mention kr sakty hn.
// return (
// <h1>welcome</h1>
//<p>java script </p>
// );
//ye wrong methode he
//
//
//
//
//java script Expression inside React Js:

// function App () {
//   const name = "Ali";
//   return (
//     <div>
//       <h1>Hello {name}</h1>
//       <p>Welocm to React</p>
//       <button className="btn">Start Learning</button>
//     </div>
//   );
// }
// export default App;


//using if:
//in Java Scritp we use if like this this:
// let isLoggedIn = true;
// if (isLoggedIn){
//   console.log("welcome");
// } else{
//   console.log("Please login");
// }

// //in React:
// function App () {
//   const isLoggedIn = true;
//   if(isLoggedIn) {
//     return <h1>Welcom</h1>;
//   }
//   return <h1>Please login</h1>;
// }
// export default App;

//Ternary Operators= ? :
// const isLoggedIn = true;
// return <div>{isLoggedIn ? <h2>Welcome</h2> : <h2>Please login</h2>}</div>;

//Logical AND (&&) Operators:
// ye jb use krty hn if ke sath else na ho, yani agr condition true he to do it wrnw do nothing.
// const hasNotification = true;
// return <div>{hasNotification && <p>You have new notification</p>}</div>;

// React fragment:
// use this <> </> instead of <div>. some time people use <React.fragment> </React.fragment>
// resaon ye he ke div se unnecessery div create ho ga jo some time problem create krta he.

// Rendring list

// function App (){
//   const fruites = ["Apple","Banana","Mengo"];
//   return (
//     <ul>
//       {
//         fruites.map((fruit) => (
//         <li>{fruit}</li>
//       ))}
//     </ul>
//   );
// }

// export default App

// is me out put to show hoga but console me error show hoga ke: 
// Each child in a list should have a unique "key" prop.
// reason ye he ke jb nap use krty hn to browser expet ke uniqe key pass krni he.

// function App (){
//   const fruites = ["Apple","Banana","Mengo"];
//   return (
//     <ul>
//       {
//         fruites.map((fruit, index) => (
//         <li key={index}>{fruit}</li>
//       ))}
//     </ul>
//   );
// }

// export default App

//ab error show nahi ho ga.

//complet example
// function Aap () {
//   const student = ["Ali", "Ahmad", "Sara"];
//   const isTeacher = true;
//   return(
//     <>
//     <h1>React Class</h1>
//     {isTeacher && <p>Teacher Mode</p>}

//     <ul>
//       {student.map((students, index)=> (
//         <li key={index}>{students}</li>
//       ))}
//     </ul>
//     </>
//   );
// }

// export default Aap;

//Components Basics:
// Examples: Headers, footers, navebars

//What is a Functional Component?
//A functional component is simply a JavaScript function that returns JSX
//practice: 
// src folder me component ka folder create kren:
//phr is folder me like header ke liy Header.jsx file create kren.
//Rules:
//1. define the function
//2. expoert the function
//3. jis file me use krna he us me import the function 
//like: import Header from "./components/Headr.jsx";
// examples:
//function Header () {
//    return <h2>Welcome to DG Skills MERN Course</h2>;
//}

//export default Header;
// import Header from './Components/Header';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';

// function App () {
//     return(
//         <>
//         <h1>Hello</h1>
//         <Header />
//         <Navbar />
//         <Footer />
//         </>
//     );

// }

// export default App;

//Component name PascalCase hona chahiy:
//PascalCase is a naming convention where the first letter of every combined word is capitalized like Header.
//otherwise agr small letter ho like header to react us ko as html tag conseder kry ga.
//
//
// Props: are used to pass data from one component to another.(Parent components se child componenet me data pass krna.)
//Chat GPT: In React, props (short for properties) are used to pass data from a parent component to a child component.
//jesy agr props use na kren to 
{/* <h2>Ali</h2>
<h2>Ahmad</h2>
<h2>Sara</h2> */}
//bar bar h2 tag use kren gy.
//example: hm ne props component banaya Student.jsx us ko hm aesy use kren gy:
// import Student from './Components/Student';

// function Aap() {
//     const name = "Ali";
//     return(
//         <div>
//         <h2>Hello {name}</h2>
//         <p>Welocm to React</p>
//         <button>Start Learning</button>
//         </div>
//     );
// }

// export default Aap;

// is ki jaga hm ye use kr sakty hn:

// function Aap () {
//     return (
//         <div>
//             <Student name="Ali" />
//         </div>
//     );
// }
//  export default Aap;
 // ab agr Student.jsx wali file me : console.log("props ", props) lkehn to broesr me ye aesy show hoga:
 //props  
 // Object
// name
// : 
// "Ali"

// to probs ne ek object create kia jis me name ki ek key he or value Ali he. ab is me jo bhi value pass kren gy wo print ho jy gi.
//Student components me props.name ko h2 ke tag me return kia he. jis ki waja se name ki key ke stah jo vlue den gy wo output me show ho gi.
//
//multipul props bhi create kr sakty hn. jesy Student component me ye code write kren:
// function Student (props){
//     // console.log("props ", props) // ye code ka part nai. only consol dekhny ke liy likha tha .
//     return (
//     <>
//     <h2>Name: {props.name}</h2>
//     <h2>Age: {props.age}</h2>  {/* we can reuse prps component */ }
//     <h2>City: {props.city}</h2>
    
//     </>
//     );
// }

// export default Student; 

// Aap.jsx ka code:
// function Aap () {
//     return (
//         <div>
//             <Student name="Ali" age={15} city="Lahore" /> {/* props me number ko {} me likhen gy */}
//             <Student name="Ahmad" age={20} city="Karachi" /> 
//             <Student name="Sara" age={18} city="IslamAbad" />

//         </div>
//     );
// }
//  export default Aap;

//Props Data type: String, Number, Boolean, Array, Object, Function, JSX

//{/* Children Props*/}
// React automaticlly provide a special prop called "chidren".
// it contain every thing wtiren between the opening and closing tags of a components.

// import Card from './Components/Card';

// function Aap(){
//     return (
//         <>
//         <card>
//             <h2>Hello from main file</h2> {/*is me aap whole HTML file bhi pass kr sakty hn */ }
//         </card>
//         </>
//     );
// }

// export default Aap;

// Props Drilling
// like Aap>Parent>Child> GrandChild
// import Parent from './Components/Parent';

// function Aap () {
//     const studentName = "Ali";
//     return (
//         <div>
//             <h1>React Prop Drilling </h1>
//             <Parent studentName={studentName} />
//         </div>
//     );

// }

// export default Aap;

//// output me "Name: Ali" value parent se child or phr grandchild me pass ki gi he.


// Pronlem with props Drilling:
//too much repeated code. jesy above example me studentName ko multipal component se guzar rahy hn.
//Hard to mentain
//Difficult to understand
//Every Intermidiate component recevie unnecessary Props
//mgr is sb ke bawojod props drilling is not wrong.
// is ka solution context API or redux API he jo baad me parhen gy.


//
// is ke liy Student.jsx waly eaxamlpe me jain gy.


// import Student from './Components/Student';
// function Aap () {
//     return (
//         <div>
//             <Student name="Ali" age={15} city="Lahore" /> {/* props me number ko {} me likhen gy */}


//         </div>
//     );
// }
//  export default Aap;

//  // is function ka componenet is tarah craat kren :
//  function Student ({name, age, city}){ {/* Destructuring Props: */}
// //     // console.log("props ", props) // ye code ka part nai. only consol dekhny ke liy likha tha .
// //     return (
// //     <>
// //     <h2>Name: {name}</h2>  {/* is me bar bar props likhny ki zarorat nahi */ }
// //     <h2>Age: {age}</h2>
// //     <h2>City: {city}</h2>
    
// //     </>
// //     );
// // }

// // export default Student; 


//useState Basics:
// code without useState:

// function Aap(){
//     let count = 0;
//     return (
//         <>
//         <h1>{count}</h1>
//         <button
//         onClick={() => {
//             count++;
//             console.log(count);
//         }}
//         >
//         Increment    
//         </button>
//         </>
        

//     );
// }

// export default Aap;
// is oper waly code se count console me to show ga but browser me show nahi hoga.
//is ke solution ke liy React me useState ki command he.

// import { useState } from 'react'; //useState is a React Hook that lets a component remember information (state) and update the screen when that information changes.

// function Aap () { 
//     const [count, setCount] = useState(0); 
//     // ye useState ja syntx he. count variable he, or setCount function he jo respocple he ke hm apni value ko kesy update kren gy. 
//     // or useState jo hm ne import ki us me by default value 0 set krdi. 
//     // useState is ke liy responsple he ke jb bhi us me koi update ho gi, vertualDOM us ke according update hoga, or us ke accordingly actual dom me update ho gi.
//     //JavaScript me is ke liy hm like count.InnerHTML use krty thy, ye kam ab useState kr raha he
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={() => setCount(count + 1)}>Increment</button> {/*  count++ ki setCount use kren gy. setCount jo ke ek function he, wo count(0) me 1 ko + kr raha he */ }

//         </>
//     );
// }

// export default Aap;

// import { useState } from 'react';

// function Aap () {

//     const [name, setName] = useState("");
//     return (
//         <>
//         <input value={name} onChange={(e)=> setName(e.target.value)}/>
//         <h2>Hello {name}</h2>
//         </>
//     );
// }

// export default Aap;

// import { useState } from 'react';
// function Aap () {
//     const [dark, setDark] = useState(false);

//     return(
//         <>
//         <button onClick={() => setDark(!dark)}>Toggale Theme</button>
//         <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>
//         </>
//     );
// }

// export default Aap;


// import { useState } from 'react';

// function Aap () {
// const [count, setCount] = useState(0);

//     return (
//         <>
//         <h1>{count}</h1>
//         <button onClick={() => setCount (count +1)}>+</button>
//         <button onClick={()=> setCount(count - 1)}>-</button>
//         <button onClick={() => setCount(0)}>Reset</button>
//         </>
//     );

// }

// export default Aap;

//State with Objects

// function Aap(){

//     // const [name, setName] = useState ("");
//     // const [rollNo, setRollNo] = useState("");
//     // const [age, setAge] = useState(0);
//     // const [city, setCity] = useState("");  // is ki jaga hm object use kren gy like this:

//     const [student, setStudent] = useState ({  //useState me Object use kia he
//         name: "Ali",
//         rollNo: 101,
//         age: 20,
//         city: "Lahore",
//     });

//     return (

//         <div>
//             <h2>{student.name}</h2>
//             <p>{student.age}</p>
//             <p>{student.city}</p>
//             <button 
//             onClick={() =>
//                 setStudent({   //set function se object me changing krni he
//                     ...student,  //... three dot ne student object ki copy create kr di he.
//                     city: "Karachi", //city change kr di he
//                 })
//             }
//             >Change City</button>
//         </div>
//     );


// }

// export default Aap;

//Nested Object

// function Aap () {
//     const [user, setUser] = useState({
//         name: "Ali",
//         address: {                  //ye nested object he
//             city: "Lahore",
//             country: "Pakistan",
//         },
//     });

//     return (
//         <div>
//             <h2>{user.name}</h2>
//             <p>{user.address.city}</p>
//             <p>{user.address.country}</p>
//             <button onClick={() =>
//                 setUser({
//                     ...user,
//                     address:{
//                         ...user.address,
//                         city: "Islamabad",
//                     },
//                 })
//             } >Change City
            
//             </button>

//         </div>
//     );


// }

// export default Aap;

//useState in arrays
//Add something in Array

// function Aap () {
//     const [fruites, setFruites] = useState(["Apple", "Mango"]);
//     return (
//         <div>
//             {fruites.map((fruit) => (
//               <p>{fruit}</p>  
            
//             ))}

//             <button onClick={() => setFruites([...fruites, "Orange"])}>Change Frouites</button>
//         </div>
//     );
// }

// export default Aap;

//remove some thing from Array

// function Aap () {
//     const [fruites, setFruites] = useState(["Apple", "Mango"]);
//     return (
//         <div>
//             {fruites.map((fruit) => (
//               <p>{fruit}</p>  
            
//             ))}

//             <button onClick={() => setFruites(fruites.filter((fruit) => fruit != "Apple"))}>Change Frouites</button>
//         </div>
//     );
// }

// export default Aap;
