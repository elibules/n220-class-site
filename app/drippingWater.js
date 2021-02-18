let yPos = [0];

function setup() {
createCanvas(400, 400);
}

function draw() {
    background(220);
    fill(0, 150, 255)
    if(frameCount % 10 == 0) {
        yPos.push(0);
    }

    for(let i = 0; i < yPos.length; i++) {
        circle(200, yPos[i], 40);
        yPos[i] = yPos[i] + 5;
    }
}