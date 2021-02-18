var xAndY = [];

function setup() {
    createCanvas(400, 400);
}

function mousePressed() {
    xAndY.push([mouseX - 40, mouseY - 25]);
}  

function draw() {

    background(200);

    for (var i = 0; i < xAndY.length; i++) {
        fill(255, 100, 70);
        rect(xAndY[i][0], xAndY[i][1], 80, 50);
        xAndY[i][1] += 1;
    }
}



