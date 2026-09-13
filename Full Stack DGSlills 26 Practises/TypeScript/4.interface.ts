// interface student {
//     name: string;
//     age: number;
// }

// const s: student = {name: "ali", age: 20};
// //interfaces MERN me buht use kiy jaty hn

//optional properties in interfaces:
// interface user {
//     name: string;
//     age?: number;
// }

// const u: user = {name: "Sara"}; //agr "?" na hota to age declare krny ka error aata.
// console.log(u);

interface product {
    id: number;
    title: string;
    price: number;
}

const products:[] = [
    {id:1, title: "laptop", price: 500},
    {id:2, title: "phone", price: 20},
];

console.log(products);


