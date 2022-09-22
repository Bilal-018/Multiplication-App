let num1 = Math.floor(Math.random() * 9) + 1;
let num2 = Math.floor(Math.random() * 9) + 1;

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
let qId = document.getElementById("ques");

qId.innerHTML = `What is ${num1} Multiply ${num2} ?`;

let sc = document.getElementById("scr");
sc.innerHTML = `score: ${score}`;

let aId = document.getElementById("ans");

let a = num1 * num2;

let formId = document.getElementById("form");

let scId = document.getElementById("score");

formId.addEventListener("submit", () => {
  let inp = +aId.value;
  if (inp === a) {
    score++;
    updatelocalStorage();
  } else if (score !== 0) {
    score--;
    updatelocalStorage();
  }
});

let updatelocalStorage = () => {
  localStorage.setItem("score", JSON.stringify(score));
};
