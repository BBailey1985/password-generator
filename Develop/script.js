var generateBtnEl = document.querySelector("#generate");

// password criteria
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = " !#$%&'*-/:<=>?@^_`~";

var password = "";
var passwordAnswers = [];


var generatePassword = function() {
  
  //prompt for password length
  var passLength = prompt("Choose length of password between 8 and 128 characters");
  // validate passLength answer
  if (passLength === "" || passLength === null || passLength < 8 || passLength > 128) {
    alert("Response not valid. Please try again.");
  }
  console.log(passLength);

  // prompt for lowercase letters
  var passLower = confirm("Do you want the password to include lowercase letters?");
  console.log(passLower);
  //validate passLower answer
  if (passLower) {
    (passwordAnswers.push(lowerCase));
  } else if (!passLower) {
    alert("Ok....whatever.");
  }

  // prompt for uppercase letters
  var passUpper = confirm("Do you want the password to include uppercase letters?");
  console.log(passUpper);
    //validate passUpper answer
  if (passUpper) {
    (passwordAnswers.push(upperCase));
  } else if (!passUpper) {
    alert("If you say so.")
  }

  // prompt for numeric characters
  var passNum = confirm("Do you want the password to include numbers?");
  console.log(passNum);
    //validate passNum answer
  if (passNum) {
    (passwordAnswers.push(numbers));
  } else if (!passNum) {
    alert("You are no fun.")
  }

  // prompt for special characters
  var passSpecial = confirm("Do you want the password to include special characters?");
  console.log(passSpecial);
    //validate passSpecial answer
  if (passSpecial) {
    (passwordAnswers.push(specialCharacters));
  } else if (!passSpecial) {
    alert("Wow...ok")
  }

  console.log(passwordAnswers);

  var newPassString = passwordAnswers.join("");


  for (var i = 0; i <= passLength; i++) {
      var passRandom = newPassString.charAt(Math.floor(Math.random() * newPassString.length));
      password = password.concat(passRandom);
  }
    return password;
}

// make a loop to grab passwordAnswers
// for (var i = 0; i <=passLength; i++) {
//   var passwordRandom = 
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtnEl.addEventListener("click", writePassword);


