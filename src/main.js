//import additionFunction from "./math/sum";
//import {multiply,subtract,divide} from "./math/operation";
//import {multiply,subtract,divide as division} from "./math/operation";
//as object
//import * as otp from "./math/operation";


import * as otp from "./math";

let data = [100, 200, 300, 400, 500];
//console.log(additionFunction(data));
// console.log(multiply(data));
// console.log(subtract(1500,data));
// console.log(division(300,100));
// console.log(otp.multiply(data));
// console.log(otp.subtract(500, data));
// console.log(otp.divide(500,100));
// console.log(otp.means(data));

console.log(`Addition`, otp.additionFunction(data));

//console.log(`Asyncous Call`, otp.asyncAdd(data));


otp.asyncAdd(data).then((result)=>console.log(result));



//async await function
async function doTask() {
  let total = await otp.asyncAdd(data);
  console.log(total);
}

doTask();