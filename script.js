// Name: Aryan Behl
// Roll No: 2501350047
// Course: B.Tech CSE (FSD)
// Section: B

// JavaScript Console Quiz Game

function startQuiz() {
    const questions = [
        { question: "What is the capital of Brazil?", answer: "Brasilia" },
        { question: "What planet do we live on?", answer: "earth" },
        { question: "What is 5 + 5?", answer: "10" },
        { question: "What is the largest mammal?", answer: "blue whale" }
    ];

    let score = 0;

    alert("Welcome to the JavaScript Console Quiz!\nGood luck!");

    for (let i = 0; i < questions.length; i++) {
        let userInput = prompt(questions[i].question);

        // Check if the user cancels the input
        if (userInput === null) {
            alert("Quiz cancelled.");
            return;
        }

        userInput = userInput.toLowerCase().trim();

        if (userInput === questions[i].answer) {
            alert("Correct! ");
            score++;
        } else {
            alert(`Incorrect! The correct answer was: ${questions[i].answer}`);
        }
    }

    alert(`Quiz complete!\nYour final score: ${score} / ${questions.length}`);
}

startQuiz();