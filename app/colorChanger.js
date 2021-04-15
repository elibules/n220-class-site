var div1 = document.getElementById("div1")
var div2 = document.getElementById("div2")
var div3 = document.getElementById("div3")
div1.addEventListener("click", changeColor)
div2.addEventListener("click", changeColor)
div3.addEventListener("click", changeColor)

function changeColor(event) {
    let divColor = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = divColor;
}

