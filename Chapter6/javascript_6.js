// console.log("hello!");
// // alert("How Are YOu !")
// console.log("hello!2");
// console.dir(document);
// console.log(document.body);

// let heading = document.getElementById("heading"); //h1
// console.dir(heading);

// let headings = document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

// let firstEl = document.querySelector("p"); // 1st element
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p") //1st element
// console.dir(allEl);

// let div = document.querySelector("div");
// console.dir(div);

// Answer for 1st Question

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Apna College Students";

let divs = document.querySelectorAll(".box");

let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}

