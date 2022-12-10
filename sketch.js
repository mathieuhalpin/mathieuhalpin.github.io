// defines the size of the canvas
const canvasWidth = 1379;
const canvasHeight = 500;

// defines the current drawing color
let currentColor = "black";

// defines the current drawing tool
let currentTool = "pen";

let prevX = 0;
let prevY = 0;

const sketch = (p) => {
  p.setup = () => {
    // creates the canvas
    const canvas = p.createCanvas(canvasWidth, canvasHeight);
    // sets the background color to white
    p.background(255);

    // creates a color picker element
    p.int("color-picker", "color");

    // listens for changes to the color picker value
    p.createInput("color-picker", "color").changed(updateColor);

    // creates a dropdown menu to select the drawing tool
    const toolSelect = p.createSelect();
    toolSelect.option("Pen");
    toolSelect.option("Marker");
    toolSelect.option("Eraser");

    // listens for changes to the selected tool
    toolSelect.changed(updateTool);

    // creates a save button
    const saveButton = p.createButton("Save");
    saveButton.mousePressed(() => p.saveCanvas(canvas));
  };

  p.draw = () => {
    p.noStroke(); // eliminates the black box around the circles for marker

    if (currentTool === "pen") {
      // if the current tool is a pen, set the stroke color to the current drawing color and draw a line from the previous mouse position to the current mouse position
      p.stroke(currentColor);
      if (p.mouseIsPressed) {
        p.line(prevX, prevY, p.mouseX, p.mouseY);
      }
    } else if (currentTool === "marker") {
      // if the current tool is a marker, set the fill color to the current drawing color and draw a rectangle at the current mouse position with a size of 10x10 pixels
      p.fill(currentColor);
      if (p.mouseIsPressed) {
        p.circle(p.mouseX, p.mouseY, 10);
      }
    } else if (currentTool === "eraser") {
      // if the current tool is an eraser, clear a 10x10 pixel area around the current mouse position
      if (p.mouseIsPressed) {
        p.clear(p.mouseX - 5, p.mouseY - 5, 10, 10);
      }
    }

    prevX = p.mouseX;
    prevY = p.mouseY;
  };
};

// update the current drawing color when the color picker value changes
function updateColor() {
  currentColor = this.value();
}

// update the current drawing tool when the selected tool changes
function updateTool() {
  currentTool = this.value().toLowerCase();
}

new p5(sketch, "paint-container");