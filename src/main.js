//1.Using Statements
//console.log("Hello");
//console.log("Ei Ei Aung");

//2.Defining and Using Function
// const myFunc = function() {
  // console.log("This Statement is inside this function");
// };
// console.log("This Statement is outside this function");
// myFunc();

//3.Defining Functions with Parameters
// function myFunc(name, weather) {
  // console.log("Hello " + name + ".");
  // console.log("It is " + weather + " today.");
// }
// myFunc("Ei Ei Aung", "Sunny");

//4.Defining Default and Reset Parameters
// function myFunc(name, weather = "rainy") {
  // console.log("Hello " + name + ".");
  // console.log("It is " + weather + " today.");
//  }
// myFunc("Thomas");

//function myFunc(name, weather, ...extraArgs) {
  // console.log("Hello " + name + ".");
  // console.log("It is " + weather + " today.");
  // for (let i = 0; i < extraArgs.length; i++) {
    // console.log("Extra Args" + extraArgs[i]);
  // }
//  }
// myFunc("Thomas", "Sunny", " first", " second");

//5.Defining  Functions that return results
// function myFunc(name) {
//   return ("Hello " + name + ".") ;
// }
// console.log(myFunc("EEA"));

//Using Functions as Arguments to Other Functions
// function myFunc(nameFunction) {
//   return ("Hello " + nameFunction() + ".");
// }
// console.log(myFunc(function() {
//   return "Thomas";
// }));

// function myFunc(nameFunction) {
//   return ("Hello " + nameFunction() + ".");
// }
  
// function printName(nameFunction, printFunction) {
//     printFunction(myFunc(nameFunction));
//   }
  
// printName(function() {
//   return "Adam"}, console.log);

//ES6 Style with arrow function
const myFunc = (nameFunction) => ("Hello " + nameFunction() + ".");

const printName = (nameFunction, printFunction) =>
printFunction(myFunc(nameFunction));

printName(function() {return "Adam"}, console.log);
