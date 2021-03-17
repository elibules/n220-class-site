// Create an array of colors that the circles will draw their fill from
var colors = ['#f73140', '#f7f000', '#94d625']

// Setup function will serve as our only function as the code does not need to be refreshed
function setup() {
    createCanvas(600, 600)

    // Created the black rectangle background for the stoplight
    fill(0, 0, 0)
    rect(260, 165, 80, 180)

    // Create the three different colored circles using a for loop that has three iterations
    for(let i = 0; i < 3; i ++) {
        // fill a color from the array that equals i
        fill(colors[i])
        // make a circle that moves with each iteration
        circle(300, 200 + i * 55, 50)
    }
    
}