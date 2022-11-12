
// Function that generates a quiz with questions and answers.
function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    
    // Function to show questions to user
    function showQuestions(questions, quizContainer) {

    }
    // Function to show results
    function showResults(questions, quizContainer, resultsContainer) {

    }

    // Calls the function to show the questions
    showQuestions(questions, quizContainer);


    // When user clicks on the submit button, shows results.
    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }   
}

var myQuestions = [
    {
        question: "Commonly used data types DO Not Include: ",
        answers: {
            a: 'strings',
            b: 'booleans',
            c: 'alerts',
            d: 'numbers'
        },
        correctAnswer: 'c'
    },
    {
        question: "The condition in an if / else statement is enclosed with: ",
        answers: {
            a: 'quotes',
            b: 'curly brackets',
            c: 'parenthesis',
            d: 'square brackets'
        },
        correctAnswer: 'c'
    },
    {
        question: "Arrays in JavaScript can be used to store: ",
        answers: {
            a: 'numbers and strings',
            b: 'other arrays',
            c: 'booleans',
            d: 'all of the above'
        },
        correctAnswer: 'd'
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: {
            a: 'commas',
            b: 'curly brackets',
            c: 'quotes',
            d: 'parenthesis'
        },
        correctAnswer: 'c'
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answers: {
            a: 'JavaScript',
            b: 'terminal/bash',
            c: 'for loops',
            d: 'console.log'
        },
        correctAnswer: 'd'
    }
];