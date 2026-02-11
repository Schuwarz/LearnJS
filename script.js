"use strict";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";

const header = document.querySelector("h1");

let interval = null;

header.onmouseover = event => {
  let повторение = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < повторение) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (повторение >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    повторение += 1 / 3;
  }, 30);
}

