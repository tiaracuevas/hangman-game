

//Global variables

///////////////////
var wins =0;
var loss =0;
var remainingLives= 10;

var secretWords = [
  "basketball", 
  "football", 
  "soccer", 
  "hockey", 
  "baseball", 
  "swimming", 
  "boxing"];

var word = secretWords[Math.floor(Math.random() * secretWords.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0) {
  alert(answerArray.join(" "));
  var guess = prompt("Guess a letter!");
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Only one letter please!");
  } else {
    for (var h = 0; h < word.length; h++) {
      if (word[h] === guess) {
        answerArray[h] = guess;
        remainingLetters--;
      }
      if (word[h] != guess) {
        answerArray[h] != guess;
        remainingLives--;
      }
      if (remainingLetters === 0 && remainingLives > 0){
        alert ("Win"); wins++
      }
      if (remainingLetters > 0 && remainingLives === 0){
        alert ("Loss"); loss++
      }
    
    } 
  }
}

alert(answerArray.join(" "));
alert ("Awesome! The answer was " + word +"!");

