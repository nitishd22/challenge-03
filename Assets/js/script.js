// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['!', '"', '#', '$', "%", '^', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?','@','[',']','^','_',"\\","`", "{", "|", "}", "~" ];

function generatePassword(){
  length = prompt("How many characters will your new password be? (8-128)")
  console.log("password length: "+ length);
  var combination = [];
  password = "";

  if(!length){
    alert("You must enter a password length.")
  }
  else if(length<8 || length>128 ){
    length = prompt("The length must be between 8 and 128.")
    console.log("password length: "+ length);
  }
  else{
    var askLower = prompt("Do you want your password to have lowercase letters?");
    console.log("lowercase: "+ askLower);
    var askUpper = prompt("Do you want your password to have uppercase letters?");
    console.log("uppercase: "+ askUpper);
    var askNum = prompt("Do you want your password to have numbers?");
    console.log("numbers: "+ askNum);
    var askSpecial = prompt("Do you want your password to have special characters?");
    console.log("special: "+ askSpecial);
  };

  if (!askLower && !askUpper && !askNum && !askSpecial){
    criteria = alert("You must select at least one criterion.");
  }

  if(askNum){
    for (var i of numbers)
      combination.push(i);
  }
  if(askUpper){
    for (var i of upperCase)
      combination.push(i);
  }
  if(askLower){
    for (var i of lowerCase)
      combination.push(i);
  }
  if(askSpecial){
    for (var i of special)
      combination.push(i);
  }
  console.log(combination);

  for (var i=0; i<length;i++){
    password+=combination[Math.floor(Math.random()*combination.length)];
  }
  console.log(password);
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
