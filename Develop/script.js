// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  var lowcletters = ('abcdefghijklmnopqrstuvwxyz');
  var length = 4;
  var randomlet = '';
    for (i=0; i < length; i++){
      var rletter = Math.floor(Math.random() * lowcletters.length);
      randomlet += lowcletters.substring(rletter, rletter+1);
    }
    return randomlet;
}

// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
