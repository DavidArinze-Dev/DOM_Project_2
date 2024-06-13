var colourChanger = document.getElementById("color-box");
var colourChangerBtn = document.getElementById("change-color-btn");

var colourChanger2 = document.getElementById("color-box2");
var colourChangerBtn2 = document.getElementById("change-color-btn2");

var colours = [
  "#eb7434",
  "#eba134",
  "#d2eb34",
  "#49eb34",
  "#34eb98",
  "#34b4eb",
  "#b434eb",
];
var counter = 0;
// var counter2 = 0;

colourChangerBtn.addEventListener("click", getRandomColor);

function getRandomColor() {
  if (counter >= colours.length) {
    counter = 0;
  }
  colourChanger.style.background = colours[counter];
  counter++;
}
var myTimer = setInterval(getRandomColor, 2000);

// clearInterval(myTimer);
// colourChanger.style.background = "black";

document.addEventListener("DOMContentLoaded", () => {
  let currentColorIndex = 0; // Keeps track of the current color index

  function changeBackgroundColor() {
    if (!colourChanger2) {
      console.error(`Element with ID "${"color-box2"}" not found.`);
      return;
    }

    colourChanger2.style.backgroundColor = colours[currentColorIndex]; // Set background color

    currentColorIndex = (currentColorIndex + 1) % colours.length; // Update index for next color
  }

  colourChangerBtn2.addEventListener("click", function () {
    changeBackgroundColor("color-box2");
  });
});
