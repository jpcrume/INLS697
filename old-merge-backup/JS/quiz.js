// /JS/quiz.js
const quizData = [
    {
        question: "Which of these sources is most likely reliable?",
        image: "/ASSESTS/reliable-source.jpg",
        answers: ["A random blog", "A government website", "A social media post"],
        correct: 1
    },
    {
        question: "Which is a common sign of fake news?",
        image: "/ASSESTS/fake-news.jpg",
        answers: ["Unverifiable sources", "Multiple reputable sources", "Written by professionals"],
        correct: 0
    },
    // Add more questions here as needed
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    document.getElementById('question').textContent = questionData.question;
    document.getElementById('quiz-image').src = questionData.image;
    document.getElementById('answers').innerHTML = questionData.answers
        .map((answer, index) => `<button class="answer-btn" onclick="checkAnswer(${index})">${answer}</button>`)
        .join('');
    document.getElementById('feedback').textContent = "";
}

function checkAnswer(selectedAnswer) {
    const questionData = quizData[currentQuestionIndex];
    const feedback = document.getElementById('feedback');

    if (selectedAnswer === questionData.correct) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            setTimeout(loadQuestion, 1000); // Load next question after 1 second
        } else {
            feedback.textContent = "Congratulations! You've completed the quiz.";
        }
    } else {
        feedback.textContent = "Incorrect. Try again.";
        feedback.style.color = "red";
    }
}

// Initialize the quiz
window.onload = loadQuestion;
