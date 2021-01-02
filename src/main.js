//Using
function myFunc(name) {
  let myLocalVar = "sunny";
  // let innnerFunction = function() {
  //   return ("Hello " + name + ". Today is" + myLocalVar + ".");

  // }
  //arrow function
  // let innnerFunction = ()=> {
  //   return ("Hello " + name + ". Today is " + myLocalVar + ".");

  // }
  //one line
  let innnerFunction = ()=> ("Hello " + name + ". Today is " + myLocalVar + ".");

  return innnerFunction();
}
console.log(myFunc("Adam"));

