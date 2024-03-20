function draw_clock(obj) {

  // ____________________ setup & variables ____________________
  let secondsWidth = map(obj.seconds, 0, 59, 0, 25);
  let minutesWidth = map(obj.minutes, 0, 59, 0, 25);
  let twelveHourTime = obj.hours % 12;
  let hoursWidth = map(twelveHourTime, 0, 11, 0, 25);
  // let secondsWithFraction = obj.seconds + (obj.millis / 1000.0);
  // let secondHandRotation = map(secondsWithFraction, 0, 60, 0, 360);

  let clockSize = 210;
  let minutesScale = 1.75;
  let hoursScale = 3.5;

  let bgColour = "rgb(20, 20, 20)"
  let secondsColour = "rgb(101, 101, 101)";
  let minutesColour = "rgb(141, 141, 141)";
  let hoursColour = "rgb(181, 181, 181)";
  
  angleMode(DEGREES);
  background(bgColour);
  fill(255);
  textSize(10);
  noStroke();

  // ____________________ debug text time ____________________
  push();
  textAlign(LEFT);
  text("Hour: " + obj.hours, 10, 20);
  text("Minute: " + obj.minutes, 10, 40);
  text("Second: " + obj.seconds, 10, 60);
  text("Millis: " + obj.millis, 10, 80);
  pop();

  // ____________________ main clock ____________________

  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(2);

  // ____________________ drawing circles ____________________ 
  push();
  for (i = 0; i < 60; i++) {
    rotate(6);
    stroke(secondsColour);
    point(-clockSize, 0);
  }
  pop();

  push();
  for (j = 0; j < 60; j++) {
    rotate(6);
    stroke(minutesColour);
    point(-clockSize / minutesScale, 0);
  }
  pop();

  push();
  for (k = 0; k < 12; k++) {
    rotate(30);
    stroke(hoursColour);
    point(-clockSize / hoursScale, 0);
  }
  pop();



  strokeWeight(1);
  textAlign(CENTER);

  // ____________________ hands / numbers ____________________ 
  push();
  rotate(6 * obj.seconds);
  fill(secondsColour);
  stroke(secondsColour);
  textSize(clockSize / 16)
  text(obj.seconds, 0, -clockSize / 10 - clockSize);
  
  rotate(90);
  line(-clockSize, 0, clockSize, 0);
  pop();


  push();
  rotate(6 * obj.minutes);
  fill(minutesColour);
  stroke(minutesColour);
  textSize(clockSize / 16)
  text(obj.minutes, 0, -clockSize / 10 - clockSize / minutesScale);
  
  rotate(90);
  line(-clockSize / minutesScale, 0, clockSize / minutesScale, 0);
  pop();


  push();
  rotate(30 * obj.hours);
  fill(hoursColour);
  stroke(hoursColour);
  textSize(clockSize / 16)
  text(obj.hours % 12, 0, -clockSize / 10 - clockSize / hoursScale);
  
  rotate(90);
  line(-clockSize / hoursScale, 0, clockSize / hoursScale, 0);
  pop();
}