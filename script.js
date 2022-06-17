/* Event listener to create question prompts*/
document.querySelector("#generate").addEventListener("click", writePassword);

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

// Prompt to confirm how many characters the user wouild like in their password
function generatePassword() {
    var confirmLength = (prompt("How many characters would you like to include in your password?"));

    //Loop to check if user in within the parameters

    while(confirmLength <=7 || confirmLength >= 133) {
        alert("Password must be between 8 and 132 characters. Please try again.");
        var confirmLength = (prompt("How many characters would you like to include in your password?"));
    }
    //Alert to confirm user character choice
    alert("Your password will contain " + confirmLength + " characters.");

    //Passwrod parameters
    var confirmSpecialCharacter = confirm("Click OK to confirm you would like to include Special Characters in your Password");
    var confirmNumericCharacter = confirm("Click OK to confirm you would like to include Numeric Characters in your Password");
    var confirmLowerCase = confirm("Click OK to confirm you would like to include Lower Case Characters in your Password");
    var confirmUpperCase = confirm("Click OK to confirm you would like to include Uppercase Characters in your Password");

    //Loop to catch if the user answers outside of the parameters
    while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You MUST choose at least one parameter for your password. Please try again.");
        var confirmSpecialCharacter = confirm("Click OK to confirm you would like to include special characters");
        var confirmNumericCharacter = confirm("Click OK to confirm you would like to include numeric characters");    
        var confirmLowerCase = confirm("Click OK to confirm you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm you would like to include uppercase characters");
    }

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