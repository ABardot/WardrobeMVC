-------------------------
    Wardrobe README.txt 
-------------------------
The following documentation is for all JavaScript function and methods involved with my wardrobe application.

-The prompt that asks the user for his/her name
<body onload="Greeting()">

-The footer funtion changes from date to my name 
function myEnterFunction() {
    document.getElementById("demo2").innerHTML = "Created by Adrien Bardot";
}

-These function were used for the JS HW assignment 
document.getElementById("myDIV").addEventListener("webkitTransitionEnd", myFunction1);

document.getElementById("myDIV").addEventListener("transitionend", myFunction1);

function myFunction1() {
    this.innerHTML = "transitionend event occured - The transition has completed";
    this.style.backgroundColor = "pink";
}

-This next funtion will increase the font and color size of of the <p> in the index of the landing page
function changeText() {
    var text = document.getElementById("para").style.fontSize = "15px";
    var text = document.getElementById("para").style.color = "blue";
}

function normaltext() {
    var text = document.getElementById("para").style.fontSize = "25px";
    var text = document.getElementById("para").style.color = "green";
}

-This function makes the button of the "Add more clothes" hover using JS
function overBtn(x) {
    x.style.backgroundColor = "#87CEFA";
    x.style.color = "#D2691E";
}


function outBtn(x) {
    x.style.backgroundColor = "grey";
    x.style.color = "black";
}

-The Swap function is executed when the button of the "Add more clothes" when the user clicks the button. It swaps divs within the thumbnail
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

-When the user then clicks the "Shop Now!" button it will redirect you tio a third party site
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

-This function will propmt the user to pick a color or s type of clothing using an array
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

