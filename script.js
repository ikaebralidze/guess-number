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

// doc functions
const message = function(sms) {
    document.querySelector(".message").textContent = sms;
};

const scores = function(score) {
    document.querySelector(".score").textContent = score;
};

const againStyle = function(text, style, body) {
    document.querySelector(".number").textContent = text;

    document.querySelector(".number").style.width = style;
    document.querySelector("body").style.backgroundColor = body;
};

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);

    // guess is false bcs we inverted to true with "!"
    if (!guess) {
        message("No number!");
        //player wins!
    } else if (guess === number) {
        againStyle(number, "30rem", "#60b347");
        message("corect Number !! ");

        if (score > highscores) {
            highscores = score;
            document.querySelector(".highscore").textContent = highscores;
        } else {
            console.log(score);
            console.log(highscores);
        }

        // vrong
    } else if (guess !== number) {
        if (score > 1) {
            message(guess > number ? "Too High ! " : "Too low ! ");
            score--;
            scores(score);
        } else {
            message("YOU LOST ");
            scores(0);
        }
    }
    // too high
    //  else if (guess > number) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "Too High ! ";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = "YOU LOST ";
    //         document.querySelector(".score").textContent = 0;
    //     }

    //     // too low
    // } else if (guess < number) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "Too low ! ";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = "YOU LOST ";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
});

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;

    message("Start guessing...");
    scores(score);
    againStyle("?", "15rem", "#222");

    document.querySelector(".guess").value = "";
});