
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var startButton = document.querySelector("#start-button");
var mainContent = document.querySelector("#main-content");

var secondsElapsed = 0;
var totalSeconds = 0;
var interval;

console.log("something");









function runClockCb(){
    // increasing seconds elapsed by 1 
    secondsElapsed++;
    console.log(secondsElapsed);
    // displaly minutes remaining. used "Math.floor" so there are no decimals
    minutesDisplay.textContent = Math.floor((totalSeconds - secondsElapsed) / 60);
    secondsDisplay.textContent = (totalSeconds - secondsElapsed) % 60;
    
}

function startTimer(){
    document.getElementById("#main-content").style.display = "block";
    document.getElementById("#start-button").style.display = "block";
    var minutes = 10;
    totalSeconds = minutes * 60;
    secondsElapsed = 0;
    if(typeof interval !== "undefined"){
        clearInterval(interval);
    }
    interval = setInterval(runClockCb, 1000);
}



startButton.addEventListener("click", startTimer);

var questionList = [
    {
        "q": ""
    }
]