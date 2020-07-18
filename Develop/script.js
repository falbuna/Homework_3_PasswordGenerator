// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generates Password

function generatePassword(){
  // After you press the button, you are asked how long you want the passord.
  passlength = prompt('How long do you want your password?')
  // Password must be between 8 and 128 characters
  while (passlength < 8 || passlength > 128){
    alert('Please choose a password between 8 - 128 characters!')
    passlength = prompt('How long do you want your password?')
  }
  var lowcletters = ('abcdefghijklmnopqrstuvwxyz');
  var randomlet = '';
    for (i=0; i < passlength; i++){
      var rletter = Math.floor(Math.random() * lowcletters.length);
      randomlet += lowcletters.substring(rletter, rletter+1);
    }
    return randomlet;
}