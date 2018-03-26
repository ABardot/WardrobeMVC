
// Footer hover name swap
function myEnterFunction() {
    document.getElementById("demo2").innerHTML = "Created by Adrien Bardot";
}

// This changes the size and the color of the greet meesage
function myFunction() {
    var x = document.getElementById("main");
    x.getElementsByTagName("h2")[0].style.fontSize = "50px";
    x.getElementsByTagName("h2")[0].style.color = "orange";
   
}

// This prompts the user to enter name
function Greeting() {
    var x = document.getElementById("main");
    var userResponse = prompt('Welcome to the closet app. What is your name?');
    x.getElementsByTagName('h2')[0].innerText = 'Welcome to closet app ' + userResponse + '!';
}

// This is for the shopping btn hover over & out
function overBtn(x) {
    x.style.backgroundColor = "#87CEFA";
    x.style.color = "#D2691E";
}


function outBtn(x) {
    x.style.backgroundColor = "grey";
    x.style.color = "black";
}

// Switch for the Add more clothes thumbnail
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

// This will redirect the user to a 3 party site
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

// This propmts the user to choose a color or shirt for the array
function GetVilla() {
    var villaArray = new Array(0);
    var userResponse = confirm('Would you like to check the availability of a colors?'); // Prompt user
    while (userResponse) {
        var villa = prompt('Please enter the color');
        userResponse = confirm('Would you like to add another color?');
        villaArray.push(villa);
    }
    // I tried to filter but couldn't get it to work
    var r = "red";
    var y = "yellow";
    var shirt1 = "button down";
    var shirt2 = "tank-top";
    var bot1 = "jeans";
    var bot2 = "slacks";
  

    var x = document.getElementById("villaswap");
    if (r && shirt1) {
        x.getElementsByTagName('p')[1].innerText = villaArray[0];
    } else if (r && shirt2) {
        x.getElementsByTagName('p')[1].innerText = villaArray[1];
    } else if (r && bot1) {
        x.getElementsByTagName('p')[1].innerText = villaArray[2];
    } else if (r && bot2) {
        x.getElementsByTagName('p')[1].innerText = villaArray[3];
    }
    else if (y && shirt1) {
            x.getElementsByTagName('p')[1].innerText = villaArray[4];
    }
    else if (y && shirt2) {
        x.getElementsByTagName('p')[1].innerText = villaArray[5];
    }
    else if (y && bot1) {
        x.getElementsByTagName('p')[1].innerText = villaArray[5];
    }
    else if (y && bot2) {
        x.getElementsByTagName('p')[1].innerText = villaArray[5];
    }
    else {
        x.getElementsByTagName('p')[1].innerText = 'Sorry we have those items available';
    }
}

// Function for the welcome <p> in landing page
function changeText() {
    var text = document.getElementById("para").style.fontSize = "15px";
    var text = document.getElementById("para").style.color = "blue";
}

function normaltext() {
    var text = document.getElementById("para").style.fontSize = "25px";
    var text = document.getElementById("para").style.color = "green";
}

// Homework JavaScript 
document.getElementById("myDIV").addEventListener("webkitTransitionEnd", myFunction1);

document.getElementById("myDIV").addEventListener("transitionend", myFunction1);

function myFunction1() {
    this.innerHTML = "transitionend event occured - The transition has completed";
    this.style.backgroundColor = "pink";
}
