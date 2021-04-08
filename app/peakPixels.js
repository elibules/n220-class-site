var peakDiv = document.getElementById("peakDiv")
var divDimensions = 100

function getBigger() {
    divDimensions = divDimensions * 1.1;

    peakDiv.style.width = divDimensions + "px"
    peakDiv.style.height = divDimensions + "px"
}