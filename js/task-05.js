const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function (event) {
  const newName = event.target.value.trim(); // Trim removes leading/trailing spaces
  if (newName === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = newName;
  }
});
