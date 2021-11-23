var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  //prompt for password length
  var promptLength = window.prompt("Choose length of password between 8 and 128 characters");
  console.log();
  // validate promptLength answer

  if (promptLength === "" || promptLength === null) {
    window.alert("Response not valid. Please try again.");
  }
  else if (promptLength < 8)
  // confirm("Confirm you want to include lowercase characters?");
  // confirm("Confirm you want to include uppercase characters?");
  // confirm("Confirm you want to include numeric characters?");
  // confirm("Confirm you want to include special characters?");

  // validation of input


  // generate password based on validated data



  //display password







  return "true"

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
