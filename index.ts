// arithmetic
// -addition

let x = 2;
let y = 5;

let add = x + y;
let add1 = "x" + "y";
let add2 = "xy" + x + y;
let add3 = "xy" + add;
let add4 = x + y + "xy";
let add5 = x + y + "xy" + x;

console.log("add: ", add);
console.log("add1: ", add1);
console.log("add3: ", add3);
console.log("add4: ", add4);
console.log("add5: ", add5);

//subtraction

let sub = x - y; //-3
//let sub1 = "x" "y"; // error
// let sub2 = "x" -2; //error
console.log("subtraction: ", sub);

//multiplication

let mult = x * y; //10
console.log("multiplication:", mult);
//let mult = "x" * y; //error

// division
let div = x / y; // 0.4
console.log("division:", div);
//let div = "x "/ y; //error

// exponation

let exp = x ** y; ///32
console.log("exponation:", exp);

//modulus : it returns remainder
//assignment operator: ksi variable ko assign krna

//assignment (=)

let n = 5;

n += 15; //n=n+15// 20

// incriment(++)/decrement operator (--)

n++; // n=n+1
// n=21

n--; // n=n-1
//n = 20

n = n + 2; // 22

n -= 5; //17

//comparison
//comparison ka reult hamesha true ya false hi naye ga

n = 5;

//== (sirf values ko comapre krta ha)
n == 5; //true
//=== (datatype and value compare krta ha)
//5 = 5 (number = number and 5 = 5 ) // true

let x1 = "5";
let y1 = 5;

x1 == y1; //true
x1 === y1; //false, because one is string and other is number

//not equal (!=),
n = 7;
n !== 5; // true

// greater than (>)
n > 8; // 7 is greater tha 8 // false

//less than (<)
n < 8; //n is less than 8 // true

//greater than or equal (>=)
n >= 8; // 7 is greater than or equal to 8 // false

// less  than or equal (<=)
n <= 7; // 7 is less than or equal to 7 // true

//logical operatotrs (AND, OR, NOR)

// OR (||)

// T || F = T
// T || T= T
// F || T = T
// F || F = F

console.log(n == 5 || n == 6); // false
console.log(n == 5 || n >= 6); // true F || T = T

// AND (&&)

// T && T = T
// F && T= F
// T && F = F
// F && F = F

console.log(n >= 5 && n <= 8);
// n=5 // true
// n= 6 // true
// n = 7 // true
// n = 8 // true
//n = 9 // false

// NOT (!)
// T = F
// F = T

console.log(!(n >= 5 && n <= 8));
// ! true // false
// n=5 // false
// n= 6 // false
// n = 7 // false
// n = 8 // false
//n = 9 // true

// conditional statement

//if (condition){}
//else {}

let condition = "pakistan";
let age = 25;

if (condition == "pakistan") {
  console.log("pakistani");
} else {
  console.log("not pakistani");
}

// if else if

if (age <= 12){ console.log("Child");}
else if (age>=13 && age<=19){console.log("teenager");}
else{ console.log("Adult");}

//odd and even

//n = 5
//n % 2 //1
if ( n%2 == 0 )