function draw_clock(obj) {

  // ____________________ setup & variables ____________________
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
  fill(255);
  textSize(10);
  noStroke();

  let darkGrey = 'hsb(26, 19%, 14%)';
  let salmon = 'hsb(9, 61%, 95%)';

  let clockSize = 200;
  let minutesScale = 1.75;
  let hoursScale = 3.5;

  let bgColour = darkGrey;
  let bgColourAlarm = salmon;
  let clockColour = salmon;
  let clockColourAlarm = darkGrey;

  if (obj.seconds_until_alarm == 0) {
    if (obj.seconds % 2 === 0) {
      background(bgColour);

    } else {
      background(bgColourAlarm);

    }
  } else {
    background(bgColour);

  }

  let secondsPadded = nf(obj.seconds, 2);
  let minutesPadded = nf(obj.minutes, 2);

  // ____________________ debug text time ____________________
  // push();
  // textAlign(LEFT);
  // text("Hour: " + obj.hours, 10, 20);
  // text("Minute: " + obj.minutes, 10, 40);
  // text("Second: " + obj.seconds, 10, 60);
  // text("Millis: " + obj.millis, 10, 80);
  // pop();

  // ____________________ main clock ____________________

  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(3);

  // ____________________ drawing circles ____________________ 
  push();
  for (i = 0; i < 60; i++) {
    rotate(6);

    if (obj.seconds_until_alarm < 0) {
      stroke(clockColour);

    } else if (obj.seconds_until_alarm == 0) {

      if (obj.seconds % 2 === 0) {
        stroke(clockColour);

      } else {
        stroke(clockColourAlarm);

      }
    } else {
      stroke(clockColour);

    }

    point(-clockSize, 0);
  }
  pop();

  push();
  for (j = 0; j < 60; j++) {
    rotate(6);

    if (obj.seconds_until_alarm < 0) {
      stroke(clockColour);

    } else if (obj.seconds_until_alarm == 0) {

      if (obj.seconds % 2 === 0) {
        stroke(clockColour);

      } else {
        stroke(clockColourAlarm);

      }
    } else {
      stroke(clockColour);

    }

    point(-clockSize / minutesScale, 0);
  }
  pop();

  push();
  for (k = 0; k < 12; k++) {
    rotate(30);

    if (obj.seconds_until_alarm < 0) {
      stroke(clockColour);

    } else if (obj.seconds_until_alarm == 0) {

      if (obj.seconds % 2 === 0) {
        stroke(clockColour);

      } else {
        stroke(clockColourAlarm);

      }
    } else {
      stroke(clockColour);

    }

    point(-clockSize / hoursScale, 0);
  }
  pop();

  // ____________________ hands / numbers ____________________ 
  strokeWeight(1);
  textAlign(CENTER);

  push();
  
  if (obj.seconds_until_alarm < 0) {
    fill(clockColour);
    stroke(clockColour);

  } else if (obj.seconds_until_alarm == 0) {

    if (obj.seconds % 2 === 0) {
      fill(clockColour);
      stroke(clockColour);

    } else {
      fill(clockColourAlarm);
      stroke(clockColourAlarm);

    }
  } else {
    fill(clockColour);
    stroke(clockColour);

  }

  rotate(6 * obj.seconds);
  textSize(clockSize / 12);
  text(secondsPadded, 0, -clockSize / 10 - clockSize);
  rotate(90);
  // line(-clockSize, 0, clockSize, 0);
  ellipse(-clockSize, 0, clockSize / 30, clockSize / 30);
  pop();


  push();

  if (obj.seconds_until_alarm < 0) {
    fill(clockColour);
    stroke(clockColour);

  } else if (obj.seconds_until_alarm == 0) {

    if (obj.seconds % 2 === 0) {
      fill(clockColour);
      stroke(clockColour);

    } else {
      fill(clockColourAlarm);
      stroke(clockColourAlarm);

    }
  } else {
    fill(clockColour);
    stroke(clockColour);

  }

  rotate(6 * obj.minutes);
  textSize(clockSize / 12)
  text(minutesPadded, 0, -clockSize / 10 - clockSize / minutesScale);
  rotate(90);
  line(-clockSize / minutesScale, 0, clockSize / minutesScale, 0);
  pop();


  push();

  if (obj.seconds_until_alarm < 0) {
    fill(clockColour);
    stroke(clockColour);

  } else if (obj.seconds_until_alarm == 0) {

    if (obj.seconds % 2 === 0) {
      fill(clockColour);
      stroke(clockColour);

    } else {
      fill(clockColourAlarm);
      stroke(clockColourAlarm);

    }
  } else {
    fill(clockColour);
    stroke(clockColour);

  }

  rotate(30 * obj.hours);
  textSize(clockSize / 12)

  if (obj.hours % 12 === 0) {
    text(12, 0, -clockSize / 10 - clockSize / hoursScale);

  } else {
    text(obj.hours % 12, 0, -clockSize / 10 - clockSize / hoursScale);

  }

  rotate(90);
  line(-clockSize / hoursScale, 0, clockSize / hoursScale, 0);
  pop();
}