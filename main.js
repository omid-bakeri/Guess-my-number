"use strict";

const text = document.querySelector(".text");
const checkButton = document.querySelector(".checkButton");
const ReqQuesShape = document.querySelector(".ReqQuesShape");
const textGuess = document.querySelector(".textGuess");
const HighScore = document.querySelector(".HighScore");
const againButton = document.querySelector(".againButton");
const GMN_play = document.querySelector(".GMN_play");
const score = document.querySelector(".score");
const start = document.querySelector(".start");
const container = document.querySelector(".container");

let s = 20;
let tt = Number(text.value);
const random = Math.floor(Math.random() * 20) + 1; // random number between 1 to 20
console.log(random);
let t = random - tt; // 17 - 10

start.addEventListener("click", Start());
checkButton.addEventListener("click", myFunction(s));
againButton.addEventListener("click", againButtonFunction());

function Start() {
    start.style.display = "none";
    text.style.display = "block";
    checkButton.style.display = "block";
    textGuess.style.display = "block";
    score.style.display = "block";
}

function myFunction() {
    if (!text) {
        textGuess.textContent == "No Number!";
    }
    score.textContent = `Score: ${s}`;

    if (Number(text.value) > random) {
        if (Number(text.value) - random >= 6) {
            textGuess.textContent = "Too High";
            textGuess.style.color = "red";
            s--;
        }
        if (Number(text.value) - random < 6) {
            textGuess.textContent = "High";
            textGuess.style.color = "orange";
            s--;
        }
    }

    if (Number(text.value) < random) {
        if (random - Number(text.value) >= 6) {
            textGuess.textContent = "Too Low";
            textGuess.style.color = "red";
            s--;
        }
        if (random - Number(text.value) < 6) {
            textGuess.textContent = "Low";
            textGuess.style.color = "orange";
            s--;
        }
    }

    // if (Number(text.value) > random) {
    //     textGuess.textContent = "High";
    //     textGuess.style.color = "red";
    //     s--;
    // }
    // if (Number(text.value) < random) {
    //     textGuess.textContent = "Low";
    //     textGuess.style.color = "red";
    //     s--;
    // }
    // if (Number(text.value) - random >= 5) {
    //     textGuess.textContent = "Too High";
    //     textGuess.style.color = "red";
    //     s--;
    //     score.textContent = `Score: ${s}`;
    // } else if (Number(text.value) - random < 5) {
    //     textGuess.textContent = "High";
    //     textGuess.style.color = "orange";
    //     s--;
    //     score.textContent = `Score: ${s}`;
    // }
    // if (Number(text.value) - random >= -5) {
    //     textGuess.textContent = "Low";
    //     textGuess.style.color = "orange";
    //     s--;
    //     score.textContent = `Score: ${s}`;
    // } else if (Number(text.value) - random < -5) {
    //     textGuess.textContent = "Too Low";
    //     textGuess.style.color = "red";
    //     s--;
    //     score.textContent = `Score: ${s}`;
    // }
    if (text.value == random) {
        if (s < 10) {
            container.style.background - color;
            ("red");
            GMN_play.textContent = "You Are Losed :(";
            GMN_play.style.color = "#fff";
        }
        textGuess.textContent = "Correct Number";
        textGuess.style.color = "#60b347";
        ReqQuesShape.textContent = random;
        if (s > 10) {
            GMN_play.textContent = "Congratulations !";
            GMN_play.style.color = "#60b347";
        }
        score.textContent = `Score: ${s}`;
        console.log(`t: ${t}`);
    }

    if (s < 10) {
        textGuess.textContent = "You are Losed :(";
        score.textContent = `Score: ${s}`;
        textGuess.style.color = "red";
    }
    if (s <= 15 && s >= 13) {
        score.style.color = "orange";
        score.textContent = `Score: ${s}`;
    }
    if (s <= 12) {
        score.style.color = "red";
        score.textContent = `Score: ${s}`;
    }
}

function againButtonFunction() {
    textGuess.textContent = "Start Guessing...";
    textGuess.style.color = "rgb(85,85,85)";
    score.textContent = "score: 20";
    text.value = "";
    const random = Math.floor(Math.random() * 20) + 1;
    ReqQuesShape.textContent = "?";
    GMN_play.textContent = "Guess My Number !";
    GMN_play.style.color = "rgb(85,85,85)";
    s = 20;
}