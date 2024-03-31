// arithmetic
// -addition
var x = 2;
var y = 5;
var add = x + y;
var add1 = "x" + "y";
var add2 = "xy" + x + y;
var add3 = "xy" + add;
var add4 = x + y + "xy";
var add5 = x + y + "xy" + x;
console.log("add: ", add);
console.log("add1: ", add1);
console.log("add3: ", add3);
console.log("add4: ", add4);
console.log("add5: ", add5);
//subtraction
var sub = x - y; //-3
//let sub1 = "x" "y"; // error
// let sub2 = "x" -2; //error
console.log("subtraction: ", sub);
//multiplication
var mult = x * y; //10
console.log("multiplication:", mult);
//let mult = "x" * y; //error
// division
var div = x / y; // 0.4
console.log("division:", div);
//let div = "x "/ y; //error
// exponation
var exp = Math.pow(x, y); ///32
console.log("exponation:", exp);
