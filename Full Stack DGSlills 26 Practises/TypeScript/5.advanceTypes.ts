//union Type
//Literal Type
//Type Aliases

//Union Type:

let id: string | number; // ya to string save kr sakty hn ya number.
id = 101;
id = "EMP101";
id = true;  // Error


//Literal Type: is ko Enum type bhi kehty hn.

let direction: "lef" | "right" | "UP" | "Down";
direction = "left";
direction = "forword";  // Error


//Type Aliases
type userID = string | number;
type user = {name:string; age:number; id:userID};
const User:user = {name:"Ali", age:22, id:1001}; //id ko string "1001" bhi kr sakty hn.



