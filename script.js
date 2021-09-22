"use strict";

// DOM

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

// const displayWindowSize = function() {
//     let w = document.documentElement.clientHeight;
//     let h = document.documentElement.clientWidth;
//     console.log(w, h);
//     if (h < 600) {
//         document.querySelector("h1").classList.add("guess-mobile");
//         document
//             .querySelector(".number")
//             .classList.replace("number", "number-mobile");
//         document.querySelector(".btn").style.fontSize = "1rem";
//         document.querySelector(".check").style.fontSize = "1rem";
//         document.querySelector(".guess").style.width = "15rem";
//         document.querySelector(".guess").style.height = "8rem";
//     }
// };

// displayWindowSize();

const checkbtn = function() {
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
};

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        checkbtn();
    }
});

document.querySelector(".check").addEventListener("click", checkbtn);

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;

    message("Start guessing...");
    scores(score);
    againStyle("?", "15rem", "#222");

    document.querySelector(".guess").value = "";
});