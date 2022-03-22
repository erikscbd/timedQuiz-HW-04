//HTML Elemenets
var questionEl = document.getElementById('question');
var answerAEl = document.getElementById('answerA');
var answerBEl = document.getElementById('answerB');
var answerCEl = document.getElementById('answerC');
var answerDEl = document.getElementById('answerD');
var screenSection = document.getElementById("screen");
var quizSection = document.getElementById("quiz");
var endGameEl = document.getElementById("score");
var startButton = document.getElementById("startButton");

var questionIndex = 0;
var questions = [
    {
        question: 'Question 1',
        answerA: 'Answer A',
        answerB: 'Answer B',
        answerC: 'Answer C',
        answerD: 'Answer D'
    },
    {
        question: 'Question 2',
        answerA: 'Answer A',
        answerB: 'Answer B',
        answerC: 'Answer C',
        answerD: 'Answer D'
    },
    {
        question: 'Question 3',
        answerA: 'Answer A',
        answerB: 'Answer B',
        answerC: 'Answer C',
        answerD: 'Answer D'
    },
    {
        question: 'Question 4',
        answerA: 'Answer A',
        answerB: 'Answer B',
        answerC: 'Answer C',
        answerD: 'Answer D'
    },
];
startButton.addEventListener("click", startQuiz);
function startQuiz() {

    console.log("click");
    screenSection.classList.add("hide");
    quizSection.classList.remove("hide");
    startTimer();
    askNextQuestion();
}
function endGame() {

    alert("Game is over!");
}
function askNextQuestion() {
    if (questionIndex >= questions.length) {
        endGame();
    } else {
        questionEl.textContent = questions[questionIndex].question
        answerAEl.textContent = questions[questionIndex].answerA
        answerBEl.textContent = questions[questionIndex].answerB
        answerCEl.textContent = questions[questionIndex].answerC
        answerDEl.textContent = questions[questionIndex].answerD
    }
}
answerAEl.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Answer A has been clicked.");
    questionIndex++;
    askNextQuestion();
});
answerBEl.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Answer B has been clicked.");
    questionIndex++;
    askNextQuestion();
});
answerCEl.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Answer C has been clicked.");
    questionIndex++;
    askNextQuestion();
});
answerDEl.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Answer D has been clicked.");
    questionIndex++;
    askNextQuestion();
});

var timeRemaining = 60;

function startTimer() {
    var timerInterval = setInterval(function () {
        timeRemaining--;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
        document.getElementById("timeRemaining").textContent = timeRemaining;
    }, 1000);
}
// askNextQuestion();
// startTimer();