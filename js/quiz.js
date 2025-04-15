// /JS/quiz.js
const quizData = [
    {
        question: "Question 1/10: Disinformation is false information that is spread unintentionally.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "Question 2/10: Which of the following is an example of false context?",
        answers: ["A parody article shared without context", "A quote from 2020 shared in 2024 without mentioning updated guidelines", "An AI-generated deepfake video", "A photoshopped image of a celebrity"],
        correct: 1
    },
    {
        question: "Question 3/10: Which of these is NOT a form of disinformation?",
        answers: ["Sponsored Content", "Fabricated Content", "Imposter Content", "Manipulated Content"],
        correct: 0
    },
    {
        question: "Question 4/10: Clickbait headlines are a type of false connection.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "Question 5/10: What is a key sign of an imposter content account?",
        answers: ["Reverse image search shows altered visuals", "It has a strange URL", "It uses branding from trusted sources but has no verification", "The content is written in a humorous tone"],
        correct: 2
    },
    {
        question: "Question 6/10: Propaganda always involves completely false information.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "Question 7/10: Which type of content is intended for entertainment but may still mislead unintentionally?",
        answers: ["Error", "Satire and Parody", "Propaganda", "Cherry-picked Data"],
        correct: 1
    },
    {
        question: "Question 8/10: Reverse image search is a recommended method to verify suspicious photos.",
        answers: ["True", "False"],
        correct: 0 
    },
    {
        question: "Question 9/10: What might indicate a video is a deepfake?",
        answers: ["It contains charts with misleading scales", "The speaker blinks unnaturally or audio doesn't sync", "The headline doesn't match the story", "It uses satire to criticize politics"],
        correct: 1
    },
    {
        question: "Question 10/10: Which of the following tips helps detect manipulated or false content online?",
        answers: ["Always trust viral content", "Share posts before reading the full article", "Ignore the date of publication", "Look for emotional language and sensationalism"],
        correct: 3
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
