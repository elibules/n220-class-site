// I know this cannot be the best way to do this I'm sorry hahaha
var red = 0
var green = 0
var blue = 0

var currentColor = document.getElementById("currentColor")
var colorBox = document.getElementById("colorBox")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")
var btn5 = document.getElementById("btn5")
var btn6 = document.getElementById("btn6")
var btn7 = document.getElementById("btn7")
var btn8 = document.getElementById("btn8")
var btn9 = document.getElementById("btn9")

btn1.addEventListener("click", changeRed)
btn2.addEventListener("click", changeRed)
btn3.addEventListener("click", changeRed)
btn4.addEventListener("click", changeGreen)
btn5.addEventListener("click", changeGreen)
btn6.addEventListener("click", changeGreen)
btn7.addEventListener("click", changeBlue)
btn8.addEventListener("click", changeBlue)
btn9.addEventListener("click", changeBlue)

function changeRed(event) {
    red += Number(event.target.getAttribute("data-value"));
    colorBox.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    currentColor.innerHTML = "rgb(" + red + "," + green + "," + blue + ")";
}
function changeGreen(event) {
    green += Number(event.target.getAttribute("data-value"));
    colorBox.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    currentColor.innerHTML = "rgb(" + red + "," + green + "," + blue + ")";
}
function changeBlue(event) {
    blue += Number(event.target.getAttribute("data-value"));
    colorBox.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    currentColor.innerHTML = "rgb(" + red + "," + green + "," + blue + ")";
}

