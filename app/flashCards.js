var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var question1 = document.getElementById("question1")
var question2 = document.getElementById("question2")
var question3 = document.getElementById("question3")

question1.addEventListener("click", displayAnswer)
question2.addEventListener("click", displayAnswer)
question3.addEventListener("click", displayAnswer)

function displayAnswer(event) {
    let answer = event.target.getAttribute("data-answer");

    if(answer == "Uwe Rosenberg") {
        answer1.innerHTML = answer;
    } else if (answer == "A minor") {
        answer2.innerHTML = answer;
    } else if (answer == "Margaret Weis and Tracy Hickman") {
        answer3.innerHTML = answer
    }
}