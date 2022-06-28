// Assignment Code
var generateBtn = document.querySelector("#generate");

passwordCOMPLEX = {
  totalLENGTH: 8,
  lowerCASE: true,
  upperCASE: true,
  hasNUM: true,
  hasSPECIAL: true
};

// Write password to the #password input
function writePassword() {
  
  var answer = false;

  while(answer == false){
  
    passwordCOMPLEX.totalLENGTH = window.prompt("How long would you want the password?");
    passwordCOMPLEX.lowerCASE = window.confirm("Do you want lower case letters?");
    passwordCOMPLEX.upperCASE = window.confirm("Do you want upper case letters?");
    passwordCOMPLEX.hasNUM = window.confirm("Do you want numbers?");
    passwordCOMPLEX.hasSPECIAL = window.confirm("Do you want special characters?");
  
    answer = passwordCHECKER(passwordCOMPLEX);

  }
  

  var password = generatePassword(passwordCOMPLEX);
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// This checks if all the parameters needed for a correct password are met.
function passwordCHECKER(checkMATE)
{ 
  if (checkMATE.totalLENGTH < 8)
  {
    window.alert("Your Password is too small!");
    return false;
  }
  else if (checkMATE.totalLENGTH > 128)
  {
    window.alert("Your Password is too large!");
    return false;
  }
  if(checkMATE.lowerCASE || checkMATE.upperCASE || checkMATE.hasNUM || checkMATE.hasSPECIAL)
  {
    return true;
  }
  else
  {
    window.alert("You need to select OK for at least one option for password customization to work.")
    return false;
  }
}

function generatePassword(passBOX){
  var endWORK = [];

  //probably a dumb way of generating a password, but this is what made sense to me.
  for (var i = 0; i <= passBOX.totalLENGTH; i++)
  {
    var goodRUN = false;
    var insertCHAR;
    var randomOUTPUT = Math.floor(Math.random() * 4);
    switch (randomOUTPUT){
      case 0:
        if(passBOX.lowerCASE == true)
        {
            insertCHAR = generateLOWER();
            goodRUN = true;
        }
        else
        {
          //negative increments are to keep the char placement in the same spot of the array so that no spots are missed.
          i--;
        }
        break;
      case 1:
        if(passBOX.upperCASE == true)
        {
          insertCHAR = generateUPPER();
          goodRUN = true;
        }
        else
        {
          i--;
        }
        break;
      case 2:
        if(passBOX.hasNUM == true)
        {
          insertCHAR = Math.floor(Math.random()*10);
          goodRUN = true;
        }
        else
        {
          i--;
        }
        break;
      case 3:
        if(passBOX.hasSPECIAL == true)
        {
          insertCHAR = generateSpecial();
          goodRUN = true;
        }
        else
        {
          i--;
        }
        break;
      default:
        break;
    }
    //If the run is 'good' then this action will splice the char into the array.
    if (goodRUN == true)
    {
      endWORK.splice(i,0, insertCHAR);
    }
  }
  var endGame = endWORK.join("");

  //There use to be a window alert here that would also showcase the password, but as soon as I used
  // the .join function it pooped itself when special characters were involved. Idk why but it just
  // forced me to push this to text box above the generator button.
  return endGame;
}


function generateLOWER()
{
  var answer;
  var char;

  answer = Math.floor(Math.random() * (122 - 97) +97);
  return char = String.fromCharCode(answer);
}
function generateUPPER()
{
  var answer;
  var char;

  answer = Math.floor(Math.random() * (90 - 65) +65);
  return char = String.fromCharCode(answer);
}
function generateSpecial()
{
  var batchTYPE = Math.floor(Math.random()*4);
  var answer;
  var char;
  //since the special characters are in seperate chunks on the ASCII board for some reason I had to make another switch board that contained the chunks.
  switch (batchTYPE){
    case 0:
      answer = Math.floor(Math.random() * (47 - 33) +33);
      break;
    case 1:
      answer = Math.floor(Math.random() * (64 - 58) +58);
      break;
    case 2:
      answer = Math.floor(Math.random() * (96 - 91) +91);
      break;
    case 3:
      answer = Math.floor(Math.random() * (126 - 123) +123);
      break;
    default:
      break;

  }
  return char = String.fromCharCode(answer);

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


