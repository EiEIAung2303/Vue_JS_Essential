//built in array methods

//let users = ["Aung Aung", "Maung Maung", "Kyaw Kyaw"];
// let users = [
//   {
//     name: "Aung Aung",
//     age:30,
//     income:100000,

//   },
//   {
//     name: "Maung Maung",
//     age:25,
//     income:90000,
//   },
//   {
//     name: "Kyaw Kyaw",
//     age:22,
//     income:80000,
//   },
//   {
//     name: "Soe Soe",
//     age:22,
//     income:80000,
//   }
// ]

// let newUsers = users.map((user) => ({
//  // name : user
//  user
// }));
  //return user;  //return array
  //return {name:user};  //return object array
  //return <h1>${user}</h1> //react style
 
// console.log(newUsers);
// document.writeln(newUsers);


//filter return condition
// let filterArray = users.filter((user) => user.age >= 25);
// console.log(filterArray);

//Elements to insert at the end of the Array.
//users.push("Soe Soe");

//Elements to insert at the start of the Array.
// users.unshift("Moe Moe");


//reverse
// users.reverse();
// console.log(users);

//find
// let filterArray = users.find((user) => user.age >= 25);
// console.log(filterArray);

//total is new variable
// let totalIncome = users.reduce((total,user)=>{
//   return total += user.income;
// },0);

// let totalIncome = users.reduce((total,user)=>(total += user.income),0);

// console.log(totalIncome);

//findIndex
//let findIn = users.findIndex((user) => user.name == "soe soe");
//console.log(findIn);

//splice
// users.splice(3,1);
// console.log(users);

//concat
// let hege = ["Cecilie", "Lone"];
// let stale = ["Emil", "Tobias", "Linus"];
// //let children = hege.concat(stale);
// let children = hege.concat(stale);
// console.log(children);

//join
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let energy = fruits.join(" ");
// console.log(energy);

//pop
//let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);

//shift
// fruits.shift();
// console.log(fruits);

//sort
// fruits.sort();
// console.log(fruits);

// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let citrus = fruits.slice(1,2);
// console.log(citrus);

// var sampleArray = [ 1, 2, 3, 4, 5 ];
// var sampleArray2 = [ 0, -1, -30, 5];
// // function tester(number){
// //   return number > 0;
// // }
// // console.log(sampleArray.every(tester)); // returns true

// // console.log(sampleArray2.every(tester)); // returns false

// sampleArray.every( number => number > 0 ); // returns true
// sampleArray2.every( number => number > 0 ); // returns false

//includes
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var n = fruits.includes("Mango");
// console.log(n);

// var myArr = Array.from("ABCDEFG");
// console.log(myArr);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2,0);
console.log(fruits);



