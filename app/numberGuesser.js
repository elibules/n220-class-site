var guessedNumber = document.getElementById("guessedNumber")
var response = document.getElementById("response")
var theAnswer = Math.ceil(Math.random() * 20)

function calculate() {
    let possibleAnswer = Number(guessedNumber.value);

    if(possibleAnswer == theAnswer) {
        response.innerHTML = "You're right! Guess the new number :-)";
        theAnswer = Math.ceil(Math.random() * 20);
        guessedNumber.value = " ";
    }
    else if(possibleAnswer > theAnswer) {
        response.innerHTML = "Hmmm, too high"
    }
    else if(possibleAnswer < theAnswer) {
        response.innerHTML = "Nah, too low"
    }
}