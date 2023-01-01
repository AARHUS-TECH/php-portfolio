
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var startGame = true;

var buttonColours = ["red", "blue", "green", "yellow"];

$("body").keydown(function () {
  if (startGame === true) {
    nextSequence();
    startGame = false;
  }
});

$(".btn").click(function() {
    var userChosenColour = this.id; //$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
    playSound(userChosenColour);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
  level++;
  $("#level-title").text("Level " + level);
  // var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  // audio.play();
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
      $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
      userClickedPattern = [];
    }
  }
  else {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  startGame = true;
}





// alternatively gamePattern = randomChosenColour;
