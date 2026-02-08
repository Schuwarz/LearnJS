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

function printNumbers(from, to, v) {

  let i = from;

  // v1 через setInterval

  if (v === 1) {
    let timerId = setInterval(() => {
      if (i === to) clearInterval(timerId);
      alert(i);
      i++;
    }, 1000);
  }



  // v2 через рекурсионный setTimeout

  if (v === 2) {
    let timerId = setTimeout(function tick() {
      if (i === to) clearTimeout(timerId);
      alert(i);
      i++;
      timerId = setTimeout(tick, 1000);
    }, 1000)
  }

}

printNumbers(4, 9, 2);