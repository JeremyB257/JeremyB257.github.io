const quizData = [
  {
    question: 'How old i am ?',
    a: '10',
    b: '15',
    c: '28',
    d: '72',
    correct: 'c',
  },
  {
    question: 'What is the most used programming language ?',
    a: 'Javascript',
    b: 'Python',
    c: 'Java',
    d: 'C++',
    correct: 'a',
  },
  {
    question: 'What is the president of US ?',
    a: 'Barack Obama',
    b: 'Donald Trump',
    c: 'Joe Biden',
    d: 'Hilary Clinton',
    correct: 'c',
  },
  {
    question: 'What does HTML stand for ?',
    a: 'Hypertext Markup Languague',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Helicpters Terminal Motorboat Lamborghini',
    correct: 'a',
  },
  {
    question: 'What year was Javascript launched ?',
    a: '1992',
    b: '1995',
    c: '1998',
    d: '1999',
    correct: 'b',
  },
];

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const innerBar = document.querySelector('.inner-bar');
const currentQuestion = document.getElementById('current-question');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('Btn');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  currentQuestion.innerText = currentQuiz + 1 + '/' + quizData.length;
  innerBar.style.width = ((currentQuiz + 1) * 100) / quizData.length + '%';
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onClick="location.reload()">Reload</button>`;
    }
  }
});
