function Ride_Function() { // Declares the function
    var Height, Can_ride; // Declares the variables Height and Can_ride
    Height = document.getElementById("Height").value; // Assigns the value retrieved from the HTML element with the id of Height to the Height variable
    Can_ride = (Height < 52) ? "You are too short":"You are tall enought"; // Uses the Ternary operator to check if Height is less than 52 and then assigns the correct string value to the variable Can_ride
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; // Sends the value of Can_ride concatenated with another string to the specified HTML element
}

function MMO(payModel, setting, typeOfWorld, combat) { // An object constructor with parameters
    this.MMO_payModel = payModel; // Uses "this" keyword to set up the constructor to create new objects and define its properties.
    this.MMO_setting = setting; // Uses "this" keyword to set up the constructor to create new objects and define its properties.
    this.MMO_typeOfWorld = typeOfWorld; // Uses "this" keyword to set up the constructor to create new objects and define its properties.
    this.MMO_combat = combat; // Uses "this" keyword to set up the constructor to create new objects and define its properties.
}

var New_World = new MMO("Buy to Play", "Historical-Fantasy", "Open World", "Action"); //creates a new MMO object and assigns its properties
var Final_Fantasy_XIV = new MMO("Pay to Play", "Fantasy", "Zoned", "Tab-Target"); //creates a new MMO object and assigns its properties
var Phantasy_Star_Online_2 = new MMO("Free to Play", "Scifi", "Instanced", "Action"); //creates a new MMO object and assigns its properties

function mmoFunction() { // Declares the function
    document.getElementById("New_and_This").innerHTML = // Sends a concatenated message of strings and object properties for the New_World.MMO object to the specified HTML element
    "New World is an upcoming " + New_World.MMO_typeOfWorld + 
    " MMORPG featuring " + New_World.MMO_combat + " combat in a " + 
    New_World.MMO_setting + " setting.";
}

function howLong() { // Declares the function
    document.getElementById("Nested_Function").innerHTML = "Only " + Count() + 
    " more days until New World releases!"; // Returns the concatenated value of the strings plus the returned value of Count() to the specified HTML element
    function Count() { // Declares the function
        var daysLeft = 30; // Declares the variable and assigns its value
        function Minus_one() {daysLeft -= 1;} // Declares the nested function and gives it the action of reducing the value of daysLeft by one
        Minus_one(); // Calls the Minus_one function
        return daysLeft; // returns the resulting value of daysLeft after Minus_one() operates.
    }
}