//using let keyword
//using variables and types
function messageFunction(name,weather) {
  let message = "Hello, Admin";
  if (weather == "sunny") {
    let message = "It is a nice day";
    console.log(message);
  } else {
    let message = "It is " + weather + "today";
    console.log(message);
  }
  console.log(message);
}

messageFunction("Admin", "snow ");

// function messageFunction(name,weather) {
//   var message = "Hello, Admin";
//   if (weather == "sunny") {
//    var message = "It is a nice day";
//     console.log(message);
//   } else {
//     var message = "It is " + weather + "today";
//     console.log(message);
//   }
//   console.log(message);
// }

// messageFunction("Admin", "sunny ");