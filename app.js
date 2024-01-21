// Question 1
document.getElementById("container");

// Question 2
document.querySelector("#container");

// Question 3
document.querySelectorAll(".second");

// Question 4
document.querySelector("ol .third");

// Question 5
document.querySelector("#container").innerText = "Hello"

// Question 6
document.querySelector(".footer").classList.add("main");

// Question 7
document.querySelector(".footer").classList.remove("main");

// Question 8
let newLi = document.createElement("li");

// Question 9
newLi.innerText = "four"

// Question 10
document.querySelector("ul").appendChild(newLi);

// Question 11
let ollis = document.querySelectorAll("ol li");

for (let li of ollis) {
    li.style.backgroundColor = "green";
};

// Question 12
document.querySelector(".footer").remove();