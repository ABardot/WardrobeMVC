
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

function Redirect(x) {
    var confirmButton = document.getElementById(x);
    var userResponse = confirm('You are about to leave this site. If you want to stay, please select cancel.');
    var displayContainer = document.getElementById('confirmResponse');
    var displayMessage = '';
    if (userResponse) {
        var win = window.open("https://www.lamarcadeldiablo.com/", '_blank');
        win.focus();
    }
}

function GetVilla() {
    var villaArray = new Array(0);
    var userResponse = confirm('Would you like to check the availability of a colors?');
    while (userResponse) {
        var villa = prompt('Please enter the color');
        userResponse = confirm('Would you like to add another color?');
        villaArray.push(villa);
    }
    var d = new Date();
    var m = d.getMonth();
    var x = document.getElementById("villaswap");
    if (m > 0 && m < 4) {
        x.getElementsByTagName('p')[1].innerText = villaArray[0];
    } else if (m > 3 && m < 7) {
        x.getElementsByTagName('p')[1].innerText = villaArray[1];
    } else if (m > 6 && m < 10) {
        x.getElementsByTagName('p')[1].innerText = villaArray[2];
    } else if (m > 9 && m < 13) {
        x.getElementsByTagName('p')[1].innerText = villaArray[3];
    } else {
        x.getElementsByTagName('p')[1].innerText = 'Sorry we have no villas available';
    }
}