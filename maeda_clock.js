// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  colorMode(HSB)
  background(5);
  fill(100);
  textSize(40);
  textAlign(CENTER, CENTER);

  text(obj.hours, width / 3, height / 2);
  text(obj.minutes, width / 3 * 2, height / 2);
  }