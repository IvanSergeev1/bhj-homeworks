"use strict";

const clicker = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const clickerSpeed = document.getElementById("clicker__speed");

let time = 0;

cookie.onclick = function() {
    clicker.textContent++;
    cookie.width === 200 ? cookie.width = 220 : cookie.width = 200; 
    let now = Date.now();
    if (time > 0) {
      let diff = (now - time) / 1000;
      clickerSpeed.textContent = diff.toFixed(2);
    }
    time = now;
}
