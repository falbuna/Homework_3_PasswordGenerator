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

function generatePassword() {
  // After you press the button, you are asked how long you want the passord.
  passlength = prompt('How long do you want your password?');
  // If you cancel, breaks the loop
  if (passlength === "null" || passlength === null || passlength == "") {
    return;
  }
  // Password must be between 8 and 128 characters
  while (passlength < 8 || passlength > 128){
    alert('Please choose a password between 8 - 128 characters!')
    passlength = prompt('How long do you want your password?');
    // If they cancel, breaks the loop
    if (passlength === "null" || passlength === null || passlength == "") {
      return;
    }
  }

  // This array holds all the lower case letters.
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // This array holds all the upper case letters.
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  // This array holds all the numeric characters.
  const numeric = '0123456789'.split('');

  // This is a placeholder for the array that will contain all the arrays that are requested.
  var combinedarray = [];

  // This prompt will ask if you want to use lower case letters.
  var lc = confirm('Do you want to use lower case letters?');
      if (lc == true){
        combinedarray = combinedarray.concat(lowercase);
      }
  // This prompt will ask if you want to use upper case letters.
  var uc = confirm('Do you want to use upper case letters?');
      if (uc == true){
        combinedarray = combinedarray.concat(uppercase);
      }
  // This prompt will ask if you want to use numerical characters.
  var nm = confirm('Do you want to use numbers?');
            if (nm == true){
        combinedarray = combinedarray.concat(numeric);
      }
      
    // This will turn the comined array into a string with all the characters that were allowed through the previous prompts.
    var password = combinedarray.join('');

    // This will generate the random password with the length and the characters selected.
    var randompassword = '';
    for (i=0; i < passlength; i++){
      var rletter = Math.floor(Math.random() * password.length);
      randompassword+= password.substring(rletter, rletter+1);
    }
    return randompassword;
}