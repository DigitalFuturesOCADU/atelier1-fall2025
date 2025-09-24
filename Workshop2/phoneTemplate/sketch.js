// =============================================
// Mobile p5.js GIF Interaction Project
// =============================================
// Available sensors after pressing START:
// - Touch: touchX, touchY, touches[]
// - Motion: rotationX, rotationY, rotationZ
// - Acceleration: accelerationX, accelerationY, accelerationZ  
// - Microphone: mic.getLevel()
// =============================================

// Global variables
let mic;  // Microphone input
let myGif; // Your GIF image

// TODO: Add your global variables here


// =============================================
// PRELOAD - Load your images/GIFs
// =============================================
function preload() {
  // TODO: Load your GIF(s)
  // myGif = loadImage('assets/yourGif.gif');
}

// =============================================
// SETUP - Initialize canvas and sensors
// =============================================
function setup() {
  // Create full screen canvas
  createCanvas(windowWidth, windowHeight);
  
  // Setup microphone (will start after permissions)
  mic = new p5.AudioIn();
  
  // Performance settings
  frameRate(30);
  pixelDensity(1);
  
  // TODO: Add your setup code here
  background(0);
  imageMode(CENTER);
}

// =============================================
// DRAW - Main animation loop
// =============================================
function draw() {
  background(20);
  
  // Check if sensors are enabled (user pressed START)
  if (!sensorsEnabled) {
    // Show waiting message
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Press START to begin", width/2, height/2);
    return; // Don't run main code until ready
  }
  
  // =============================================
  // YOUR INTERACTION CODE STARTS HERE
  // =============================================
  
  // Example: Show sensor values
  fill(255);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(14);
  text("Rotation X: " + nf(rotationX, 0, 1), 20, 20);
  text("Rotation Y: " + nf(rotationY, 0, 1), 20, 40);
  text("Rotation Z: " + nf(rotationZ, 0, 1), 20, 60);
  text("Touches: " + touches.length, 20, 100);
  
  // Example: Get microphone level
  if (micEnabled) {
    let level = mic.getLevel();
    text("Mic Level: " + nf(level, 0, 3), 20, 120);
  }
  
  // TODO: Add your interaction code here
  // - Display and manipulate your GIF(s)
  // - Respond to sensor input
  // - Create interactive behaviors
  
  
  
  // =============================================
  // YOUR INTERACTION CODE ENDS HERE
  // =============================================
}

// =============================================
// TOUCH EVENTS
// =============================================
function touchStarted() {
  // TODO: Add your touch started code
  
  // Must return false to prevent defaults
  return false;
}

function touchMoved() {
  // TODO: Add your touch moved code
  
  return false;
}

function touchEnded() {
  // TODO: Add your touch ended code
  
  return false;
}

// =============================================
// DEVICE MOTION EVENTS
// =============================================
function deviceShaken() {
  // TODO: Respond to shake
  console.log("Shaken!");
}

function deviceTurned() {
  // TODO: Respond to turn
  if (turnAxis === 'X') {
    console.log("Turned on X");
  } else if (turnAxis === 'Y') {
    console.log("Turned on Y");
  } else if (turnAxis === 'Z') {
    console.log("Turned on Z");
  }
}

function deviceMoved() {
  // TODO: Respond to device movement
}

// =============================================
// WINDOW RESIZE
// =============================================
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// =============================================
// PERMISSION CALLBACK (called after START pressed)
// =============================================
function userSetupComplete() {
  // This is called after permissions are granted
  // Restart microphone with permissions
  if (mic) {
    mic.start();
    micEnabled = true;
  }
  
  // TODO: Any setup that needs permissions
  
  console.log("Sensors enabled!");
}