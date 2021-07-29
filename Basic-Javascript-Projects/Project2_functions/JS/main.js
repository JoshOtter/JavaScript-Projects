function My_First_Function() {                                      // This declares the function called My_First_Function.
    var str = "My favorite color is green!";                        // This declares the variable str and assigns it a string value.
    var result = str.fontcolor("green");                            // This declares the variable result and gives it the value equal to the variable str, but adjusted by the fontcolor() method to change its color green.
    document.getElementById("Green_Text") .innerHTML = result;      // This tells the function to send the value of the result variable to change the html element that is calling it via the id "Green_Text".
}

function My_Second_Function() {                                     // This declares the function called My_Second_Function.
    var sentence = "I\'m not sure this is going to work";           // This declares the variable sentence and assigns it a string value.
    sentence += ", but let\'s see if it does!";                     // This uses the += operator to concatenate another string to the value of the sentence variable.
    document.getElementById("Concatenate") .innerHTML = sentence;   // This tells the function to send the value of the result variable to change the html element that is calling it via the id "Concatenate".
}