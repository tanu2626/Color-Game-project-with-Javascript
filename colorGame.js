var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  colors = generateRandomColors(3);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
    }else {
      squares[i].style.display = none;
    }
  }
});

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
});

resetButton.addEventListener("click", function () {
  // generate all new colors
colors = generateRandomColors(6);
  //pick a new random colors from array
pickedColor = pickColor();
  //change colors of squares
colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
  squares[i].style.background = colors[i];
}
h1.style.background = "#232323";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
// add iintial colors to squares
  squares[i].style.background = colors[i];
// add quick listeners to squares
  squares[i].addEventListener("click", function () {
  //grab color pf clicked squares
  var clickedColor = this.style.background;
// compare color to pickedColor
if(clickedColor === pickedColor){
  messageDisplay.textContent ="Correct";
  resetButton.textContent = "Play Again?"
  changeColors(clickedColor);
  h1.style.background = clickedColor;
}else{
  this.style.background = "#232323";
  messageDisplay.textContent = "Try Again";
}

});

}

function changeColors(color) {
  //loop through all squares
  for(var i =0; i < colors.length;  i++){
    squares[i].style.background = color;
    }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = []
  //repeat num arrays
  for (var i = 0; i < num; i++){
      //get  random color and push into array
    arr.push(randomColor())

  }
  //return an array
  return arr;
}


function randomColor() {
  //pick a red from 0 -255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0 -255
  var g = Math.floor(Math.random() * 256);
  // pick a blue from 0 -255
  var b = Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")";
}
