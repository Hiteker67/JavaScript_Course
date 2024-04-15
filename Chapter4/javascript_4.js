console.log("Chapter4");

// Arrays in JS

let marks_student1 = 97; // this is not sufficient way

// create array by object (Not more prefer in array)

let marks = {
    stu1 : 97,
    stu2 : 87,
}

// best approach for array

let student_marks = [97, 85, 65, 88, 41];

console.log(student_marks);
console.log(student_marks.length); //property

let heros = ["ironman", "hulk", "captain", "thor", "loki"];
console.log(heros);

// But for better way Using loops in Array

for(let i=0; i<heros.length; i++){
    console.log(heros[i]);
}

// for of
for(let hero of heros){
    console.log(hero)
}

let cities = ["Delhi", "Mumbai", "Noida", "Gurgaon"];

for( let city of cities)
{
    console.log(city);
    console.log(city.toUpperCase());
}

// Qs1 solution of array

let marks_stu = [85, 97, 44, 37, 76, 60];

let sum = 0;
for( let val of marks_stu)
{
    sum += val;
}
let avg = sum / marks_stu.length;
console.log(`The avg of marks is ${avg}`);

// Qs2 - Solution Offer of items
let items = [250, 645, 300, 900, 50];
let i = 0;

for( let val of items){
    let offer = val/10;
    items[i] = items[i] - offer;
    console.log(`Value after offer = ${items[i]}`);
    i++;
}

// Second way of loop

for(let i = 0; i < items.length; i++){
    let offer = items[i]/ 10;
    items[i] -= offer;
}
console.log(items);

// push method in array

let foodItems = ["potato", "Mango", "Litchi", "Tomato"];
foodItems.push("chips", "Kurkuray");

console.log(foodItems);

// Pop method in array

let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("deletedItem", deletedItem);

// toString method in array

console.log(foodItems.toString());

// concat methods in array

let marvelHeros = ["thor", "spiderman", "jinghar"];
let dcheros = ["superman", "batman"];

let heroes = marvelHeros.concat(dcheros);
console.log(heroes);

// unshift method in array
marvelHeros.unshift("antman");
let valu = marvelHeros.shift();
console.log("deleted", valu);

// slice method in array
let marvelsHeros = ["thor", "spiderman", "jinghar", "dr. Straing", "Hulk"];
console.log(marvelsHeros);
console.log(marvelsHeros.slice());

// splice method in array
let arr = [1, 2, 3, 4, 5, 6];
arr.splice(2, 2, 101, 102);

// Add element in splice
arr.splice(2, 0, 103);

// Delete Element
arr.splice(3, 1);

// Replace element
arr.splice(2, 1, 101);

// Qs3 Solution

let companies = ["Boomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.splice(0, 1);
companies.splice(1, 1, "Ola");
companies.splice(5,1, "Amazon");
