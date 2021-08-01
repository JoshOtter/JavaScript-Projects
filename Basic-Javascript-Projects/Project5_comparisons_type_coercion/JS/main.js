function dataType() { // Declares the function
    document.write(typeof 3); // Tells the HTML document to assess what type of data 3 is
}

function typeCoercion() { // Declares the function
    document.write("10" + 20); // Tries  to add together two different data types to show coercion in the result printed to the HTML document
}

function divideByZero() { // Declares the function
    var implode = 0/0; // Declares the variable implode and assigns it the value of 0 divided by 0
    document.getElementById("Divide_by_Zero").innerHTML = implode; // Sends the value of implode to print within the specified HTML element
}

function assessString() { // Declares the function
    var fruit = "pineapple"; // Declares the variable fruit and assigns it a string data type
    var result = isNaN(fruit) // Declares the result variable and assigns it the boolean result of assessing its whether the value of fruit is not a number
    document.getElementById("Assess_String").innerHTML = result; // Sends the value of result to print within the specified HTML element
}

function assessNumber() { // Declares the function
    var digit = 27; // Declares the variable digit and assigns it a number data type
    var result = isNaN(digit) // Declares the result variable and assigns it the boolean result of assessing its whether the value of digit is not a number
    document.getElementById("Assess_Number").innerHTML = result; // Sends the value of result to print within the specified HTML element
}

function infinity() { // Declares the function
    var tooBig = 5E320; // Declares the variable tooBig and assigns it a value higher than JavaScript can utilize
    document.getElementById("Infinity").innerHTML = tooBig; // Sends the value of tooBig to print within the specified HTML element
}

function negativeInfinity() { // Declares the function
    var tooSmall = -5E320; // Declares the variable tooSmall and assigns it a value lower than JavaScript can utilize
    document.getElementById("Negative_Infinity").innerHTML = tooSmall; // Sends the value of tooSmall to print within the specified HTML element
}

function booleanFalse() { // Declares the function
    var inaccurate = 27 < 9; // Declares the variable inaccurate and assigns it a value based on a boolean expression
    document.getElementById("False_Bool").innerHTML = inaccurate; // Sends the value of inaccurate to the specified HTML element
}
function booleanTrue() { // Declares the function
    var accurate = 27 > 9; // Declares the variable accurate and assigns it a value based on a boolean expression
    document.getElementById("True_Bool").innerHTML = accurate; // Sends the value of accurate to the specified HTML element
}

function equalCheck1() { // Declares the function
    var check1 = 3 == 3; // Declares the variable and assigns it a boolean based on an equality comparison
    document.getElementById("Equal1").innerHTML = check1; // Sends the value of check1 to display in the specific HTML element
}

function equalCheck2() { // Declares the function
    var check2 = -3 == 3; // Declares the variable and assigns it a boolean based on an equality comparison
    document.getElementById("Unequal").innerHTML = check2; // Sends the value of check2 to display in the specific HTML element
}

function equalCheck3() { // Declares the function
    var check3 = 27 === 27; // Declares the variable and assigns it a boolean based on an equality comparison
    document.getElementById("Equal2").innerHTML = check3; // Sends the value of check3 to display in the specific HTML element
}

function equalCheck4() { // Declares the function
    var check4 = 27 === "Chicken"; // Declares the variable and assigns it a boolean based on an equality comparison
    document.getElementById("Unequal2").innerHTML = check4; // Sends the value of check4 to display in the specific HTML element
}

function equalCheck5() { // Declares the function
    var check5 = 27 === "27"; // Declares the variable and assigns it a boolean based on an equality comparison
    document.getElementById("Unequal3").innerHTML = check5;  // Sends the value of check5 to display in the specific HTML element
}

function equalCheck6() { // Declares the function
    var check6 = "Chicken" === "Duck"; // Declares the variable and assigns it a boolean based on an equality comparison
    document.getElementById("Unequal4").innerHTML = check6; // Sends the value of check6 to display in the specific HTML element
}

function compareAND1() { // Declares the function
    var check7 = 27 > 3 && 9 < 27; // Declares the variable and assigns it a boolean based on twon equality comparison with the AND operator
    document.getElementById("Both_True").innerHTML = check7; // Sends the value of check7 to display in the specific HTML element
}

function compareAND2() { // Declares the function
    var check8 = 27 > 3 && 9 > 27; // Declares the variable and assigns it a boolean based on twon equality comparison with the AND operator
    document.getElementById("One_True1").innerHTML = check8; // Sends the value of check8 to display in the specific HTML element
}

function compareOR1() { // Declares the function
    var check9 = 27 > 3 || 9 > 27; // Declares the variable and assigns it a boolean based on twon equality comparison with the OR operator
    document.getElementById("One_True2").innerHTML = check9; // Sends the value of check9 to display in the specific HTML element
}

function compareOR2() { // Declares the function
    var check10 = 27 < 3 && 9 > 27; // Declares the variable and assigns it a boolean based on twon equality comparison with the OR operator
    document.getElementById("None_True").innerHTML = check10; // Sends the value of check10 to display in the specific HTML element
}

function compareNOT1() { // Declares the function
    document.getElementById("Not_True").innerHTML = !(27 < 3); // Sends the boolean value of the comparison using the NOT operator to display in the specific HTML element
}

function compareNOT2() { // Declares the function
    document.getElementById("Is_True").innerHTML = !(27 > 3); // Sends the boolean value of the comparison using the NOT operator to display in the specific HTML element
}

console.log(3 * 3); // Sends the value of 9 to the browser console
console.log(3 < 3); // Sends false to the browser console