# Homework 3 Password Generator

Homework for Week 3

## Introduction

A company that holds very sensitive and valuable information reached out to me as a junior developer to develop a webpage that would randomly generate a password when a button is clicked. The Password Generator will ask a series of prompts that will validate each answer and outputs a randomly generated password that matches the requested criteria.

My motivation for doing taking on this project was to test my knowledge and skills on Javascript arrays and functions. This assigment really tested my understanding on arrays, variables, and functions. The aesthetics and general layout of the webpage was already created, and so it was my job to ensure that the password is created based on the series of prompts that the user answers.

## Usage

When the user first enters the webpage, this is what they will see.

![Main Password Generator Page with the Generate Password button.](https://github.com/falbuna/Homework_3_PasswordGenerator/blob/master/Assets/Password_Generator.PNG)

When the user presses the "Generate Password" button, they will see a prompt that will ask for the length of the password. The user can also press cancel to end.

![Prompt for Password Length.](https://github.com/falbuna/Homework_3_PasswordGenerator/blob/master/Assets/Password_Length.PNG)

When the user enters a length that is not between 8 - 128 characters, they will get this alert.

![Alert if the Password Length is not between 8 - 128 characters.](https://github.com/falbuna/Homework_3_PasswordGenerator/blob/master/Assets/Password_LengthError.PNG)

The user will be asked whether they want to use lowercase letters. If they do want lowercase letters in the generated password, they can press "OK". Otherwise, they would press cancel. Pressing cancel from this point forward will not end the process.

![Prompt for lowercase letters.](https://github.com/falbuna/Homework_3_PasswordGenerator/blob/master/Assets/Lowercase.PNG)

The user will be asked whether they want to use uppercase letters. If they do want uppercase letters in the generated password, they can press "OK". Otherwise, they would press cancel. Pressing cancel from this point forward will not end the process.

![Prompt for uppercase letters.](https://github.com/falbuna/Homework_3_PasswordGenerator/blob/master/Assets/Uppercase.PNG)

The user will be asked whether they want to use numbers. If they do want numbers in the generated password, they can press "Ok". Otherwise, they would press cancel. Pressing cancel from this point forward will not end the process.

![Prompt for numeric characters.](https://github.com/falbuna/Homework_3_PasswordGenerator/blob/master/Assets/Numbers.PNG)

The user will finally be asked whether they want to use special characters. If they do want to use special characters in the generated password, they can press "Ok". Otherwise, they would press cancel. Pressing cancel will not end the process.

![Prompt for special characters.](https://github.com/falbuna/Homework_3_PasswordGenerator/blob/master/Assets/Special.PNG)

After the last prompt, the password will generate randomly according to how the user answered the prompts.

![Randomly Generated Password.](https://github.com/falbuna/Homework_3_PasswordGenerator/blob/master/Assets/Generated_Password.PNG)

If the user is not satisifed with the generated password, they can request a new password by pressing the "Generate Password" button. However, the generated password will be lost and they will have to go through each of the prompts to get a new password.

## How I Coded the Webpage

As I previously stated, the aesthetics and general layout of the webpage was prebuilt. Luckily, this meant that I could fully dedicate my time and effort to the Javascript code and ensure proper functionality. I initially started this assignment by looking at the pre-coded Javascript file and figuring out what the button "Generate Password" did. By using the Chrome inspector tool in the console, I found that the generatePassword() function was needed to start the function for generating the password. I first started out, by creating a variable that held all the possible string combinations for the lowercase letters. I then used a for loop function that would output a random string of lowercase letters using the random Math floor function. I started out with a fixed length of 8 characters, to get my code to start working. Getting the code to generate the random letters turned out to be the hardest part of the assignment. After a lot of trial and error, I was able to get the function to work by using lowercase letters and a fixed length of 8 characters. Once I got the code to work with all lowercase letters and the set length, I inserted in the code the first prompt that requested the length of the password. The prompt asked for the length of the password, which became the variable "passlength", that was inserted in the random Math floor function to output the desired length. I also gave conditions that if the password was too short ( less than 8 characters) or too long (greater than 128 characters) that a new length needs to be given. I also added a break in the loop that if the user canceled, they will not be stuck in a loop that will continually ask them for a value for the length. 

Once I got the code to work with a prompt for length, I then added addtional prompts that allowed the user to choose uppercase or numeric values. This turned out to be a challenge because I started with "if" and "else" statements to give possible outcomes. As I was starting to code the prompts, I was beginning to see that the way I approached the problem was going to take a lot of extra time. The way I initially thought of tackling this assignment, I was going to have additional variables for all the different possible outcomes of the character strings, that was dependent on how the user answered the confirm prompt. When I psuedocoded the assignment given the parameters, I found that I would have needed about 15 different variables for all the different outcomes. For example, lowercase and numeric would have been a variable, and uppercase and special would have been it's own variable. I would have also required additional conditional statements, and I realized that the time needed to code this would have been too great. After asking my instructor for guidance, I found that I can turn the strings into an array and combine the desired arrays into what is needed depending on how the user answered the prompts. One of last issues I found was that my random Math floor function would only work with strings, and not arrays. After some research, I found to get around this I needed to turn the combined array that was created from the prompts into a new string that held all of the possible characters from the combined array.

## Acknowledgements

I wanted to thank the Instructor, Chris Stead, and the TA's for helping me come up with idea to use arrays instead of strings for the lowercase, uppercase, numeric, and special character variables.