//Possible words

var secretWords = ["basketball", "football", "soccer", "hockey", "baseball", "swimming"];
var remainingGuesses = 10;
var wins = 0;
var loss = 0;


//Start


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
 var userGuess = event.key;

// Randomly chooses a word from the options array.
var wordSelection = secretWords[Math.floor(Math.random() * secretWords.length)];



}

// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];
var wins = 0;
var loss = 0;
var ties = 0;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // Alerts the key the user pressed (userGuess).
  alert("User guess: " + userGuess);

  // Alerts the Computer's guess.
  alert("Computer guess: " + computerGuess);

  // If then statements (all possible outcomes)//

  if (userGuess === computerGuess) {
    alert ("Tie"); ties++
  }

  if (userGuess === computerChoices[0] && computerGuess === computerChoices[1]) {
    alert ("Loss"); loss++
  } 

  if (userGuess === computerChoices[0] && computerGuess === computerChoices[2]) {
    alert ("Win"); wins++
  } 

  if (userGuess === computerChoices[1] && computerGuess === computerChoices[2]) {
    alert ("Loss"); loss++
  } 

  if (userGuess === computerChoices[1] && computerGuess === computerChoices[0]) {
    alert ("Win"); wins++
  } 

  if (userGuess === computerChoices[2] && computerGuess === computerChoices[0]) {
    alert ("Loss"); loss++
  } 

  if (userGuess === computerChoices[2] && computerGuess === computerChoices[1]) {
    alert ("Win"); wins++
  } 

var gameE = document.getElementById("game");

text = "<p>Wins: " + wins + "</p>"
+ "<p>Loss: " + loss + "</p>"
+ "<p>Ties: " + ties + "</p>"

gameE.innerHTML = text;
};
