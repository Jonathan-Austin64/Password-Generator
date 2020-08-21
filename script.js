// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");
console.log("before setting");
  passwordText.value = password;
  console.log("password is " + password);
}


//Add event listener to generate button
generateBtn.addEventListener ("click", writePassword);

var values = {
  charLength: 8,
  includeLower: true,
  includeUpper: true,
  includeNumber: true,
  includeSpecial: true,
}


//user answers a series of questions to establish the parameters of the password needed.
function generatePassword() {
  values.charLength = parseInt(prompt("How many characters would you like? Choose a value between 8 and 128"));
  values.includeLower = confirm("would you like lowercase?");
  values.includeUpper = confirm("would you like uppercase?");
  values.includeNumber = confirm("would you like numbers?");
  values.includeSpecial = confirm("would you like special characters?");

  //log answers
  console.log(values.charLength);
  console.log(values.includeLower);
  console.log(values.includeUpper);
  console.log(values.includeNumber);
  console.log(values.includeSpecial);

  var lowerOptions = "abcdefghijklmnopqrstuvwxyz";
  var upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberOptions = "1234567890";
  var specialOptions = "!@#$%^&*()";

  //Concat requested elements

  var desiredCharacters = [];

  if (values.includeLower) {
    desiredCharacters = desiredCharacters.concat(lowerOptions.split(""));
  }

  if (values.includeUpper) {
    desiredCharacters = desiredCharacters.concat(upperOptions.split(""));
  }

  if (values.includeNumber) {
    desiredCharacters = desiredCharacters.concat(numberOptions.split(""));
  }

  if (values.includeSpecial) {
    desiredCharacters = desiredCharacters.concat(specialOptions.split(""));
  }

  console.log(desiredCharacters);
  console.log(values.charLength);
  var passwordText = "";

  //LETS GO
  for (var i = 0; i < values.charLength; i++) {
    var randomNumber = Math.floor(Math.random() * 71)
    console.log(randomNumber);
    passwordText += desiredCharacters[randomNumber];  ;
  }

  return passwordText;
}