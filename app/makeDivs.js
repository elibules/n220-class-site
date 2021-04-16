var objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

function drawDivs() {
    for(var i = 0; i < 3; i ++){
        let newDiv = document.createElement("div")
        newDiv.style.backgroundColor = objects[i].color;
        newDiv.style.height = objects[i].height + "px";
        newDiv.style.width = objects[i].width + "px";
        document.body.appendChild(newDiv);
    }
}

drawDivs();