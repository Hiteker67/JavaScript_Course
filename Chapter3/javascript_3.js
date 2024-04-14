console.log("Apna college");

// initialize for loop for given condition for iteration loops again and again
for(let i=1; i<=5; i++){
    console.log("apna college");
}

// Print 1 to 5
for(let i=1; i<=5; i++){
    console.log("i =",i);
}

// Calculate sum of 1 to 5
let sum=0;
let n = 100;
for (let i=0; i<=n; i++){
    sum = sum +i;
}
console.log("Sum is ", sum);

// Never use Infinite Loop in code

// While loop
let j = 1;
while(j<=5){
    console.log("j= ",j);
    j++;
}

// do-while loop
let a = 1;
do{
    console.log("a= ",a);
    a++;
} while(a <= 10);

// for-of loop (help on iterate on strings and array)
let str = "javascript";

let size=0;
for(let b of str){
    // iterator -> character
    console.log("b =", b);
    size++;
}

console.log("string size = ",size);

// for in loop

let student = {
    name: "Rahul Kumar",
    age: 24,
    cgpa: 8.0,
    isPass: true,
};

for(let key in student){
    console.log("key = ",key, "Value= ", student[key]);
}

// Qs1 solution (even number from 0 to 100)

for(let n = 0; n<=100; n++){
    if(n%2===0){
        console.log("Even Number", n);
    }
    else{
        console.log("Odd number",n);
    }
}

// Qs2 solution Game Number

/*let gameNum = 25;

let userNum = prompt("Guess the game number: ")

while(userNum != gameNum){
    userNum = prompt("You entered wrong number. Guess again :");
}
console.log("Congratulations, you entered the right number");*/

// Strings

let str1 = "ApnaCollege";
let str2 = "Vivek";

console.log(str1[1]);

// using `` template literals in one single line with this formate.

let obj ={
    item: "pen",
    price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// template literals (`` -> Know as backtec key) 
let specialString = `This is a template literal`;
console.log(typeof specialString);
console.log(specialString);
console.log(specialString.length);

// String Methods
// slicing method
let str3 = "01234567";
console.log(str3.slice(1, 6));

// concatination method
let res = str1.concat(str2);
console.log(res);

// replace method
console.log(str1.replace("A", "V"));
console.log(str1.replaceAll("a", "V")); //replaceAll Method change all a word with V.

// charAt method
console.log(str1.charAt(2));

// Ques1 Solution

let fullName = prompt("Enter your full name :");
let userName= "@" + fullName + fullName.length;

console.log(userName);
