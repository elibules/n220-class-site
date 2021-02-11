function setup() {

    createCanvas(800, 800);
    
    for(var x = 0; x < 4; x++) { 
            for(var y = x; y < 4; y++){
              fill(255, 0, 0);
            rect(40 * x, y * 40, 40, 40); 
        }
    }
}