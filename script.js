// DOM Elements
const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-btn');

const quizScreen = document.getElementById('quiz-screen');
const questionText = document.getElementById('question-text');
const currentQuestionNum = document.getElementById('current-question');
const totalQuestions = document.getElementById('total-questions');
const currentScore = document.getElementById('score');
const choicesContainer = document.getElementById('choices-container');
const answerButtons = document.getElementById('answer-btn');
const progressBar = document.getElementById('progress');

const resultScreen = document.getElementById('result-screen');
const finalScore = document.getElementById('final-score');
const totalScore = document.getElementById('total-score');
const resultMessage = document.getElementById('result-message');
const restartButton = document.getElementById('restart-btn');

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

// Variables to track quiz state
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let numberOfQuestions = quizQuestions.length;
totalQuestions.textContent = numberOfQuestions;
totalScore.textContent = numberOfQuestions;

//Event Listeners

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartQuiz);




function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  currentScore.textContent = score;

  startScreen.classList.remove('active');


  quizScreen.classList.add('active');

  showQuestion();
}

function showQuestion() {
  answersDisabled = false;
  const currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestionNum.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / numberOfQuestions) * 100;
  progressBar.style.width = `${progressPercent}%`;

  questionText.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.textContent = answer.text;
    button.classList.add('answer-btn');
    button.dataset.correct = answer.correct;

    button.addEventListener('click', selectAnswer);
    choicesContainer.appendChild(button);
  })
}

function selectAnswer(event) {
  if (answersDisabled) return;

  answersDisabled = true;
  const selectedButton = event.target;
  const correct = selectedButton.dataset.correct === 'true';

  Array.from(choicesContainer.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    } else if (button === selectedButton) {
      button.classList.add('incorrect');
    }
  });

  if (correct) {
    score++;
    currentScore.textContent = score;
  }

  currentQuestionIndex++;

  progressPercent = (currentQuestionIndex / numberOfQuestions) * 100;
  progressBar.style.width = `${progressPercent}%`;
  
  setTimeout(() => {

    choicesContainer.innerHTML = ''; // Clear previous answers
    if (currentQuestionIndex < numberOfQuestions) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  quizScreen.classList.remove('active');
  resultScreen.classList.add('active');

  totalScore.textContent = numberOfQuestions;
  finalScore.textContent = score;
  resultMessage.textContent = score == numberOfQuestions ? "Perfect score! You're a genius!" :
    score >= (numberOfQuestions * 0.75) ? "Congratulations! You passed!" : "Better luck next time!";
}

function restartQuiz() {
  resultScreen.classList.remove('active');

  startQuiz();

}