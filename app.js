


let screen = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);
let string = '';

// Button click par calculator
buttonsArray.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        handleInput(event.target.innerHTML);
    });
});

// Keyboard par calculator
document.addEventListener("keydown", function (event) {
    if ((event.key >= '0' && event.key <= '9') || ['+', '-', '*', '/', '.'].includes(event.key)) {
        string += event.key;
        screen.value = string;
    } else if (event.key === "Backspace") { // DEL
        string = string.substring(0, string.length - 1);
        screen.value = string;
    } else if (event.key === "Enter" || event.key === "=") { // Calculate
        try {
            string = eval(string).toString();
            screen.value = string;
        } catch {
            screen.value = "Error";
            string = "";
        }
    } else if (event.key.toLowerCase() === "c") { // AC -> press 'c'
        string = "";
        screen.value = string;
    }
});

// Common function for both button & keyboard
function handleInput(input) {
    if (input == 'DEL') {
        string = string.substring(0, string.length - 1);
        screen.value = string;
    } else if (input == 'AC') {
        string = '';
        screen.value = string;
    } else if (input == '=') {
        string = string.replace(/×/g, '*').replace(/÷/g, '/');
        try {
            string = eval(string).toString();
            screen.value = string;
        } catch {
            screen.value = "Error";
            string = "";
        }
    } else {
        string += input;
        screen.value = string;
    }
}
