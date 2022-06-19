/* Event listener to create question prompts*/
document.querySelector("#generate").addEventListener("click", writePassword);
document.querySelector(".special").addEventListener("click", addSpecialChar);
document.querySelector(".numeric").addEventListener("click", addNumericChar);
document.querySelector(".upper").addEventListener("click", addUpperChar);
document.querySelector(".lower").addEventListener("click", addLowerChar);

//Fucntions for adding elements to divs for parameters.

function addSpecialChar() {
    document.querySelector(".special").setAttribute("id", "specialChar");
};
function addNumericChar() {
    document.querySelector(".numeric").setAttribute("id", "numericalChar");
};
function addLowerChar() {
    document.querySelector(".lower").setAttribute("id", "lowerChar");
};
function addUpperChar() {
    document.querySelector(".upper").setAttribute("id", "upperChar");
};

/* Arrays for generating random password values */
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Variable declarations
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
    // var confirmLength = (prompt("How many characters would you like to include in your password?"));
    var confirmLength = document.getElementById("passwordLength").value;

    //Loop to check if user in within the parameters

    while(confirmLength <=7 || confirmLength >= 133) {
        alert("Password must be between 8 and 132 characters. Please try again.");
        var confirmLength = (prompt("How many characters would you like to include in your password?"));
    }
    //Alert to confirm user character choice
    alert("Your password will contain " + confirmLength + " characters.");

    //Passwrod parameters
    // var confirmSpecialCharacter = confirm("Click OK to confirm you would like to include Special Characters in your Password");
    var confirmSpecialCharacter = document.getElementById("specialChar");
    // var confirmNumericCharacter = confirm("Click OK to confirm you would like to include Numeric Characters in your Password");
    var confirmNumericCharacter = document.getElementById("numericalChar");
    // var confirmLowerCase = confirm("Click OK to confirm you would like to include Lower Case Characters in your Password");
    var confirmLowerCase = document.getElementById("lowerChar");
    // var confirmUpperCase = confirm("Click OK to confirm you would like to include Uppercase Characters in your Password");
    var confirmUpperCase = document.getElementById("upperChar");

    //Loop to catch if the user answers outside of the parameters
    // while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    //     alert("You MUST choose at least one parameter for your password. Please try again.");
    //     var confirmSpecialCharacter = confirm("Click OK to confirm you would like to include special characters");
    //     var confirmNumericCharacter = confirm("Click OK to confirm you would like to include numeric characters");    
    //     var confirmLowerCase = confirm("Click OK to confirm you would like to include lowercase characters");
    //     var confirmUpperCase = confirm("Click OK to confirm you would like to include uppercase characters");
    // }

    var passwordCharacters = [];

    if(confirmSpecialCharacter) {
        passwordCharacters = passwordCharacters.concat(specialChar)
    }
    if(confirmNumericCharacter) {
        passwordCharacters = passwordCharacters.concat(number)
    }
    if(confirmLowerCase) {
        passwordCharacters = passwordCharacters.concat(alphaLower)
    }
    if(confirmUpperCase) {
        passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

    console.log(passwordCharacters)

    var randomPassword = ""

    for(var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }
    return randomPassword;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}