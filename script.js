/* =========================================================
   🎯 PART 1: JAVASCRIPT BASICS
   Demonstrate variables, conditionals, and user input
========================================================= */

const greetBtn = document.getElementById("greetBtn");
const greeting = document.getElementById("greeting");

greetBtn.addEventListener("click", () => {
  let name = document.getElementById("nameInput").value;
  let age = parseInt(document.getElementById("ageInput").value);

  // Basic input validation
  if (!name || isNaN(age)) {
    greeting.textContent = "❌ Please enter a valid name and age.";
    return;
  }

  // Conditional logic
  if (age >= 18) {
    greeting.textContent = `👋 Hello, ${name}! You’re an adult.`;
  } else {
    greeting.textContent = `👋 Hey, ${name}! You’re still a minor.`;
  }
});


/* =========================================================
   ❤️ PART 2: FUNCTIONS
   Create reusable logic blocks
========================================================= */

// Function to calculate sum of two numbers
function calculateSum(a, b) {
  return a + b;
}

// Function to display result on screen
function showSumResult() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultBox = document.getElementById("sumResult");

  if (isNaN(num1) || isNaN(num2)) {
    resultBox.textContent = "❌ Please enter valid numbers.";
    return;
  }

  let sum = calculateSum(num1, num2);
  resultBox.textContent = `✅ The sum is: ${sum}`;
}

document.getElementById("sumBtn").addEventListener("click", showSumResult);


/* =========================================================
   🔁 PART 3: LOOPS
   Demonstrate repetition and iteration
========================================================= */

const countBtn = document.getElementById("countBtn");
const countdownList = document.getElementById("countdownList");

countBtn.addEventListener("click", () => {
  countdownList.innerHTML = ""; // Clear previous results

  // Example of a simple countdown using a for loop
  for (let i = 5; i > 0; i--) {
    const li = document.createElement("li");
    li.textContent = `Countdown: ${i}`;
    countdownList.appendChild(li);
  }

  // Show completion message
  const done = document.createElement("li");
  done.textContent = "🎉 Lift off!";
  countdownList.appendChild(done);
});


/* =========================================================
   🌐 PART 4: DOM MANIPULATION
   Interactivity via DOM selection and events
========================================================= */

const toggleColorBtn = document.getElementById("toggleColorBtn");
const addItemBtn = document.getElementById("addItemBtn");
const dynamicList = document.getElementById("dynamicList");

let darkMode = false;

// Toggle page background color
toggleColorBtn.addEventListener("click", () => {
  document.body.style.background = darkMode ? "#f4f4f9" : "#222";
  document.body.style.color = darkMode ? "#333" : "#fff";
  darkMode = !darkMode;
});

// Add new items dynamically
let itemCount = 2;
addItemBtn.addEventListener("click", () => {
  itemCount++;
  const li = document.createElement("li");
  li.textContent = `Item ${itemCount}`;
  dynamicList.appendChild(li);
});
