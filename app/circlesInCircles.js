function setup() {
    createCanvas(800, 800);
    noFill();
    for(i = 0; i < 30; i++){
        circle(400, 400, i * 15);
    }
}