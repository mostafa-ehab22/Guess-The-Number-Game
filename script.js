'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

//Display Functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

//Check Button Functionality
checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No Guess
  if (!guess) {
    displayMessage('🚨 No Number');

    // Player Wins
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number');
    displayNumber(secretNumber);

    // Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Winning Styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  // Game Functionality: TOO HIGH, TOO LOW or Lose
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!!' : '📉 Too Low!!');
      score--;
      displayScore(score);
    } else {
      displayMessage('🤦‍♂️ You Lose!!');
      displayScore(0);
      document.querySelector('body').style.backgroundColor = '#bc2e2e';
    }
  }
});

//Again Button Functionality
againButton.addEventListener('click', function () {
  displayMessage('Start guessing...');
  //Reset Values
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';

  //Reset Styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//Check number when pressing Enter
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    checkButton.click();
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'r' || e.key === 'R') {
    againButton.click();
  }
});
