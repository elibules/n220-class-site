var div = document.getElementById("hoverDiv")
div.style.height = 100 + "px"
div.style.width = 100 + "px"
div.style.margin = "0 auto"
div.style.backgroundColor = "rgb(0,0,200)"

function mouseOn() {
    div.style.backgroundColor = "rgb(0,0,0)"
}

function mouseOut() {
    div.style.backgroundColor = "rgb(0,0,200)"
}