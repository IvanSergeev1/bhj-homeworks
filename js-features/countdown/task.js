"use strict";

const countdown = function() {
    const timer = document.getElementById("timer");
    timer.textContent -= 1;
    if (timer.textContent <= 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(timerId);
    }
}

let timerId = setInterval(countdown, 1000);

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const countdownAdvanced = function() {
    seconds.textContent -= 1;
    if (seconds.textContent < 10) {
        seconds.textContent = "0" + seconds.textContent;
    }

    if (seconds.textContent <= 0) {
        minutes.textContent -= 1;
        seconds.textContent = 59;
        if (minutes.textContent < 10) {
            minutes.textContent = "0" + minutes.textContent;
        }
    } else if (minutes.textContent <= 0) {
        hours.textContent -= 1;
        minutes.textContent = 59;
        if (hours.textContent < 10) {
            hours.textContent = "0" + hours.textContent;
        }
    }

    if (hours.textContent <= 0 && minutes.textContent <= 0 && seconds.textContent <=0) {
        alert("Вы победили в конкурсе!");
        clearInterval(timerAdvancedId);
    }
}

let timerAdvancedId = setInterval(countdownAdvanced, 1000);
