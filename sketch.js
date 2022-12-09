// defines the size of the canvas
const canvasWidth = 500;
const canvasHeight = 500;

// defines the current drawing color
let currentColor = 'black';

// defines the current drawing tool
let currentTool = 'pen';

let prevX = 0;
let prevY = 0;

function setup() {
  // creates the canvas
  createCanvas(canvasWidth, canvasHeight);
  // sets the background color to white
  background(255);

  // creates a color picker element
  int('color-picker', 'color');

  // listens for changes to the color picker value
  createInput('color-picker', 'color').changed(updateColor);

  // creates a dropdown menu to select the drawing tool
  const toolSelect = createSelect();
  toolSelect.option('Pen');
  toolSelect.option('Marker');
  toolSelect.option('Eraser');

  // listens for changes to the selected tool
  toolSelect.changed(updateTool);
  
  // creates a save button
  const saveButton = createButton('Save');
  saveButton.mousePressed(() => saveCanvas(canvas));
}

function draw() {
  prevX = mouseX;
  prevY = mouseY;
  noStroke(); // eliminates the black box around the circles for marker

  if (currentTool === 'pen') {
    // if the current tool is a pen, set the stroke color to the current drawing color and draw a line from the previous mouse position to the current mouse position
    stroke(currentColor);
    if (mouseIsPressed) {
  line(pmouseX, pmouseY, mouseX, mouseY);
}
  } else if (currentTool === 'marker') {
    // if the current tool is a marker, set the fill color to the current drawing color and draw a rectangle at the current mouse position with a size of 10x10 pixels
    fill(currentColor);
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 10);
    }
  } else if (currentTool === 'eraser') {
    // if the current tool is an eraser, clear a 10x10 pixel area around the current mouse position
    if (mouseIsPressed) {
      clear(mouseX - 5, mouseY - 5, 10, 10);
    }
  }
}

// update the current drawing color when the color picker value changes
function updateColor() {
  currentColor = this.value();
}

// update the current drawing tool when the selected tool changes
function updateTool() {
  currentTool = this.value().toLowerCase();
}