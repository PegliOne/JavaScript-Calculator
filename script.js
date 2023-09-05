// Refactor functions
// Make it work for numbers with more than one digit

// DOM Selectors

const display = document.querySelector(".calculator__display");
const buttons = document.querySelectorAll(".calculator__button");

// Data

let storedValues = [];

// Adding Events

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.value;
    processValue(value);
  });
});

// Processing Functions

const processValue = (value) => {
  if (value === "c") {
    reset();
  }

  if (storedValues.length === 0 || storedValues.length === 2) {
    if (/[0-9]/.test(value)) {
      storedValues.push(value);
      display.textContent = value;
    }
  } else if (storedValues.length === 1) {
    if (["+", "-", "x", "/"].includes(value)) {
      storedValues.push(value);
      display.textContent = value;
    }
  } else if (storedValues.length === 3) {
    const result = performCalculation(storedValues);
    display.textContent = result;
  }
};

const reset = () => {
  storedValues = [];
  display.textContent = 0;
};

const performCalculation = (values) => {
  const num1 = Number(values[0]);
  const operator = values[1];
  const num2 = Number(values[2]);
  storedValues = [];

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
};
