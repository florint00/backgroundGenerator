//  storing our elements in variables
//  for future functionality

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// we create a function setGradient that styles the 
// background of body element in a way that our 
// 2 color inputs combine themselfs

function setGradient(){
    body.style.background = 
    "linear-gradient(to right, "
     + color1.value
     + ", " 
     + color2.value 
     + ")";

     css.textContent = body.style.background + ";";
}

// and after that , attache on the color1,color2 the input
// eventListener with setGradient function 

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);