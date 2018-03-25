
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

function overBtn(x) {
    x.style.backgroundColor = "#87CEFA";
    x.style.color = "#D2691E";
}


function outBtn(x) {
    x.style.backgroundColor = "grey";
    x.style.color = "black";
}

function SwapDivsWithClick(div1, div2) {
    d1 = document.getElementById(div1);
    d2 = document.getElementById(div2);
    if (d2.style.display == "none") {
        d1.style.display = "none";
        d2.style.display = "flex";
    }
    else {
        d1.style.display = "flex";
        d2.style.display = "none";
    }
}