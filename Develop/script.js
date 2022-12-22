const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const lowerCaseLetters = "abcdefghijklmkopqrstuvwxyz".split('');
const specialCharacters = "!#$%&\"'()*+,-./:;<=>?@[\]^_`{|}~".split('');
const numbericCharacters = "0123456789".split('');

// Assignment code here
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

  // Need to enforce passwordLength
  var mySecretPassword = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomCharacter = charactersICanUse[Math.floor(Math.random()*charactersICanUse.length)];
    mySecretPassword += randomCharacter;
  }

  return mySecretPassword;
}



// Write password to the #password input
function writePassword() {

  var passwordLength = prompt("Pick a length for your password. (8 to 128 characters)");
  var shouldUseUpperCase = confirm("Do you want to use upper case?");
  var shouldUseLowerCase = confirm("Do you want to use lower case?");
  var shouldUseSpecialCharacters = confirm("Do you want to use special characters?");
  var shouldUseNumbericCharacters = confirm("Do you want to use Numbers?");
  var password = generatePassword(passwordLength, shouldUseUpperCase, shouldUseLowerCase, shouldUseSpecialCharacters, shouldUseNumbericCharacters);

  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
