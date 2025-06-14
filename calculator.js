let display = document.getElementById("display");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  display.value += op;
}

function appendDot() {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function appendFunction(func) {
  try {
    let result = eval(display.value);
    display.value = func === "Math.sqrt" ? Math.sqrt(result) : result;
  } catch {
    display.value = "Error";
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
