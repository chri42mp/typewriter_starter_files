"use strict";

const str = document.querySelector("#typewriter").textContent;
document.querySelector("#typewriter").textContent = "";
let iterator = 0;
let maxNumberOfIterations;

initLoop();

function initLoop() {
  maxNumberOfIterations = str.length;
  loop();
}

function loop() {
  document.querySelector("#typewriter").textContent += str[iterator];
  iterator++;
  if (iterator < maxNumberOfIterations) {
    setTimeout(loop, 200);
  }
}
