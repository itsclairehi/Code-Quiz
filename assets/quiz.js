//references to html elements stored in variables 
var timerEl = document.querySelector("#timer")
var questionEl = document.querySelector("#question")
var resultEl = document.querySelector("#result")
var startScreen = document.querySelector("#startscreen")
var activeQuizScreen = document.querySelector("#activequiz")
var scoreScreen = document.querySelector("#scorescreen")
var highScoresDiv = document.querySelector(".highscoresdiv")


//references to answer buttons
var answerBtns = document.querySelector("#answerbtns")
var answerOption1El = document.querySelector("#option1")
var answerOption2El = document.querySelector("#option2")
var answerOption3El = document.querySelector("#option3")
var answerOption4El = document.querySelector("#option4")
//other buttons
var startBtn = document.querySelector("#startbtn")
var tryAgainBtn = document.querySelector("#try-again")
var clearScoresBtn = document.querySelector("#clear-scores")
var initialsBtn = document.querySelector("#save-initials")

//initialized global varibales
var indexQuestion = 0;
var timeLeft = 60;
var timeInterval;


//references for initials input and highscores
var initials = document.querySelector("#initials")
var initialsForm = document.querySelector("#initialsform")

var highScoresP = document.querySelector("#highscoresP")
var highscoresArr = []

//make questions array 
var questions = [
    {
        ask: "1. what does a browser read to render a website?",
        option1: "index",
        option2: "html",
        option3: "javascript",
        option4: "css",
        correctAnswer: "html"
    },
    {
        ask: "2. what encloses an object?",
        option1: "blue",
        option2: "curly braces",
        option3: "parentheses",
        option4: "yellow",
        correctAnswer: "curly braces"
    },
    {
        ask: "3. where does JavaScript go in html?",
        option1: "doctype",
        option2: "main",
        option3: "head",
        option4: "body",
        correctAnswer: "body"
    },
    {
        ask: "4. what year is it?",
        option1: "2020",
        option2: "2040",
        option3: "1990",
        option4: "whatever",
        correctAnswer: "2020"
    },

]
function startQuiz() {

    startScreen.classList.add("hide")
    activeQuizScreen.classList.remove("hide")

    localStorage.getItem('initials');
    if (initials == null) {
        initials == ''
    } else {

    }

    timeInterval = setInterval(countdown, 1000);
    countdown();
    renderQuestions();

};

function renderQuestions() {
    if (indexQuestion === 4) {

        endGame();
        return;
        //handle game over stuff

    }

    questionEl.textContent = questions[indexQuestion].ask;
    //populate answer buttons text content with according answer
    answerOption1El.textContent = questions[indexQuestion].option1;
    answerOption2El.textContent = questions[indexQuestion].option2;
    answerOption3El.textContent = questions[indexQuestion].option3;
    answerOption4El.textContent = questions[indexQuestion].option4;
}

function endGame() {

    activeQuizScreen.classList.add("hide")
    scoreScreen.classList.remove("hide")

    timerEl.textContent = '';
    
    if (timeLeft == 1) {
        timerEl.textContent = "Your score is 0!"
        timeLeft=0
    } else {
        timerEl.textContent = "Your score is " + timeLeft + "!"
    }
    clearInterval(timeInterval);
}

function countdown() {
    if (timeLeft > 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
    } else {
        endGame()
    }
}
//scoreboard
function scoreReal() {

    event.preventDefault();

    var initials = document.querySelector("#initials").value

    console.log("this is initials: " + initials)

    var playerData = " " + initials + ": " + timeLeft
    var oldScores = localStorage.getItem('highscores')

    highscoresArr.push(playerData, oldScores)
    console.log("highscoresArr: " + highscoresArr)
    localStorage.setItem('highscores', highscoresArr)


    highScoresP.textContent = highscoresArr
}

//click events
startBtn.addEventListener("click", startQuiz)

initialsBtn.addEventListener("click", function (event) {

    highScoresDiv.classList.remove("hide")
    initialsForm.classList.add("hide")
    

    scoreReal();
})




function reload() {
    location.reload();

}
answerBtns.addEventListener("click", (event) => {

    let target = event.target.textContent;

    if (target == questions[indexQuestion].correctAnswer) {
        resultEl.textContent="Correct!"
        resultEl.style="color: green"
        indexQuestion++;
        renderQuestions();
    } else {
        resultEl.textContent="Wrong!"
        resultEl.style="color: red"
        timeLeft = timeLeft - 5;
        indexQuestion++;
        renderQuestions();
    }

})

clearScoresBtn.addEventListener("click", function (event) {
    highScoresDiv.classList.add("hide");
    timerEl.classList.add("hide")
    localStorage.clear();

})

tryAgainBtn.addEventListener("click", reload)
