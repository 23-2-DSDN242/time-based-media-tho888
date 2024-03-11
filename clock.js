// function preload() {
//   background(10);
// }

function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  
  // -------------------------- setup --------------------------
  angleMode(DEGREES);
  // background(10);
  fill(255);
  textSize(10);

  // -------------------------- text clock indicators --------------------------
  // fill(175); 
  // text("Hour: "   + obj.hours, 10, 20);
  // text("Minute: " + obj.minutes, 10, 40);
  // text("Second: " + obj.seconds, 10, 60);
  // text("Millis: " + obj.millis, 10, 80);
}

function spirograph() {
  // -------------------------- main clock --------------------------
  translate(width / 2, height / 2);
  fill(231, 231, 231, 255);
  strokeWeight(2);

  rotate(360 / 60 * obj.minutes - 90);
  translate(100, 0);

  rotate(360 / 60 * obj.seconds - 90);
  translate(50, 0);

  rotate(360 / 1000 * obj.millis);
  translate(10, 0);

  point(0,0);
}

// use preload() to change background once