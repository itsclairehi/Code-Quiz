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

var highScores = []

//references to html elements stored in variables 
var startBtn = document.querySelector("#startbtn")
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
var highscoresArr= []

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

localStorage.getItem('initials');
if (initials == null) {
    initials== ''
} else {
    
}


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

function endGame(){

    activeQuizScreen.classList.add("hide")
    scoreScreen.classList.remove("hide")

    timerEl.textContent = '';
    console.log("Your score is " + timeLeft)
    if(timeLeft==1) {
        timerEl.textContent="Your score is 0!"
    } else {
    timerEl.textContent = "Your score is " + timeLeft + "!"
    }
    clearInterval(timeInterval);
    console.log('here', timeLeft)
    //display form, display the score
    //user will fill out form 
    // onclick submit
    //  -localStorage.setItem(/*usersname*/ timeLeft)
    //  -display list of high scores (home buttom )

 
    //populate high score form, appear tryagain and clear score buttons etc.
    // highScores.push()


}

function countdown() {
    if (timeLeft > 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
    } else {
     endGame()
    }
}

// function renderScore() {
//     var initials = localStorage.getItem('initials')

//     console.log(initials)

// highScoresP.textContent = initials + " , " + timeLeft

// var playerData = JSON.stringify(initials + ": " + timeLeft)

// highscoresArr.push(playerData)

// console.log("high scores array " + highscoresArr)

// localStorage.setItem('highscores', highscoresArr)

// highScoresP.textContent = localStorage.getItem('highscores')
    

// }

function scoreReal() {


    event.preventDefault();

    var initials = document.querySelector("#initials").value

    // localStorage.setItem('initials', initials)

    console.log("this is initials: " + initials)

    debugger;
    var playerData = initials + ": " + timeLeft
    var oldScores = localStorage.getItem('highscores')
    
    highscoresArr.push(playerData, oldScores)
    console.log("highscoresArr: " + highscoresArr)
    localStorage.setItem('highscores', highscoresArr)
    
    // if (highscoresArr.length < 0) {
    //     highscoresArr.push(playerData)
    //     console.log("highscoresArr: " + highscoresArr)
    //     localStorage.setItem('highscores', highscoresArr)
    // } else {
        
    //     localStorage.highscores = JSON.stringify([highscoresArr])
    //     localStorage.getItem('highscores');
    //     highscoresArr.push(playerData)
    //     console.log("high scores " + highscoresArr )
    //     highscoresArr.push(document.getElementById('highscores'))
    //     console.log("highscoresArr " + highscoresArr)
        
        
        
        // localStorage.setItem('highscores', highscoresArr)
    
    //}


    // var highScores= JSON.parse({highscoresArr})

    highScoresP.textContent = highscoresArr
}

//click events
startBtn.addEventListener("click", startQuiz)

initialsBtn.addEventListener("click", function(event) {
    
    highScoresDiv.classList.remove("hide")
    initialsForm.classList.add("hide")

    
scoreReal();
    // renderScore();
})




function reload() {
location.reload();

}
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

clearScoresBtn.addEventListener("click", function(event) {
    highScoresP.textContent = "";
})

tryAgainBtn.addEventListener("click", reload)





// function loadScores() {
//     if(typeof(Storage)!=="undefined"){
//         var scores = false;
//         if(localStorage["highscoresP"]) {
            
//             scores = JSON.parse(localStorage["highscoresP"]);
            

//             for(var i = 0; i < 10; i++){
//                 var s = scores[i];                        
//                 var fragment = document.createElement('li');
//                 fragment.innerHTML = (typeof(s) != "undefined" ? s : "" );
//                 highScoresP.appendChild(fragment);
//             }
//         }
//     } else {
//         highScoresP.style.display = "none";
//     }
// }

// function updateScores() {
//     if(typeof(Storage)!=="undefined"){
//         var current = parseInt(score.innerHTML);
//         var scores = false;
//         if(localStorage["highscoresP"]) {

//             scores = JSON.parse(localStorage["highscoresP"]);
            
//             for(var i = 0; i < 10; i++){
//                 var s = parseInt(scores[i]);
                
//                 var val = (!isNaN(s) ? s : 0 );
//                 if(current > val)
//                 {
//                     val = current;
//                     scores.splice(i, 0, parseInt(current));
//                     break;
//                 }
//             }
            
//             scores.length = 10;                                
//             localStorage["highscoresP"] = JSON.stringify(scores);

//         } else {                        
//             var scores = new Array();
//             scores[0] = current;
//             localStorage["highscoresP"] = JSON.stringify(scores);
//         }
        
//         loadScores();
//     } 
// }



// var highscoresArr = JSON.parse(localStorage.getItem("initials"))
    
    // if (initials === null) {
    //     highscoresArr = [];
    // }

    // highscoresArr.push({ [initials]: timeLeft})

    // localStorage.setItem("initials", JSON.stringify(highscoresArr))

    // var playerData = initials + " , " + timeLeft;

    // highScores.push(playerData)

    // console.log("playerData: " + playerData, " ", "highScores: " + highScores)