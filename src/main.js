
//15.converting types
// let myData1 = 5 + 5;
// let myData2 = 5 + "5";
// let myData3 = 5 + ("5"*1);

const { parseFloat } = require("core-js/fn/number");

// console.log("Result 1:" + myData1);
// console.log("Result 2:" + myData2);
// console.log("Result 3:" + myData3);

// let myData1 = String(5);
// console.log("Result:" + myData1); //5
// let myData2 = (5).toString();
// console.log("Result:" + myData2)  //5

// let myData3 = (5).toString() + String(5);
// console.log("Result:" + myData3);

//16.Converting Numbers to Strings
//   let num = 15;
//   let a = num.toString();  //15
//   let b = num.toString(2); //1111
//   let c = num.toString(8); //17
//   let d = num.toString(16); //f

//   console.log("Result a:" + a);
//   console.log("Result b:" + b);
//   console.log("Result c:" + c);
//   console.log("Result d:" + d);

//   let num1 = 5.56789;
//   let n = num1.toFixed(3); //two decimal places 5.57
//   console.log("Result n:" + n);

//   let n1 = num1.toExponential(4);
//   console.log("Result n1:" + n1);

//   var num2 = 13.3714;
//   let n2 = num2.toPrecision(4);
//   console.log("Result n2:" + n2);

//17.Converting Strings to Numbers
let firstVal = "5";
let secondVal = "5";
let result1 = Number(firstVal) + Number(secondVal);
console.log("Result1:" + result1);

let thirdVal = "10.256";
let result2 = parseInt(thirdVal)
console.log("Result2:" + result2);









