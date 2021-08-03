var first = "Everybody steps "; // The following lines declare and assign strings to several global variables
var second = "on me. ";
var third = "That is why I'm ";
var fourth = "cracked, you see. ";
var fifth = "I'm a nut. I'm a nut. ";
var sixth = "I'm a nut I'm a nut I'm a nut!";
var sillySong; // Declares a global variable but leaves it undefined for later use within a function
var lastLine; // Declares a global variable but leaves it undefined for later use within a function

function stringConcat() { // Declares a function
    sillySong = first.concat(second, third, fourth, fifth, sixth); //concatenates the six string variables and assigns the value to sillySong
    document.getElementById("Whole_String").innerHTML = sillySong; // Sends the value of sillySong to the identified HTML element
}

function stringSlice() { // Declares a function
    lastLine = sillySong.slice(79,109); // Declares variable lastLine and assigns it the value of a sliced section of the sillySong string
    document.getElementById("Part_of_Song").innerHTML = lastLine; // Sends the value of lastLine to the identified HTML element
}

function stringUpperCase() { // Declares a function
    var allCapsSong = sillySong.toUpperCase(); //Declares variable allCapsSong and assigns it the value of sillySong after running it throught he toUpperCase() method
    document.getElementById("Loud_Song").innerHTML = allCapsSong; // Sends the value of allCapsSong to the identified HTML element
}

function stringSearch() { // Declares a function
    var crackedLocation = sillySong.search("cracked"); // Decalres variable crackedLocation and assigns it the value of the location of the word "cracked" from sillySong, using the search() method
    document.getElementById("Cracked_Location").innerHTML = "It is " + crackedLocation + " characters from the beginning of the song."; // Sends the value of crackedLocation concatenated with additional strings to the identified HTML element
}

function numberString() { // Declares a function
    var number = 27; // Declares a variable an assigns its value as a number
    document.getElementById("Number_String").innerHTML = number.toString(); // take the number value of the variable, changes it to a string, and sends it to the identified HTML element
}

function numberPrecision() { // Declares a function
    var pi = Math.PI; // Declares variable pi and assigns it the value of pi via Math.PI
    document.getElementById("Pi_Number").innerHTML = pi.toPrecision(9); // Limits the digits of pi displayed to 9 and sends the value to the identified HTML element
}

function numberFixed() { // Declares a function
    var pi = Math.PI; // Declares variable pi and assigns it the value of pi via Math.PI
    document.getElementById("Pi_Fixed").innerHTML = pi.toFixed(2); // Rounds the number of pi to 2 decimal points and sends the value to the identified HTML element
}

function numberValueOf() { // Declares a function
    var pi = Math.PI; // Declares variable pi and assigns it the value of pi via Math.PI
    document.getElementById("Pi_Value_Of").innerHTML = pi.valueOf(); // Sends the value to the identified HTML element
}