// Convert button
const convertBtn = document.getElementById("convertBtn");
const clearBtn = document.getElementById("clearBtn");
const kmInput = document.getElementById("kmInput");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const km = parseFloat(kmInput.value);

  // Validation
  if (isNaN(km) || km < 0) {
    result.textContent = " Please enter a valid positive number.";
    result.style.color = "red";
    return;
  }

  // Conversion formula
  const miles = km * 0.621371;
  result.textContent = `${km} km = ${miles.toFixed(3)} miles `;
  result.style.color = "green";
});

clearBtn.addEventListener("click", () => {
  kmInput.value = "";
  result.textContent = "";
});
