let decrementButton = document.querySelector('[data-action="decrement"]');
let incrementButton = document.querySelector('[data-action="increment"]');
let counterSpan = document.getElementById("value");

// Initializing counter value
let counterValue = 0;
counterSpan.textContent = counterValue;

//
decrementButton.onclick = function () {
  // if (counterValue > 0)
  counterValue -= 1;

  counterSpan.textContent = counterValue;
};

incrementButton.onclick = function () {
  counterValue += 1;
  counterSpan.textContent = counterValue;
};
