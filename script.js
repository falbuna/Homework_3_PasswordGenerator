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
  // After they press the "Generate Password" button, they will be asked how long they want the password, with a default value of 8 characters.
  var passlength = prompt('How long do you want your password? (Please enter a password length between 8 - 128 characters)');
  var length = parseInt(passlength)

  // If they cancel, breaks the loop.
  if (passlength === "null" || passlength === null || passlength == "") {
    return;
  }
  // This will alert the user that the password must be between 8 and 128 characters.
  while (passlength < 8 || passlength > 128){
    alert('Please enter a password length between 8 - 128 characters!')
    // Added a default value of 8 after the alert in the new prompt to help the user.
    passlength = prompt('How long do you want your password?', '8');
    var length = parseInt(passlength)

    // If they cancel, breaks the loop.
    if (passlength === "null" || passlength === null || passlength == "") {
      return;
    }
  }

  // This will split the string of lowercase letters into an array of substrings.
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // This will split the string of uppercase letters into an array of substrings.
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  // This will split the string of numbers into an array of substrings.
  const numeric = '0123456789'.split('');
  // This will split the string of special characters into an array of substrings.
  const special = '\xa0!\"#$%&\'\(\)*+\,.-/;:\<\=\>\\?@\]\[^_`\}\{|~'.split('');

  // This is a placeholder for the array that will contain all the strings that are confirmed with the prompts.
  var combinedarray = [];

  // This prompt will ask if they want to use lowercase letters.
  var lc = confirm('Do you want to use lowercase letters?');
      if (lc == true){
        // If the user pressed "OK" on the prompt, add the lowercase strings into the array. If the user pressed canel, do not add the lowercase strings.
        combinedarray = combinedarray.concat(lowercase);
      }
  // This prompt will ask if they want to use uppercase letters.
  var uc = confirm('Do you want to use uppercase letters?');
      if (uc == true){
        // If the user pressed "OK" on the prompt, add the uppercase strings into the array. If the user pressed cancel, do not add the uppercase strings.
        combinedarray = combinedarray.concat(uppercase);
      }
  // This prompt will ask if they want to use numerical values.
  var nm = confirm('Do you want to use numbers?');
            if (nm == true){
        // If the user pressed "OK" on the prompt, add the numerical strings into the array. If the user pressed cancel, do not add the numerical strings.
        combinedarray = combinedarray.concat(numeric);
      }
  // This prompt will ask if they want to use special characters.
  var sp = confirm('Do you want to use special characters?');
            if (sp == true){
        // If the user pressed "OK" on the prompt, add the string of special characters into the array. If user pressed cancel, do not add the special strings.
        combinedarray = combinedarray.concat(special);
            }
      
    // This will convert the elements of the combined array into a new array.
    var password = combinedarray.join('');

    // This will generate the random password with the length and the characters allowed through the previous prompts.
    var randompassword = '';
    for (i=0; i < length; i++){
      var rletter = Math.floor(Math.random() * password.length);
      randompassword+= password.substring(rletter, rletter+1);
    }
    // Returns the variable randompassword to the generatePassword function.
    return randompassword;
}