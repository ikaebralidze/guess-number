"use strict";

// DOM
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "corect ";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 12;
// get value from element
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscores = 0;

document.querySelector(".guess").textContent = number;
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);

    // guess is false bcs we inverted to true with "!"
    if (!guess) {
        document.querySelector(".message").textContent = "No number!";
        //player wins!
    } else if (guess === number) {
        document.querySelector(".number").textContent = number;

        document.querySelector(".message").textContent = "corect Number !! ";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highscores) {
            highscores = score;
            document.querySelector(".highscore").textContent = highscores;
        } else {
            console.log(score);
            console.log(highscores);
        }

        // too high
    } else if (guess > number) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too High ! ";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "YOU LOST ";
            document.querySelector(".score").textContent = 0;
        }

        //too low
    } else if (guess < number) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too low ! ";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "YOU LOST ";
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".message").textContent = "Start guessing...";

    document.querySelector(".score").textContent = score;

    document.querySelector(".number").textContent = number;

    document.querySelector(".number").style.width = "15rem";

    document.querySelector("body").style.backgroundColor = "#222";

    document.querySelector(".guess").value = "";
});