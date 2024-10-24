//Arrasy of the questions to be displayed:
const questions = [
    {
        question: "¿Cual de las siguientes opciones no es un editor de codigo?",
        answers: [
            {text: "Vim", correct: false},
            {text: "VScode", correct: false},
            {text: "Emacs", correct: false},
            {text: "Word", correct: true}
        ]
    },
    {
        question: "Que tag de html se usa para agregar o definir una imagen?",
        answers: [
            {text: "img", correct: true},
            {text: "figure", correct: false},
            {text: "image", correct: false},
            {text: "figcaption", correct: false}
        ]
    },
    {
        question: "¿En JavaScript, que objeto te permite con fechas y elementos relativos al tiempo?",
        answers: [
            {text: "Date", correct: true},
            {text: "Datetime", correct: false},
            {text: "Time", correct: false},
            {text: "Clock", correct: false}
        ]
    },
    {
        question: "Que tag en Html se usa para definir un campo interactivo para que el usuario escriba?",
        answers: [
            {text: "dialog", correct: false},
            {text: "enterpoint", correct: false},
            {text: "datalist", correct: false},
            {text: "input", correct: true}
        ]
    },
    {
        question: "En JavaScript, que elemento se usa para almacenar multiples elementos en una sola variable?",
        answers: [
            {text: "Variables", correct: false},
            {text: "Arrays", correct: true},
            {text: "Strings", correct: false},
            {text: "Funciones", correct: false}
        ]
    }
];

//HTML DOM elements constants:
const question = document.getElementById("question");
const answerButtons = document.getElementById("buttons-answer");
const nextButton = document.getElementById("next-button");
const results = document.getElementById("results");
const resultsTitle = document.querySelector("#results h2");
const index = document.getElementById("index");

//Javascript variables
let currentQuestion = 0;
let score = 0;

//initializes the Quiz
function initQuiz(){
    showQuestion();
}

// Function to display the current question and answer choices
function showQuestion() {
    // First, gets and displays the current question
    let currentPageQuestion = questions[currentQuestion];
    question.innerHTML = currentPageQuestion.question;

    // Clears previous answers and updates the index
    answerButtons.innerHTML = '';
    index.innerHTML = `Question ${currentQuestion+1} / ${questions.length}`;

    //loops through the question's answers and creates a button for each one
    currentPageQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        
        // Set the data-correct attribute to track whether the answer is correct
        button.dataset.correct = answer.correct;

        answerButtons.appendChild(button);
        
        // Handle button click
        button.addEventListener('click', () => {
            const isCorrect = button.dataset.correct === 'true'; // Convert the string 'true' to boolean
            if (isCorrect) {
                button.classList.add("correct");
                score++;
            } else {
                button.classList.add("incorrect");
            }

            //The correct answer is shown anyway and the buttons get disabled
            Array.from(answerButtons.children).forEach(button => {
                if(button.dataset.correct === "true"){
                    button.classList.add("correct");
                }
                button.disabled = true;
            });
            nextButton.style.display = 'block';
        });
    });
}

//Adds an event listener to next button to get to the next question and hides itself
nextButton.addEventListener("click", () => {
    currentQuestion++;
    if(currentQuestion < questions.length){
        showQuestion();
    }else{
        showResults();
    }
    nextButton.style.display = 'none';
});

//Displays the final results and hides elements like the question, the answers and the index.
function showResults(){
    question.style.display='none';
    answerButtons.style.display = 'none';
    results.style.display = 'block';
    resultsTitle.innerHTML = `RESULTS: You scored ${score} / ${questions.length}!`;
    index.style.display = 'none';
}

initQuiz();