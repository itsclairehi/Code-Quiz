var runningQuestionIndex = 0

function renderQuestion() {
var q = questions[runningQuestionIndex]
question.textContent= q.question
answerOption1El.textContent = q.option1
runningQuestionIndex++
renderQuestion()
}