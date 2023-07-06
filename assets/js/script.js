// Assignment Code
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  
  passwordText.value = password;
}

// Generate random password based on selected criteria
function generatePassword() {
  // Define criteria for password generation
  var length = parseInt(prompt("Enter password length (8-128 characters):"));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return '';
  }

  var uppercase = confirm("Include uppercase letters?");
  var lowercase = confirm("Include lowercase letters?");
  var numbers = confirm("Include numbers?");
  var symbols = confirm("Include symbols?");
  
  // Define character sets based on selected criteria
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var symbolChars = "!@#$%^&*()-=_+[]{}|;:,.<>?";

  var chars = "";
  if (uppercase) chars += uppercaseChars;
  if (lowercase) chars += lowercaseChars;
  if (numbers) chars += numberChars;
  if (symbols) chars += symbolChars;

  // Generate random password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  
  return password;
}