import { questions } from "./data.js";

const progressValueEl = document.querySelector(".progress .value");
const numberEl = document.querySelector(".number");
const questionEl = document.querySelector(".question");
const choice1El = document.querySelector(".choice1");
const choice2El = document.querySelector(".choice2");

let currentNumber = 0;
let mbti = "";

function renderQuestion() {
  //질문내용 세팅해주는 함수
  const question = questions[currentNumber];
  numberEl.innerHTML = question.number;
  questionEl.innerHTML = question.question;
  choice1El.innerHTML = question.choices[0].text;
  choice2El.innerHTML = question.choices[1].text;
  progressValueEl.style.width = (currentNumber + 1) * 10 + "%";
}

function nextQuestion(choiceNumber) {
  //질문에 대한 어떤 답을 선택했는지?, 그에 따른 mbti가 결정됨, 그리고 1번 질문을 완료했으면 2번 질문을 세팅.
  if (currentNumber == questions.length - 1) {
    //만약 질문 번호가 질문지의 길이와 같다면 (즉 마지막 질문이라면) showResultPage를 이용해 결과 페이지를 띄움
    showResultPage();
    return; //nextQuestion 함수가 끝나야하므로 return
  }
  const question = questions[currentNumber];
  mbti += question.choices[choiceNumber].value;
  currentNumber++;
  renderQuestion();
}
function showResultPage() {
  // 결과창 보여주는 페이지
  location.href = `results.html?mbti=${mbti}`; //Query String
}

choice1El.addEventListener("click", function () {
  nextQuestion(0);
});
choice2El.addEventListener("click", function () {
  nextQuestion(1);
});
renderQuestion();
