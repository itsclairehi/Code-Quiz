//make questions array

//make timer that starts at 60 and decrements by 1 every 1000 miliseconds in countdown function

//make starting screen with start button that populates question <p> and answer buttons according to index, and creates timer
//  *add event listener "click" to start button that goes to countdown function
//  *countdown function enclosed in larger function that includes creating first question?

//create 1 event listener click for all 4 answer options (event delegation)
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



//references to html elements stored in variables 
// var mainEl = document.querySelector("#main")
var startBtn = document.querySelector("#startbtn")
var timerEl = document.querySelector("#timer")
var questionEl = document.querySelector("#question")
var resultEl = document.querySelector("#result")
var startScreen = document.querySelector("#startscreen")
var activeQuizScreen = document.querySelector("#activequiz")
var scoreScreen = document.querySelector("#scorescreen")

//references to answer buttons
var answerBtns = document.querySelector("#answerbtns")
var answerOption1El = document.querySelector("#option1")
var answerOption2El = document.querySelector("#option2")
var answerOption3El = document.querySelector("#option3")
var answerOption4El = document.querySelector("#option4")
//other buttons
var tryAgainBtn = document.querySelector("#try-again")
var clearScoresBtn = document.querySelector("#clear-scores")
var initialsBtn = document.querySelector("#save-initials")

//initialized global varibales
var indexQuestion = 0;
var timeLeft = 60;
var timeInterval; 
var score = 0;

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
        ask: "2. what is red",
        option1: "blue",
        option2: "red",
        option3: "green",
        option4: "yellow",
        correctAnswer: "red"
    },
    {
        ask: "3. what is dog",
        option1: "cat",
        option2: "bug",
        option3: "hamster",
        option4: "dog",
        correctAnswer: "dog"
    },
    {
        ask: "4. what year?",
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

        timeInterval = setInterval(countdown, 1000);
        countdown();
        renderQuestions();

      
};

function renderQuestions(){
    if(indexQuestion===4){
        
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

function initialsHandler() {
    event.preventDefault();
    console.log("initials button clicked!")
}

function endGame(){

    activeQuizScreen.classList.add("hide")
    scoreScreen.classList.remove("hide")

    timerEl.textContent = '';
    console.log("Your score is " + timeLeft)
    timerEl.textContent = "Your score is " + timeLeft + "!"
    clearInterval(timeInterval);
    console.log('here', timeLeft)
    //display form, display the score
    //user will fill out form 
    // onclick submit
    //  -localStorage.setItem(/*usersname*/ timeLeft)
    //  -display list of high scores (home buttom )


    //populate high score form, appear tryagain and clear score buttons etc.
    console.log("time's up!")


}

function countdown() {
    if (timeLeft > 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
    } else {
     endGame()
    }
}



//click events
startBtn.addEventListener("click", startQuiz)

initialsBtn.addEventListener("click", initialsHandler)

answerBtns.addEventListener("click", (event) => {

    let target = event.target.textContent;  
    
    if (target==questions[indexQuestion].correctAnswer) {
        console.log("correct!");
        indexQuestion++;
        renderQuestions();
    }else {
        console.log("Wrong!")
        timeLeft = timeLeft -  5;
        indexQuestion++;
        renderQuestions();
    }

})

