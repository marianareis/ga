window.onload = function() {
  var humanChoice, computerChoice,
      $humanScore, $computerScore, $buttons, $entryStatus;

  $buttons = document.querySelectorAll("button");
  $humanScore = document.getElementById("humanScore");
  $computerScore = document.getElementById("computerScore");
  $entryStatus = document.getElementById("status");

  for (var i = 0; i < $buttons.length; i++) {
    $buttons[i].addEventListener("click", function(event) {
      humanChoice = event.target.attributes.id.value;
      computerChoice = computerPick();

      if (humanChoice === computerChoice) {
        updateScores("draw");
      }
      else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
          updateScores("computer");
        }
        else if (computerChoice === "scissors") {
          updateScores("human");
        }
      }
      else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
          updateScores("human");
        }
        else if (computerChoice === "scissors") {
          updateScores("computer");
        }
      }
      else { // scissors
        if (computerChoice === "paper") {
          updateScores("human");
        }
        else if (computerChoice === "rock") {
          updateScores("computer");
        }
      }
    });
  };

  var computerPick = function computerPick() {
    var randomNumber = Math.random();

    if (randomNumber < 0.34) {
      return "rock";
    }
    else if (randomNumber < 0.67) {
      return "paper";
    }
    else {
      return "scissors";
    }
  }

  var updateScores = function updateScores(winner) {
    var score, string;

    if (winner === "computer") {
      score = parseInt($computerScore.innerHTML) + 1;
      $computerScore.innerHTML = score;

      string = "<p>You chose <u>" + humanChoice + "</u>. The bot chose <u>" + computerChoice + "</u>. You lose.</p>";
    }
    else if (winner === "human") {
      score = parseInt($humanScore.innerHTML) + 1;
      $humanScore.innerHTML = score;

      string = "<p>You chose <u>" + humanChoice + "</u>. The bot chose <u>" + computerChoice + "</u>. You win.</p>";
    }
    else {
      string = "<p>You chose <u>" + humanChoice + "</u>. The bot chose <u>" + computerChoice + "</u>. It's a tie.</p>";
    }

    $entryStatus.innerHTML = string;
  }
}
