"use strict";

/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value)
*/
//
// NOTE: Query Selector
let score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const number = document.querySelector(".number");

// NOTE: Random Number 1 - 20;
let randNum = Math.floor(Math.random() * 20) + 1;
let scores = 20;

const displayMassage = (message) => {
	document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", () => {
	const guess = Number(document.querySelector(".guess").value);
	// when blank input
	if (!guess) {
		displayMassage("🚫 No Number!");
		// when player win
	} else if (guess === randNum) {
		displayMassage("Correct, You Win!");
		document.querySelector("body").style.backgroundColor = "#60b347";
		number.textContent = randNum;
		highScore.textContent = scores;
		// when wrong number
	} else if (guess !== randNum) {
		if (scores > 1) {
			displayMassage(guess > randNum ? "Too High!!" : " To Low!!");
			scores--;
			score.textContent = scores;
		} else {
			displayMassage("You Lost, Try Again !");
			score.textContent = 0;
		}
	}
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
document.querySelector(".again").addEventListener("click", () => {
	scores = 20;
	randNum = Math.floor(Math.random() * 20) + 1;

	score.textContent = 20;
	displayMassage("Start Guessing...");
	number.textContent = "?";
	document.querySelector(".guess").value = "";
	document.querySelector("body").style.backgroundColor = "#222";
});
