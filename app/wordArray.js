var tallyDiv = document.getElementById("tally")
var foundOrNotDiv = document.getElementById("foundOrNot")
var phraseInput = document.getElementById("phraseInput")

function submit() {
    wordArray = phraseInput.value.split(" ");
    let badWords = 0;
    // if(wordArray.includes("clear")) {
    //     badWords ++;
    // } else if(wordArray.includes("water")) {
    //     badWords ++;
    // } else if(wordArray.includes("ties")) {
    //     badWords ++;
    // }

    if(badWords > 0){
        foundOrNotDiv.innerHTML = "Found";
    } else {
        foundOrNotDiv.innerHTML = "Not Found";
    }

    tallyDiv.innerHTML = badWords;
}
