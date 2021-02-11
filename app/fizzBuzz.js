
function setup() {
    createCanvas(800, 600)
    for(var i = 1; i <= 25; i++) {
        fill(0)
        circle(i * 30, 400, 30);    
        if(i % 3 === 0) {
            fill(255, 0, 255)
            circle(i * 30, 400, 30)
        }
        if(i % 3 === 0 && i % 5 === 0) {
            fill(0, 0, 255)
            rect(i * 29, 385, 30, 30)
        }
        console.log(i);
    }
}
