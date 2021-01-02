//10.Using Template Strings
//let message = "It is" + weather + "today";
//same as below
function messageFunction(weather) {
  let message = `It is ${weather} today`;
  console.log(message);
}
messageFunction("raining");