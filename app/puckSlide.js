
function setup() {
    createCanvas(400, 300)
}

function draw() {
    let xpos = mouseX
    clear()
    circle(mouseX, mouseY, 30)
    if (xpos > 200) {
        fill(255, 0, 0)
    }
    else {
        fill(0, 0, 255)
    }
}