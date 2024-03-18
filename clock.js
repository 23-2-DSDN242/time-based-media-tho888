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

function main_clock() {
  // -------------------------- main clock --------------------------
  let millisWidth = map(obj.millis, 0, 999, 0, 90);
  let secondsWidth = map(obj.seconds, 0, 59, 0, 90);
  let minutesWidth = map(obj.minutes, 0, 59, 0, 90);
  let hoursWidth = map(obj.hours, 0, 23, 0, 90);


  // fill('rgba(231, 231, 231, 0.1)');
  noStroke();

  for (let repeatX = 0; repeatX <= 960; repeatX += 96) {

    for (let repeatY = 0; repeatY <= 500; repeatY += 100) {

    fill('rgba(231, 231, 231, 0.2)');
    ellipse(repeatX - 45, repeatY - 45, hoursWidth, hoursWidth);

    fill('rgba(231, 231, 231, 0.15)');
    ellipse(repeatX, repeatY - 45, minutesWidth, minutesWidth);

    fill('rgba(231, 231, 231, 0.1)');
    ellipse(repeatX - 45, repeatY, secondsWidth, secondsWidth);

    fill('rgba(231, 231, 231, 0.05)');
    ellipse(repeatX, repeatY, millisWidth, millisWidth);

    }

  }
}