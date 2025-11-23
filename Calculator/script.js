const display = document.getElementById("display");

// Add value to the display
function addToDisplay(input){
    display.value += input;
}

// Clear the display completely
function clearDisplay(){
    display.value = "";
}

// Evaluate the expression
function calculate() {
    try {
        let expression = display.value.replace(/x/g, "*");

        let result = eval(expression);
        if (result === Infinity || result === -Infinity) {
            display.value = "Error (Divide by 0)";
        } else if (isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key)) {
        addToDisplay(key);
    } 
    else if (["+", "-", "*", "/"].includes(key)) {
        addToDisplay(key);
    } 
    else if (key === ".") {
        addToDisplay(".");
    }
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    } 
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } 
    else if (key === "Escape") {
        clearDisplay();
    }
});