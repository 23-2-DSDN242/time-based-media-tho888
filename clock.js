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
  background(24);
  fill(255);
  textSize(10);

  // -------------------------- text clock indicators --------------------------
  fill(175);
  text("Hour: " + obj.hours, 10, 20);
  text("Minute: " + obj.minutes, 10, 40);
  text("Second: " + obj.seconds, 10, 60);
  text("Millis: " + obj.millis, 10, 80);
}

function spirograph() {
  // -------------------------- main clock --------------------------
  translate(width / 2, height / 2);
  noStroke();

  let millisMap = map(obj.millis, 0, 999, 0, 500);
  let secondsMap = map(obj.seconds, 0, 59, 0, 500);
  let minutesMap = map(obj.minutes, 0, 59, 0, 500);
  let hoursMap = map(obj.hours, 0, 23, 0, 500);

  fill('rgba(231, 0, 0, 0.2)');
  ellipse(0, 0, millisMap, millisMap);
  fill('rgba(0, 231, 0, 0.2)');
  ellipse(0, 0, secondsMap, secondsMap);
  fill('rgba(0, 0, 231, 0.2)');
  ellipse(0, 0, minutesMap, minutesMap);
  fill('rgba(231, 231, 231, 0.2)');
  ellipse(0, 0, hoursMap, hoursMap);

}