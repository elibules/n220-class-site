
function makeDiv() {
    for(var i = 0; i < 100; i ++) {
        var newDiv = document.createElement("div")
        newDiv.style.height = 20 + "px"
        newDiv.style.width = 20 + "px"
        newDiv.style.float = "left"
        newDiv.style.backgroundColor = "rgb(" + 3 * i + "," + 2 * i + "," + 10 * i + ")";
        document.body.appendChild(newDiv);
    }
}

makeDiv();