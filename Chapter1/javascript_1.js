// Working on Javascript Technology first day

console.log("Vivek Chaurasiya");

// variables in JS -> Variables are container for data

fullname = "Tony Stark";
console.log(fullname);

age = 24;
console.log(age);

// null value not store any  value
x=null
console.log(x);

// undefined is not define anything
y=undefined 
console.log(y);

// store boolean value true or false
isfollow = false;
console.log(isfollow);

// Also use let not use var becuase var is old variable
let fullName = "tomy stark";
console.log(fullName);

// use const for constatnt value who not change (const is also initiallized but let is not also initiallized)
const year = 24;
console.log(year);

// using by block let and const becuase var is globalu used in js

{
    let a=10;
    console.log(a);
}

const student = {
    fullName: "Rahul Kumar",
    age: 24,
    cgpa: 8.2,
    isPass: true,
};

// if i want to increase student age then

student["age"] = student["age"] +1;

console.log(student["age"]);

// Qs1 solution

const product = {
    title: "ball pen",
    rating : 4,
    offer : 5,
    price : 200,
};

console.log(product);

// Qs2 Solution

const profile = {
    fullName: "Vivek Chaurasiya",
    isFollow: true,
    post: 195,
    followers: 234,
    following: 4,
};

console.log(profile);
