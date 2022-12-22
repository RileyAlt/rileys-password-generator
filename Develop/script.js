const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCase = ["a", 'b']

// Assignment code here
function generatePassword(canUseUpperCase) {
  if (canUseUpperCase) {
    return "ABCD";
  } 
  return "abcd";
}

// Write password to the #password input
function writePassword() {

  var shouldUseUpperCase = confirm("Do you want to use upper case?");

  if (shouldUseUpperCase) {
    console.log("I am allowed to use uppercase");
  } else {
    console.log("I am NOT allowed to use uppercase");
  }

  var password = generatePassword(shouldUseUpperCase);
  var passwordText = document.querySelector("#password");




  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
