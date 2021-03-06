var x = 3 // Declares a global variable and sets it's value to 3

function returnNumber1() { // Declares the function
    var y = x * x; // Declares a local variable and assigns it's value based on the global variable
    document.getElementById("Favorite_Number1").innerHTML = y // Uses the console.log method to see the results of this function
}

function returnNumber2() { // Declares the function
    var z = x * y; // Declares a local variable and assigns it's value based on a global variable and a local variable from a different function
    console.log(z) // Uses the console.log method to see what error is preventing this function from returning a value
}

function hourCheck() { // Declares the function
    if (new Date().getHours() < 18) { // Conditional statement uses Date().getHours() to retrieve the current time and see if it's less than 18
        document.getElementById("Hour_in_the_Day").innerHTML = "You aren't working late." // If the time is less than 18:00, this message is sent to the identified HTML element
    }
    else {
        document.getElementById("Hour_in_the_Day").innerHTML = "You are working late. Go home." // If the condition is not met, this message is sent ot the identified HTML element
    }
}

function tempCheck() { // Declares the function
    var Temp; // Declares the Temp variable
    Temp = document.getElementById("Temp").value; // Assigns the value recieved by the input element to the Temp variable
    if (Temp < 45) { // Conditional statement checks to see if the value of Temp is less than 45
        document.getElementById("Clothing").innerHTML = "You should put on a coat."; // If the value of Temp is less than 45, this message is sent to the identified HTML element
    }
    else if (Temp >= 45 && Temp < 65) { // Conditional statement checks to see if Temp is between 45 and 65
        document.getElementById("Clothing").innerHTML = "You might want a light jacket."; // If Temp is between at least 45 and less than 65, this message is sent to the identified HTML element
    }
    else { // If neither of the previous conditions are met, the following message is sent to the identified HTML element
        document.getElementById("Clothing").innerHTML = "You'll be comfortable in a t-shirt.";
    }
}

function Time_function() { // Declares the function
    var Time = new Date().getHours(); // Declares the variable Time and assigns it the value of the hours retrieved by the Date().getHours() method
    var Reply; // Declares the variable Reply
    if (Time < 12 == Time > 0) { // Conditional statement checks to see if Time is less than 12 but greater than 0
        Reply = "It is morning time!"; // If the above condition is met, Reply is assigned this string
    }
    else if (Time >= 12 == Time < 18) { // Conditional statement checks to see if Time is greater than or equal to 12 but less than 18
        Reply = "It is afternoon."; // If the above condition is met, Reply is assigned this string
    }
    else { //If neither of the above conditions are met, the string below is assigned to the value of Reply
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply; // The value of reply, whichever message that may be, is sent to be displayed in the identified HTML element
}