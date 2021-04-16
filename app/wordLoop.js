var tallyDiv = document.getElementById("tally")
var foundOrNotDiv = document.getElementById("foundOrNot")
var phraseInput = document.getElementById("phraseInput")

function submit() {
    wordArray = phraseInput.value.split(" ");
    let badWords = 0;
    for(var i = 0; i < wordArray.length; i ++){
        if(wordArray[i].toLowerCase() == "clear") {
            badWords ++;
        } else if(wordArray[i].toLowerCase() == "water") {
            badWords ++;
        } else if(wordArray[i].toLowerCase() == "ties") {
            badWords ++;
        }
        if(badWords > 0){
            foundOrNotDiv.innerHTML = "found"
        } else {
            foundOrNotDiv.innerHTML = "Not Found"
        }
    }
    tallyDiv.innerHTML = badWords;
}
