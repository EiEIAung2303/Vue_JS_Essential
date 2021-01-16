//working with objects
// let myData = new Object();
// myData.name = "Adam";
// myData.weather = "Sunny";
// let myData = {
//   name: "Adam",
//   weather: "Rainny",
// }
// console.log(myData);  //Object { name: "Adam", weather: "Sunny" }
// console.log(`Hello ${myData.name}.`);  //Hello Adam.
// console.log(`Today is ${myData.weather}.`); //Today is Sunny.


//Using Variables as Object Properties

// let name = "John";

// let myData = {
//   name,
//   weather: "Cloudy",
// };

// console.log(myData);

//Using Functions as Methods
// let myData = {
//   name: "Adam",
//   weather: "Rainny",
//   printMessages: function() {
//     console.log(`Hello ${myData.name}.`);
//     console.log(`Today is ${myData.weather}.`);
//   }
// }

// myData.printMessages();

// let myData = {
//   name: "Adam",
//   weather: "Rainny"}

//   let test = myData;
//   test.name = "Smith"
//   console.log(myData.name);  //refrence copy
//   console.log(test.name);


//No reference Copy method using Object.assign
// let myData = {
//   name: "Adam",
//   weather: "Rainny"}

//   //not use reference
//   let test = Object.assign({}, myData);
//   test.name = "Smith"
//   console.log(`From Data`, myData);  //refrence copy
//   console.log('From test', test);

//No reference Copy method using
let myData = {
  name: "Adam",
  weather: "Cloudy"}

  //not use reference
  let test = JSON.parse(JSON.stringify(myData));
  test.name = "Smith"
  console.log(`From Data`, myData);  //refrence copy
  console.log('From test', test);
  




