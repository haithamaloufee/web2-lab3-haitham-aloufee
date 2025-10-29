// ========================================================
// JavaScript DOM Manipulation Lab - 40 Mini Exercises
// ========================================================


// 1️⃣ Change text color of heading with id="title" to red.
document.getElementById("title").style.color = "red";

// 2️⃣ Change background color of all <p> elements to lightgray.
document.querySelectorAll("p").forEach(p => p.style.backgroundColor = "lightgray");

// 3️⃣ Change heading text (#title) to "Welcome to the DOM Lab!".
document.getElementById("title").textContent = "Welcome to the DOM Lab!";

// 4️⃣ Add a solid black border to all <div> elements.
document.querySelectorAll("div").forEach(div => div.style.border = "1px solid black");

// 5️⃣ Increase font size of the first <h1> to 36px.
document.querySelector("h1").style.fontSize = "36px";

// 6️⃣ Change text color of elements with class="highlight" to blue.
document.querySelectorAll(".highlight").forEach(el => el.style.color = "blue");

// 7️⃣ Add CSS class "active" to the first <div>.
document.querySelector("div").classList.add("active");

// 8️⃣ Change the <body> background color to lightblue.
document.body.style.backgroundColor = "lightblue";

// 9️⃣ Set the font family of all <p> elements to Arial.
document.querySelectorAll("p").forEach(p => p.style.fontFamily = "Arial");

// 🔟 Change the image source of #sampleImage.
document.getElementById("sampleImage").src =
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300"; // nice desk setup

// 1️⃣1️⃣ Create a new <p> and append it to the <body>.
let newP = document.createElement("p");
newP.textContent = "This is a new paragraph created by JS.";
document.body.appendChild(newP);

// 1️⃣2️⃣ Create a new <li> and add it to the existing <ul>.
let newLi = document.createElement("li");
newLi.textContent = "Newly added list item";
document.getElementById("list").appendChild(newLi);

// 1️⃣3️⃣ Create a <button> labeled "Click Me!" and append it to a <div>.
let newBtn = document.createElement("button");
newBtn.textContent = "Click Me!";
document.querySelector("div").appendChild(newBtn);

// 1️⃣4️⃣ Create <h2> dynamically and insert it before the first <p>.
let newH2 = document.createElement("h2");
newH2.textContent = "Inserted H2 before first paragraph";
document.body.insertBefore(newH2, document.querySelector("p"));

/// 1️⃣5️⃣ Create an image and set width and height.
let img2 = document.createElement("img");
img2.src = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=200"; // cool tech photo
img2.width = 200;
img2.height = 200;
document.body.appendChild(img2);


// 1️⃣6️⃣ Add 3 new <li> items using a loop.
for (let i = 1; i <= 3; i++) {
  let li = document.createElement("li");
  li.textContent = `Extra Item ${i}`;
  document.getElementById("list").appendChild(li);
}

// 1️⃣7️⃣ Create a <div> with class "card" and text inside.
let card = document.createElement("div");
card.className = "card";
card.textContent = "This is a dynamically created card.";
document.body.appendChild(card);

// 1️⃣8️⃣ Append a paragraph containing your name.
let nameP = document.createElement("p");
nameP.textContent = "Created by Haitham Aloufi 🧠";
document.body.appendChild(nameP);

// 1️⃣9️⃣ Add a <span>[Edited]</span> inside every <p>.
document.querySelectorAll("p").forEach(p => {
  let span = document.createElement("span");
  span.textContent = " [Edited]";
  p.appendChild(span);
});

// 2️⃣0️⃣ Remove the last child of <ul>.
let ul = document.getElementById("list");
ul.removeChild(ul.lastElementChild);



// 2️⃣1️⃣ Add click event that shows an alert.
document.getElementById("mainButton").addEventListener("click", () => {
  alert("Main button clicked!");
});

// 2️⃣2️⃣ Change background color of a <div> when clicked.
document.querySelector("div").addEventListener("click", e => {
  e.target.style.backgroundColor = "lightgreen";
});

// 2️⃣3️⃣ When hovering over <p>, make it bold.
document.querySelectorAll("p").forEach(p => {
  p.addEventListener("mouseover", () => p.style.fontWeight = "bold");
});

// 2️⃣4️⃣ When mouse leaves paragraph, remove bold style.
document.querySelectorAll("p").forEach(p => {
  p.addEventListener("mouseleave", () => p.style.fontWeight = "normal");
});

// 2️⃣5️⃣ Add button to hide the image.
let hideBtn = document.createElement("button");
hideBtn.textContent = "Hide Image";
hideBtn.onclick = () => document.getElementById("sampleImage").classList.add("hidden");
document.body.appendChild(hideBtn);

// 2️⃣6️⃣ Add button to show the image again.
let showBtn = document.createElement("button");
showBtn.textContent = "Show Image";
showBtn.onclick = () => document.getElementById("sampleImage").classList.remove("hidden");
document.body.appendChild(showBtn);

// 2️⃣7️⃣ Create a counter button that increases with each click.
let counter = 0;
let counterBtn = document.createElement("button");
counterBtn.textContent = `Counter: ${counter}`;
counterBtn.addEventListener("click", () => {
  counter++;
  counterBtn.textContent = `Counter: ${counter}`;
});
document.body.appendChild(counterBtn);

// 2️⃣8️⃣ Display entered text from an input when button clicked.
document.getElementById("displayButton").addEventListener("click", () => {
  let val = document.getElementById("userInput").value;
  document.getElementById("output").textContent = `You typed: ${val}`;
});

// 2️⃣9️⃣ Change background color randomly when a button is clicked.
let randomBtn = document.createElement("button");
randomBtn.textContent = "Random Background";
randomBtn.addEventListener("click", () => {
  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
});
document.body.appendChild(randomBtn);

// 3️⃣0️⃣ Display which key is pressed.
document.addEventListener("keydown", (e) => {
  document.getElementById("output").textContent = `Key pressed: ${e.key}`;
});



// 3️⃣1️⃣ Change text of the first <li>.
document.querySelector("li").textContent = "Modified First Item";

// 3️⃣2️⃣ Get input value when button clicked (console log version).
document.getElementById("displayButton").addEventListener("click", () => {
  console.log("Input value:", document.getElementById("userInput").value);
});

// 3️⃣3️⃣ Count number of <p> and alert the count.
let pCount = document.querySelectorAll("p").length;
console.log(`There are ${pCount} paragraphs.`);
 
// 3️⃣4️⃣ Remove all <p> elements.
document.querySelectorAll("p").forEach(p => p.remove());

// 3️⃣5️⃣ Replace existing <h2> with new one.
let oldH2 = document.querySelector("h2");
let newHeading2 = document.createElement("h2");
newHeading2.textContent = "Replaced Subheading by JS";
oldH2.parentNode.replaceChild(newHeading2, oldH2);

// 3️⃣6️⃣ Add CSS class 'highlighted' to all <li>.
document.querySelectorAll("li").forEach(li => li.classList.add("highlighted"));

// 3️⃣7️⃣ Toggle a CSS class on <div> when clicked.
document.querySelectorAll("div").forEach(div => {
  div.addEventListener("click", () => div.classList.toggle("active"));
});

// 3️⃣8️⃣ Clone an existing element and append copy.
let clone = document.querySelector("#list").cloneNode(true);
document.body.appendChild(clone);

// 3️⃣9️⃣ Scroll smoothly to bottom when button clicked.
let scrollBtn = document.createElement("button");
scrollBtn.textContent = "Scroll to Bottom";
scrollBtn.onclick = () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
document.body.appendChild(scrollBtn);

// 4️⃣0️⃣ Build list dynamically using innerHTML from an array.
const fruits = ["Apple", "Banana", "Mango", "Strawberry"];
let fruitList = document.createElement("ul");
fruitList.innerHTML = fruits.map(f => `<li>${f}</li>`).join("");
document.body.appendChild(fruitList);
