function my_Dictionary() { // Declares the function that will be used to create a dictionary
    var dreamMMO = { // Declares the variable name that will identify the dictionary
        Setting:"Fantasy", // Declares a key-value-pair for the dreamMMO dictionary
        Gameplay:"PvP", // Declares a key-value-pair for the dreamMMO dictionary
        Progression:"Horizontal", // Declares a key-value-pair for the dreamMMO dictionary
        Factions:3, // Declares a key-value-pair for the dreamMMO dictionary
    };
    delete dreamMMO.Factions; // Deletes the Factions entry from the dreamMMO dictionary
    document.getElementById("Dictionary").innerHTML = dreamMMO.Factions; // Attempts to send the value associated with the Factions key from within the dreamMMO dictionary and send it to be placed within the specified HTML element.
}