// Assignment Code
var generateBtn = document.querySelector("#generate");
var specChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "`", "{", "|", "}", "~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var combined = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowercaseP = confirm("Would you like lowercase characters?")

if (lowercaseP == true) {
  combined.push(...lowercase);
}

var uppercaseP = confirm("Would you like UPPERCASE characters?")

if (uppercaseP == true) {
  combined.push(...uppercase);
}

var specCharsP = confirm("Would you like special characters?")

if (specCharsP == true) {
  combined.push(...specChars);
}

var numbersP = confirm("Would you like numeric characters?")

if (numbersP == true) {
  combined.push(...numbers);
  // console.log(combined);
} 