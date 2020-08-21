//make questions array

//make timer that starts at 60 and decrements by 1 every 1000 miliseconds in countdown function

//make starting screen with start button that populates question <p> and answer buttons according to index, and creates timer
//  *add event listener "click" to start button that goes to countdown function
//  *countdown function enclosed in larger function that includes creating first question?

//create 1 event listener click for all 4 answer options (event delegation?)
//any clicked will trigger the next question and answer set of the array
//  *push question and answer info into empty array?
//if click event happens on button whose textContent===correctAnswer, will trigger "right" text or alert
//else trigger "wrong" text or alert, and take time off timer
//for loop that goes through questions array for length of array
//  *this for loop will wrap all above section in if/else statement
//    *if (questions.length>[i] && countdown>0), repeat above function
//    *else go to score etc.

//return high score equal to timeLeft (in string form)
//enter initials into form, log score and initials into localStorage
//create event listener click for "try Again" button to reset function (or make try again button trigger start function?)
//    *create reset function that goes back to starting screen to take quiz again

//add event listener click to "clear scores" button that goes to function that clears form
//     *create clearScores function



//make references to html elements and store in variables 
var mainEl = document.querySelector("#main")
var startBtn = document.querySelector("#startbtn")
var timerEl = document.querySelector("#timer")
var questionEl = document.querySelector("#question")
var resultEl = document.querySelector("#result")

//references to answer buttons
var answerOption1El = document.querySelector("#option1")
var answerOption2El = document.querySelector("#option2")
var answerOption3El = document.querySelector("#option3")
var answerOption4El = document.querySelector("#option4")
//other buttons
var tryAgainBtn = document.querySelector("#try-again")
var clearScoresBtn = document.querySelector("#clear-scores")

//make questions array 
var questions = [
    {
        ask: "what's up this is ask 1",
        option1: "no",
        option2: "yes",
        option3: "maybe",
        option4: "whatever",
        correctAnswer: "yes"
    },
    {
        ask: "what's up this is ask 2",
        option1: "no",
        option2: "yes",
        option3: "maybe",
        option4: "whatever",
        correctAnswer: "no"
    },
    {
        ask: "what's up this is ask 3",
        option1: "no",
        option2: "yes",
        option3: "maybe",
        option4: "whatever",
        correctAnswer: "yes"
    },
    {
        ask: "what's up this is ask 4",
        option1: "no",
        option2: "yes",
        option3: "maybe",
        option4: "whatever",
        correctAnswer: "no"
    },

]

//just get one question to show up first

for (i=0; i < questions.length; i++) {
questionEl.textContent = questions[i].ask;

//populate answer buttons text content with according answer
answerOption1El.textContent = questions[i].option1;
answerOption2El.textContent = questions[i].option2;
answerOption3El.textContent = questions[i].option3;
answerOption4El.textContent = questions[i].option4;

// //compare answers
//  if (right answer button clicked on===questions.correctAnswer) {
// resultEl.textContent=="Correct!"
// } else {
//     resultEl.textContent="wrong!"
//     timerEl.textContent==timerEl-5
// }
}



function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent=timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            // displayMessage();
            //populate high score form, appear tryagain and clear score buttons etc.
            console.log("time's up!")
        }
    },
        1000)
}

//click events
startBtn.addEventListener("click", countdown)

