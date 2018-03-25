
function myEnterFunction() {
    document.getElementById("demo2").innerHTML = "Created by Adrien Bardot";
}

function myFunction() {
    var x = document.getElementById("main");
    x.getElementsByTagName("h2")[0].style.fontSize = "50px";
    x.getElementsByTagName("h2")[0].style.color = "red";
   
}

function Greeting() {
    var x = document.getElementById("main");
    var userResponse = prompt('Welcome to the closet app. What is your name?');
    x.getElementsByTagName('h2')[0].innerText = 'Welcome to closet app ' + userResponse + '!';
}

