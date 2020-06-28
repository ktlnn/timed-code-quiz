
window.onload = function () {

    var minutesDisplay = document.querySelector("#minutes");
    var secondsDisplay = document.querySelector("#seconds");
    var startButton = document.querySelector("#start-button");
    var mainContent = document.querySelector("#main-content");

    var secondsElapsed = 0;
    var totalSeconds = 0;
    var interval;
    var Score = 0;


    console.log("something");




    startButton.addEventListener("click", caller);



    function caller() {
        startTimer(5);
        quizstarter();

    }


    function startTimer(minutes) {
        var seconds = 60;
        var mins = minutes;

        function tick() {

            var counter = document.getElementById("counter");
            var current_minutes = mins - 1
            seconds--;
            counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            if (seconds > 0) {
                setTimeout(tick, 1000);
            } else {
                if (mins > 1) {
                    startTimer(mins - 1);
                }
            }
        }
        tick();

    }




    function quizstarter() {
        var questionList = [
            {
                "question": "How do I turn on my mic?",
                "a": "Toggle switch on mic.",
                "b": "Check if mic is compatible.",
                "c": "Make sure it is connected.",
                "d": "Restart your computer.",
                "correct": "d",
                "userAnswer": null
            },
            {
                "question": "Where is the on button?",
                "a": "Underneath laptop.",
                "b": "Around the light.",
                "c": "On the side.",
                "d": "Shake it.",
                "correct": "c",
                "userAnswer": null
            }
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