// Assignment Code
var generateBtn = document.querySelector("#generate");

//We will make several arrays that we can use random on later. We set all arrays as string inputs as any math dont should be on array size, not on the entries.

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "\\", "`", "{", "|", "}", "~"];
var passLength;
var isLow;
var isUp;
var isChar;
var isNum;
var whatChars;

// Prompt length of password (8 - 128 only)
function passLengthCheck(){
  var passLength = prompt("How long would you like your password to be? (please choose between 8-128 characters");
  //Add conditions checks in case user didn't listen
  
  if (passLength < 8){
    alert("You selected a number below 8, password must be between 8 and 128 characters");
    passLengthCheck();
  }else if (passLength > 128){
    alert("You have high hopes, but that password is simply too long. Please select something between 8 and 128 characters");
    passLengthCheck();
  }else if (isNaN(passLength)){
    alert("Please provide a numerical, integer value between 8 - 128");
    passLengthCheck();
  }else{
    alert("Password length of " + passLength + " characters accepted.");
  }
  return passLength;
}

// Prompt types of characters for use in password

function upCheck(){
  isUpCheck = prompt("Would you like your password to include upper case letters? \n Please respond 'y' or 'n' for yes/no.");

  if (isUpCheck === "y"){
    isUp = true;
  }else if (isUpCheck ==="n"){
    isUp = false;
  }else{
    alert("Please respond with either 'y' or 'n' to indicate whether you would like upper case letters.")
    upCheck()
  }
  return isUp;
}

function lowCheck(){
  isLowCheck = prompt("Would you like your password to include lower case letters? \n Please respond 'y' or 'n' for yes/no.");

  if (isLowCheck === "y"){
    isLow = true;
  }else if (isLowCheck ==="n"){
    isLow = false;
  }else{
    alert("Please respond with either 'y' or 'n' to indicate whether you would like lower case letters.")
    lowCheck()
  }
  return isLow;
}

function charCheck(){
  isCharCheck = prompt("Would you like your password to include special characters? \n Please respond 'y' or 'n' for yes/no.");

  if (isCharCheck === "y"){
    isChar = true;
  }else if (isCharCheck ==="n"){
    isChar = false;
  }else{
    alert("Please respond with either 'y' or 'n' to indicate whether you would like special characters.")
    charCheck()
  }
  return isChar;
}

function numCheck(){
  isNumCheck = prompt("Would you like your password to include numbers? \n Please respond 'y' or 'n' for yes/no.");

  if (isNumCheck === "y"){
    isNum = true;
  }else if (isNumCheck ==="n"){
    isNum = false;
  }else{
    alert("Please respond with either 'y' or 'n' to indicate whether you would like numbers.")
    numCheck()
  }
  return isNum;
}
  function goodCheck(){
    var whatChars = [0, 0, 0, 0];
    weGood = "Your password will contain: ";

    if(isLow === true ){
      whatChars[0] = 1
      weGood = weGood + "lower case characters, ";
    }if (isUp === true){
      whatChars[1] = 1
      weGood = weGood + "upper case characters, ";
    }if(isNum === true){
      whatChars[2] = 1
      weGood = weGood + "numbers, ";
    }if(isChar === true){
      whatChars[3] = 1
      weGood = weGood + "special characters, ";
    }if ( isLow === false && isUp === false && isNum === false && isChar === false){
      alert("You must select at least one parameter for your password.")
      generatePassword()
    }
    alert(weGood + "and that's it!")
    return whatChars;
  }

// Generate pseudo-random number. Code from javascript documentation.

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate password. This should be randomized, show the user the options they selected prior, and then output the password.
// This will first check to see if theres only one "type" of character, if this si true it will randomize from that array
// Then, it will try to randomize type of character output and select a random character from that array. 
// If character type randomization fails it will output a random character from the first type of character selected as follows:
// lower case, upper case, number, special character
// The individual character will be randomized at this point, but not the type of character.
function generatePassword() {
  passLength = passLengthCheck();
  isLow = lowCheck();
  isUp = upCheck();
  isChar = charCheck();
  isNum = numCheck();
  whatChars = goodCheck();
  var password ="";

  if(whatChars === [1, 0, 0, 0]){
    for(var i = 0; i < passLength; i++){
      password = password + lowCase[getRandomInteger(0, lowCase.length -1)]
    }
  }else if(whatChars === [0, 1, 0, 0]){
    for(var i = 0; i < passLength; i++){
      password = password + upCase[getRandomInteger(0, upCase.length -1)]
    }
  }else if(whatChars === [0, 0, 1, 0]){
    for(var i = 0; i < passLength; i++){
      password = password + numbers[getRandomInteger(0, numbers.length -1)]
    }
  }else if(whatChars === [0, 0, 0, 1]){
    for(var i = 0; i < passLength; i++){
      password = password + characters[getRandomInteger(0, characters.length -1)]
    }
  }else{
    for(var i = 0; i < passLength; i++){
      numGen = getRandomInteger(1, 4)
      if (numGen === 1){
        if (whatChars[0] === 1){
          password = password + lowCase[getRandomInteger(0, lowCase.length -1)]
        }
      }else if (numGen === 2){
        if (whatChars[1] === 1){
          password = password + upCase[getRandomInteger(0, upCase.length -1)]
        }

      }else if (numGen === 3){
        if (whatChars[2] === 1){
          password = password + numbers[getRandomInteger(0, numbers.length -1)]
        }
      
      }else if (numGen === 4){
        if (whatChars[3] === 1){
          password = password + characters[getRandomInteger(0, characters.length -1)]
        }

      }else{
        if( whatChars[0] == 1){
          password = password + lowCase[getRandomInteger(0, lowCase.length -1)]

        }else if(whatChars[1] == 1){
          password = password + upCase[getRandomInteger(0, upCase.length -1)]
        }else if(whatChars[2] == 1){
          password = password + numbers[getRandomInteger(0, numbers.length -1)]
        }else if(whatChars[3] == 1){
          password = password + characters[getRandomInteger(0, characters.length -1)]
        }
      }
    }
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
