console.log("Hello");


// "abc".toUpperCase()
// "xyz".toUpperCase()

// [1, 2, 3].push(4);

function myFunction() {
    console.log("Welcome to mumbai");
    console.log("We are learning JS.");
}

myFunction();

// using parameter in function

function yourFunction(msg) {
    // parameter -> input
    console.log(msg);
}

yourFunction("I love JS"); //argument

// Function -> 2 numbers, sum

function sum(a, b) {
    // local variable -> scope
    s = a + b;
    return s;
}

let val = sum(3, 4);
console.log(val);

// //functions

// function sum(a, b){
//     return a + b;
// }

// // multiple function
// function mul(a, b){
//     return a * b;
// }

// Arrow functions

const arrowSum = (a, b) => {
    console.log(a + b);
}

// multiple function
function mul(a, b) {
    return a * b;
}

const arrowMul = (a, b) => {
    return a * b;
};

// Qs1 Solution

function countVowel(str) {
    //"ApnaCollege", count = 5
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}

// Qs2 Solution

const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}

// forEach Loop in Arrays function

let arr = [1, 2, 3, 4];

arr.forEach(function printVal(val){
    console.log(val);
})

// Arrow function
arr.forEach((val) => {
    console.log(val);
})

// Qs3 - Solution
let nums = [2, 3, 4, 5, 6];

nums.forEach((num) => {
    console.log(num * num);
});

// Map methods using in array

let num = [34, 23, 64];

num.map((val) => {
    console.log(val);
});

// second way
let newArr = num.map((val) => {
    return val;
});

console.log(newArr);

// Filter methods

let simArr = [2, 5, 6, 4, 3];

let evenArr = simArr.filter((val) => {
    return val > 3;
});

console.log(evenArr);

// Reduce Methods

let reArr = [4, 6, 3];

const output = reArr.reduce((res, curr) => {
    return res + curr;
});

console.log(output);

// Qs4 Solution

let mark = [89, 96, 90, 99, 87, 98];

let stuMark = mark.filter((marks) => {
    return marks > 90;
});

console.log(stuMark);

// Qs5 Solution

let n = prompt("Enter a number: ");

let myArr = [];

for(let i=1; i<=n; i++){
    myArr[i-1] = i;
}

console.log(myArr);

const mySum = myArr.reduce((res, curr) => {
    return res + curr;
});

console.log("Sum is ", mySum);

let factorial = myArr.reduce((res, curr) => {
    return res * curr;
});

console.log("Factorial is ",factorial);
