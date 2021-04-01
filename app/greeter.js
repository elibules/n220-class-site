let nameResponse = document.getElementById("name")

function hello(userName = nameResponse.value) {
    // let userName = nameResponse.value;

    return(console.log("Hello " + userName + "!"))
    
}