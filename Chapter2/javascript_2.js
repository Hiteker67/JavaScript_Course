console.log("Hello World!");

// Arithmetic Operators

let a=5;
let b= 2;

console.log(" a + b =",a+b);
console.log(" a - b =",a-b);
console.log(" a * b =",a*b);
console.log(" a / b =",a/b);
console.log(" a % b =",a%b);
console.log(" a ^ b =",a**b);

// Uniary Operator

a= a+1;
console.log("a = ",a);
console.log(" ++a =", ++a);
console.log(" a++ =", a++);

// Assignment operators

let c = 5;
let d = 2;

a += 4;
console.log("a = ", a);

// Comparision Operator

console.log("5 == 2", a == b);
console.log("5 === 2", a === b);
console.log("5 != 2", a != b);
console.log("5 !== 2", a !== b);
console.log("5 < 2", a < b);
console.log("5 > 2", a > b);
console.log("5 <= 2", a <= b);
console.log("5 >= 2", a >= b);

// Logical Operator

let e = 5;
let f = 2;
let cond1 = e>f;
let cond2 = e === 6;

console.log(" cond1 && cond2 ", cond1 && cond2);
console.log(" cond1 || cond2 ", cond1 || cond2);
console.log(" cond1 ! cond2 ", ! cond2);

// Conditional Statements
// 1-if sttaement

let color;
let mode="dark";
if(mode === "dark"){
    color = "black";
}

if(mode === "light"){
    color = "white"
}

console.log(color);

// 2- if-else statement

let col;
let mod;
if(mod === "dark"){
    col = "black";
}
else{
    col = "white";
}

console.log(color);

// odd or even

let num = 10;

if(num % 2==0){
    console.log(num, "is even");
}
else{
    console.log(num, "is odd");
}

// 3- else-if statement

let age=56;

if(age < 18){
    console.log("Junior");
} else if(age > 60){
    console.log("senior");
} else{
    console.log("middle");
}

// turnary operator

let year = 19;

year >= 19 ? "adult" : "not adult"; //simpler, compac if-else

// Qus-1 Solution

// alert("hello");
/*let fullName = prompt("hello");
console.log(fullName);*/
/*
let numb = prompt("Enter a Number:");

if(numb % 5 === 0){
    console.log(numb, "is multiple of 5");
}
else{
    console.log(numb, "Is Not a Multiple of 5");
}
*/

// Qs2- Solution

let grades = prompt("Enter the score of student:");

if(grades >=90 && grades <=100){
    console.log(grades, "Is Grade A")
} else if(grades >=70 && grades <=89){
    console.log(grades, "Is Grade B");
} else if(grades >=60 && grades <=69){
    console.log(grades, "Is Grade C");
} else if(grades >=50 && grades <=59){
    console.log(grades, "Is Grade D");
} else if(grades >=0 && grades <=49){
    console.log(grades, "Is Grade E");
}else{
    console.log("Not Grades");
}
