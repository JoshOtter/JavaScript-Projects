var Family = "Otterman", Dad = "Josh", Mom = "Anna", Son1 = "Ender", Son2 = "Iden"; // I am declaring string values for the variables Family, Dad, Mom, Son1, and Son2.
var Dad = Dad.fontcolor("Green"); // Used the fontcolor method to change the color of the string associated with the variable Dad to green.
var Mom = Mom.fontcolor("Blue"); // Used the fontcolor method to change the color of the string associated with the variable Mom to blue.
var Son1 = Son1.fontcolor("Red"); // Used the fontcolor method to change the color of the string associated with the variable Son1 to red.
var Son2 = Son2.fontcolor("Purple"); // Used the fontcolor method to change the color of the string associated with the variable Son2 to purple.
var sum; // I am declaring the variable sum, but not assigning it a value for the sake of highlighting the expression as it stands in the line below.
sum = 3 + 1; // This is an expression used to add 3 and 4 together and assign the value to the variable sum.
window.alert("Click here to learn about the " + Family + " family!") // I used the window.alert() method to display several strings that are concatenated together.
document.write("The " + Family + " family has " + sum + " people in it." + " Their names are " + Dad + ", " + Mom + ", " + Son1 + ", and " + Son2 + ".") // I used the document.write() method to get the browser to print a series of concatenated strings about my family to the browser.