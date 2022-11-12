
// Function that generates a quiz with questions and answers.
function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    
    // Function to show questions to user
    function showQuestions(questions, quizContainer) {
        
        // Used to store the output and answer choices.
        var output = [];
        var answers;

        // for each question, show the question.
        for(var i=0; i<questions.length; i++) {
            // Reset the list of answers
            answers = [];

            // For each anaswer to this question:
            for(letter in questions[i].answers){
                // add an html radio button to allow you to select the question.
                answers.push(
                    '<label>' + '<input type="radio" name="question' +i+'" value"' +letter+'">' + letter + ': '+ questions[i].answers[letter] + '</label>'
                );
            }


            // Add this question and its answer to the output
            output.push(
                'div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // Combine the output list into one string of html and put it on the page.
        quizContainer.innerHTML = output.join('');
    }

    // Function to show results
function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){
        const answerStatus = document.querySelector('#answerStatus');

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
            answerStatus.innerHTML = 'Wrong!';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
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