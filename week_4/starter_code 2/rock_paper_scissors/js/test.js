window.onload = function() {
var humanChoiceRock = document.getElementById("rock"),
    humanChoicePaper = document.getElementById("paper"),
    humanChoiceScissors = document.getElementById("scissors"),
    humanScore = document.getElementById("humanScore"),
    computerscore = document.getElementById("computerScore");

var botChoice = Math.random();
  if (computerChoice < 0.34) {
  computerChoice = "rock";
}
  else if(computerChoice <= 0.67) {
  computerChoice = "paper";
}
  else {
  computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    else if (choice1 === "rock")
        if (choice2 === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }

        else if (choice1 === "paper")
        if (choice2 === "rock") {
            return "paper wins";
        }
        else {
            return "scissors wins";
        }

        else if (choice1 === "scissors")
        if (choice2 === "rock") {
            return "rock wins";
        }
        else {
            return "scissors wins";
        }
        }
};

compare (userChoice, computerChoice);





