const idInput = document.querySelector(".idInput");
const check = document.querySelector(".check");
const result = document.querySelector(".result");
const regExp = /^0\d{13}$|1\d{13}$/;

check.addEventListener('click', () => {
  if (regExp.test(idInput.value)) {
    result.innerText = "ok";
    result.style.color = "green";
  } else {
    result.innerText = "not ok";
    result.style.color = "red";
  }
});

const blockTwo = document.querySelector(".blockTwo");

let number = 0;
const zoom = function (Blockleft) {
  number++;
  blockTwo.style.left = `${number}px`;
  if (number < 50) {
    return zoom();
  } else if (number > 350) {
    number = 0;
  } else {
    number += 50;
  }
  Blockleft();
};

blockTwo.addEventListener("click", zoom);
