var numbers = document.getElementById("numbersList")
var averageDiv = document.getElementById("average")
var sumDiv = document.getElementById("sum")

function submit() {
    let sum = 0
    let numbersList = numbers.value.split(", ");
    console.log(numbersList.length)
    let definedNumberList = numbersList.map(Number);
    console.log(definedNumberList)
    for(var i = 0; i < definedNumberList.length; i ++) {
       sum += definedNumberList[i];
       
    }
    let average = sum/definedNumberList.length;
    averageDiv.innerHTML = "Average: " + average;
    sumDiv.innerHTML = "Sum: " + sum;
}
