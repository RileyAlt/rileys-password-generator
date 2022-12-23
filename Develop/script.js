const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const lowerCaseLetters = "abcdefghijklmkopqrstuvwxyz".split('');
const specialCharacters = "!#$%&\"'()*+,-./:;<=>?@[\]^_`{|}~".split('');
const numbericCharacters = "0123456789".split('');

// this function takes in a password length and some booleans to determine what characters it can use
// this function returns a password of the specified length
function generatePassword(passwordLength, canUseUpperCase, canUseLowerCase, canUseSpecialCharacters, canUseNumbericCharacters) {

  var charactersICanUse = []
  if (canUseUpperCase) {
    charactersICanUse = charactersICanUse.concat(upperCaseLetters);
  }

  if (canUseLowerCase) {
    charactersICanUse = charactersICanUse.concat(lowerCaseLetters);
  }

  if (canUseSpecialCharacters) {
    charactersICanUse = charactersICanUse.concat(specialCharacters);
  }

  if (canUseNumbericCharacters) {
    charactersICanUse = charactersICanUse.concat(numbericCharacters);
  }

  // Here we are going to start with an empty string and add a random character from charactersICanUse until I have met the
  // specified length
  var mySecretPassword = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomCharacter = charactersICanUse[Math.floor(Math.random()*charactersICanUse.length)];
    mySecretPassword = mySecretPassword + randomCharacter;
  }

  return mySecretPassword;
}



// Write password to the #password input
function writePassword() {

  var passwordLength = parseInt(prompt("Pick a length for your password. (8 to 128 characters)"));

  // Check if a valid number was entered
  if (isNaN(passwordLength)) {
    alert("Please enter a valid number (8 to 128 characters)");
    return;
  } 


  // Validate Password Length
  if (passwordLength < 8){
    alert("Password not long enough (Min 8 characters)");
    return;
  }

  if (passwordLength > 128) {
    alert("Password too long (Max 128 characters)");
    return;
  }


  // Get values from user
  var shouldUseUpperCase = confirm("Do you want to use upper case?");
  var shouldUseLowerCase = confirm("Do you want to use lower case?");
  var shouldUseSpecialCharacters = confirm("Do you want to use special characters?");
  var shouldUseNumbericCharacters = confirm("Do you want to use Numbers?");

  // Check if at least one character type was chosen
  if (!shouldUseUpperCase && !shouldUseLowerCase && !shouldUseSpecialCharacters && !shouldUseNumbericCharacters) {
    alert("You must selcet at least one Character type.\n Please try again");
    return;
  }

  var password = generatePassword(passwordLength, shouldUseUpperCase, shouldUseLowerCase, shouldUseSpecialCharacters, shouldUseNumbericCharacters);

  // Update the textbox
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
