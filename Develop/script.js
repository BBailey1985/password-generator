var generateBtn = document.querySelector("#generate");

var passwordLength = {
  from: 0,
  to: 128,
}
var password = "";
var passwordCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !#$%&'*-/:<=>?@^_`~";

var generatePassword = function() {
  
  //prompt for password length
  var passwordInput = prompt("Choose length of password between 8 and 128 characters");
  // validate promptLength answer

  if (passwordInput === "" || passwordInput === null || passwordInput < 8 || passwordInput > 128) {
    alert("Response not valid. Please try again.");
  }
  
  // prompt for lowercase
  var promptLower = confirm("Do you want the password to include lowercase letters?");

  if (promptLower === true
  
  
  // var promptLower = window.confirm("Do you want the password to include lowercase letters?");
  // var promptUpper = window.confirm("Do you want the password to include uppercase letters?");
  // var promptNum = window.confirm("Do you want the password to include numeric characters?");
  // var promptSpecial = window.confirm("Do you want the password to include special characters?");

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordCharacters.length);
    password +=passwordCharacters.substring(randomNumber, randomNumber +1);
  }
    document.getElementById("password");

  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
