var generateBtn = document.querySelector("#generate");


var generatePassword = function() {
//   var passwordLength = {
//     from: 8,
//     to: 128,
//   };
//   var passwordCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !#$%&'*-/:<=>?@^_`~";
//   var password = "";
//   //prompt for password length
//   var passwordLength = window.prompt("Choose length of password between 8 and 128 characters");
//   // validate promptLength answer

//   if (passwordLength === "" || passwordLength === null) {
//     window.alert("Response not valid. Please try again.");
//   }
//   else if (passwordLength > 8 || passwordLength < 128) {
//   }
//   else {
//     window.alert("Invalid Response");
//     return false;
//   }
//   // var promptLower = window.confirm("Do you want the password to include lowercase letters?");
//   // var promptUpper = window.confirm("Do you want the password to include uppercase letters?");
//   // var promptNum = window.confirm("Do you want the password to include numeric characters?");
//   // var promptSpecial = window.confirm("Do you want the password to include special characters?");

//   for (var i = 0; i < passwordLength; i++) {
//     var randomNumber = Math.floor(Math.random() * passwordCharacters.length);
//     password +=passwordCharacters.substring(randomNumber, randomNumber +1);
//   }
//     document.getElementById("password");
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
