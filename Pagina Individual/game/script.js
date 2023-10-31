var chance;
var digits = 4;
var guess;
var code;
var allguess;
var isGameWon = false;

function startGame(digitCount) {
  digits = digitCount;
  chance = 1;
  setRand();
  document.getElementById("digits").textContent = digits;
  document.getElementById("start").style.display = "none";
  document.getElementById("main").style.display = "block";
  reset();
  isGameWon = false;
}

function setRand() {
  code = [];
  var count = 0;
  while (count < digits) {
    var num = Math.floor(Math.random() * 10);
    var i;
    var flag = 1;
    for (i = 0; i < count; i++) {
      if (num == code[i]) {
        flag = 0;
      }
    }
    code[count] = num;
    count += flag;
  }
}

function reset() {
  allguess = [];
  chance = 1;
  setRand();
  document.getElementById("guess").value = "";
  document.getElementById("turn").innerHTML = "";
  document.getElementById("win").style.display = "none";
  isGameWon = false;
  document.getElementById("chance").textContent = chance;
  document.getElementById("bulls").textContent = "0";
  document.getElementById("cows").textContent = "0";
  document.getElementById("guessList").innerHTML = "";
}

function playBullsAndCows() {
  if (isGameWon) {
    alert("The game is already won. Start a new game.");
    return;
  }

  guess = document.getElementById("guess").value;
  var valid = checkInput(guess);
  if (valid) {
    var b = numberOfBulls(guess, code);
    var c = numberOfCows(guess, code);
    document.getElementById("bulls").textContent = b;
    document.getElementById("cows").textContent = c;
    document.getElementById("chance").textContent = chance;
    allguess[chance - 1] = `Chance: ${chance}  ${guess}  Bulls: ${b}  Cows: ${c}`;
    displayGuessList();
    if (b == digits) {
      isGameWon = true;
      document.getElementById("turn").innerHTML = `You have identified the code in ${chance} turn(s)`;
      document.getElementById("win").style.display = "block";
    }
    chance++;
  } else {
    alert("Invalid Input. Please enter a valid " + digits + "-digit number.");
  }
  document.getElementById("guess").value = "";
}

function numberOfBulls(x, y) {
  var bulls = 0;
  for (var i = 0; i < digits; i++) {
    if (x[i] == y[i]) {
      bulls++;
    }
  }
  return bulls;
}

function numberOfCows(x, y) {
  var cows = 0;
  for (var i = 0; i < digits; i++) {
    for (var j = 0; j < digits; j++) {
      if (x[i] == y[j] && i != j) {
        cows++;
      }
    }
  }
  return cows;
}

function checkInput(x) {
  if (x.length != digits) {
    return false;
  }
  for (var i = 0; i < digits; i++) {
    if (x[i] < "0" || x[i] > "9") {
      return false;
    }
  }
  return true;
}

function viewAllGuesses() {
  if (allguess.length === 0) {
    alert("No guesses made yet.");
  } else {
    alert("All Guesses:\n\n" + allguess.join("\n"));
  }
}

function displayGuessList() {
  var guessList = document.getElementById("guessList");
  var listItem = document.createElement("li");
  listItem.textContent = `Chance ${chance - 1}: ${guess} Bulls: ${document.getElementById("bulls").textContent} Cows: ${document.getElementById("cows").textContent}`;
  guessList.appendChild(listItem);
}
