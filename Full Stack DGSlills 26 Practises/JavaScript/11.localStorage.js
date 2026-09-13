//Local Storage means Browser storage
//Local Storage me key+value pair me store hota he
//Data us time tk save rahy ga jb tk hm khud delete nahi kr dn
//Dta strin ke formate me save ho ga.
//like Dark mode or Light mode ki setting me jo setting select kr lety hn, wo hi browser me save ho jati he.
//mostly websites user ka user name browser me save kr leti hn.
//Add to cart ka data save rehta he.
//Data save krny ke ly:

// function saveData(){
// localStorage.setItem("name", "Ali");
// alert("saved!");
// }

// const name = localStorage.getItem("name");
// console.log(name);

// function remove (){
//     localStorage.removeItem("name");
// }
// remove();

//Data String formate me hona chahiy, agr na ho to code ye ho ga:

// function saveData () {
//     const user = {
//     name: "waleed",
//     age: 20
// };
// localStorage.setItem("user", JSON.stringify(user));
// alert("saved!");
// }

// function remove (){
//     localStorage.removeItem("user");
// }
// remove();

//StringifyData get krna ho json.parse use kren gy. ye data ko actuale formate me ly aay ga.

// const test = JSON.parse(localStorage.getItem("user"));
// console.log(test);


// function saveName () {
//     const user = document.getElementById("name").value;
//     localStorage.setItem("storeName", user);
// }

// function loadName () {
//     const load = localStorage.getItem("storeName");
//     document.getElementById("output").innerText = load;
// }

function saveName () {
    const storeName = document.getElementById("name").value;
    localStorage.setItem("saveName", storeName);

}

function loadName () {
    const load = localStorage.getItem("saveName");
    document.getElementById("output").innerText = load;

}




