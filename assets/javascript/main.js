
window.onload = function () {

   
    
    var startButton = document.querySelector("#start-button");
    
  






//start button
    startButton.addEventListener("click", caller);


// calls other functions to start quiz and timer. Used to reset 
    function caller() {
        startTimer(5);
        quizstarter();

    }

//Timer functions
    function startTimer(minutes) {
        var seconds = 60;
        var mins = minutes;

        function tick() {

            var counter = document.getElementById("counter");
            var current_minutes = mins - 1
            seconds--;
            counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
           //checks seconds and mintues 
            if (seconds > 0) {
                setTimeout(tick, 1000);
            } else {
                if (mins > 1) {
                    startTimer(mins - 1);
                }else{
                    //checks if timers is at 0.01 to tell user that they failed
                    if (seconds === 0){
                    
                        alert("Sorry, time is up!");
                        
                    } 
                }
            }
            
        }
        tick();





    }




    function quizstarter() {
        var questionList = [
            {
                "question": "When there is an array included in Javascript, you'll most likely include:",
                "a": "a forward loop.",
                "b": "a string.",
                "c": "a dog.",
                "d": "another array.",
                "correct": "a",
                "userAnswer": null
            },
            {
                "question": "When making an array, you use:",
                "a": "a house.",
                "b": "parentheses.",
                "c": "brackets.",
                "d": "tags.",
                "correct": "c",
                "userAnswer": null
            },
            {
                "question": "What makes a string a string?",
                "a": "It is straight.",
                "b": "Enclosing content with quotation marks.",
                "c": "Being able to add beads to it.",
                "d": "You can floss with it.",
                "correct": "b",
                "userAnswer": null
            },
            {
                "question": "How do you format a document?",
                "a": "Select all and delete.",
                "b": "Making your dog do it for you.",
                "c": "Right clicking and clicking format document.",
                "d": "Retyping everything.",
                "correct": "c",
                "userAnswer": null
            },
            {
                "question": "Which symbol is used for comments in Javascript?",
                "a": "//",
                "b": "<-- -->",
                "c": "./",
                "d": "*",
                "correct": "a",
                "userAnswer": null
            },
            {
                "question": "What is the shortcut to comment in Javascript?",
                "a": "F11",
                "b": "Smashing your keyboard.",
                "c": "ctrl + v",
                "d": "ctrl + /",
                "correct": "d",
                "userAnswer": null
            },
        ];

        var questionTag = document.body.querySelector("#question");
        var answerTagA = document.body.querySelector("#answer-a");
        var answerTagB = document.body.querySelector("#answer-b");
        var answerTagC = document.body.querySelector("#answer-c");
        var answerTagD = document.body.querySelector("#answer-d");

        var buttonA = document.body.querySelector("#button-a");
        var buttonB = document.body.querySelector("#button-b");
        var buttonC = document.body.querySelector("#button-c");
        var buttonD = document.body.querySelector("#button-d");

        var score = document.body.querySelector("#score");
        var questionIndex = 0;
        var Total = 0;
        document.getElementById('Total').innerHTML = Total;
        function buttonHandler(event) {
            var button = event.target;
            var userAnswer = button.getAttribute("data-answer");
            var questionId = parseInt(button.getAttribute("data-question"));
            console.log(button);
            console.log(userAnswer);
            console.log(questionId);
            questionList[questionId]["userAnswer"] = userAnswer;

           
            


            if (questionList[questionId]["userAnswer"] === questionList[questionId]["correct"]) {
                score.textContent = "You got it correct";
                setTimeout(function () {
                    questionIndex++;
                    Total = Total +1;
                    document.getElementById('Total').innerHTML = Total;
                    initializeQuestion();
                    score.textContent = "";
                }, 5000);
            }
            else {
                score.textContent = "You got it wrong";
                setTimeout(function () {
                    questionIndex++;
                    initializeQuestion();
                    score.textContent = "";
                }, 5000);
            }
            document.getElementById('Total').innerHTML = Total;
        
        }

        buttonA.addEventListener("click", buttonHandler);
        buttonB.addEventListener("click", buttonHandler);
        buttonC.addEventListener("click", buttonHandler);
        buttonD.addEventListener("click", buttonHandler);

        function initializeQuestion() {
            console.log(questionList[questionIndex]);
            var wholeObj = questionList[questionIndex];
            var question = wholeObj.question;
            console.log(question);
            questionTag.textContent = question;
            questionTag.setAttribute("data-question", questionIndex);

            answerTagA.textContent = wholeObj.a;
            answerTagB.textContent = wholeObj.b;
            answerTagC.textContent = wholeObj.c;
            answerTagD.textContent = wholeObj.d;
            buttonA.setAttribute("data-question", questionIndex);
            buttonB.setAttribute("data-question", questionIndex);
            buttonC.setAttribute("data-question", questionIndex);
            buttonD.setAttribute("data-question", questionIndex);
        }
        initializeQuestion();
    }
}

