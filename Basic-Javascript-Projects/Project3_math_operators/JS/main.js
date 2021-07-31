var x = 3; // Declares variable x and sets its value to 3
var y = 4; // Declares variable y and sets its value to 4
var result; // Declares variable result without setting its value

function add() { // Declares function add()
    result = x + x; // Sets value of result variable using the addition operator
    document.getElementById("Addition").innerHTML = ": " + result; // Sends the value of result to be placed within the specified HTML element
}

function subtract() { // Declares function subtract()
    result = x - x; // Sets value of result variable using the subtraction operator
    document.getElementById("Subtraction").innerHTML = ": " + result; // Sends the value of result to be placed within the specified HTML element
}

function multiply() { // Declares function multiply()
    result = x * x; // Sets value of result variable using the multiplication operator
    document.getElementById("Multiplication").innerHTML = ": " + result; // Sends the value of result to be placed within the specified HTML element
}
function divide() { // Declares function divide()
    result = x / x; // Sets value of result variable using the division operator
    document.getElementById("Division").innerHTML = ": " + result; // Sends the value of result to be placed within the specified HTML element
}

function math() { // Declares function math()
    result = (x / x + x) * x - x; // Sets value of result variable using the addition, subtraction, multiplication, and division operators
    document.getElementById("Mathematics").innerHTML = ": " + result; // Sends the value of result to be placed within the specified HTML element
}
function remainder() { // Declares function remainder()
    result = y % x; // Sets value of result variable using the modulus operator
    document.getElementById("Modulus").innerHTML = ": " + result; // Sends the value of result to be placed within the specified HTML element
}

function negation() { // Declares function negation()
    document.getElementById("Negative").innerHTML = -x; // Sends the negated value of x to be placed within the specified HTML element
}

function increment() { // Declares function increment()
    z = 3; // Declares and sets the value of variable z to 3
    z++; // Uses the increment operator to increase the value of z by 1
    document.getElementById("Increase").innerHTML = z; // Sends the value of z to be placed within the specified HTML element
}

function decrement() { // Declares function decrement()
    z = 3; // Sets teh value of variable z back to 3
    z--; // Uses the decrement operator to decrease teh value of z by 1
    document.getElementById("Decrease").innerHTML = z; // Sends the value of z to be placed within the specified HTML element
}

function random() { // Declares function random()
    document.getElementById("Randomize").innerHTML = Math.floor(Math.random() * 11); // Uses the Math.random function to randomly pick a number between 1 and 10 and uses the Math.floor method to ensure it is an integer before sending it to be placed within the specified HTML element
}

function exponent() { // Declares function exponent()
    document.getElementById("Power").innerHTML = Math.pow(x, x); // Uses the Math.pow method to calculate 3 to the 3rd power and then sends that value to be placed within the specified HTML element
}