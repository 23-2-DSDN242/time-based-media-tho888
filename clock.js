function draw_clock(obj) {

  // ____________________ setup & variables ____________________
  angleMode(DEGREES);
  colorMode(HSB);
  fill(255);
  textSize(10);
  noStroke();
  
  let clockSize = 210;
  let minutesScale = 1.75;
  let hoursScale = 3.5;

  let bgColour = 0;
  let bgColourAlarm = 75;
// add a map to change background colour gradually as timer counts down
// add more maps '' for seconds, hours and minutes

  let secondsColour = 50;
  let secondsColourAlarm = 10;
  let minutesColour = 70;
  let minutesColourAlarm = 30;
  let hoursColour = 90;
  let hoursColourAlarm = 50;

  if (obj.seconds_until_alarm < 0) {
    background(bgColour);

  } else if (obj.seconds_until_alarm > 0) {
    background(bgColourAlarm); // change this to the created map

  } else if (obj.seconds_until_alarm == 0) {
    if (obj.seconds % 2 === 0) {
      background(bgColour);

    } else {
      background(bgColourAlarm);
      
    }
  }

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
  strokeWeight(2);

  // ____________________ drawing circles ____________________ 
  push();
  for (i = 0; i < 60; i++) {
    rotate(6);

    if (obj.seconds_until_alarm < 0) {
      stroke(secondsColour);

    } else if (obj.seconds_until_alarm == 0) {

      if (obj.seconds % 2 === 0) {
        stroke(secondsColour);

      } else {
        stroke(secondsColourAlarm);

      }
    }

    point(-clockSize, 0);
  }
  pop();

  push();
  for (j = 0; j < 60; j++) {
    rotate(6);
 
    if (obj.seconds_until_alarm < 0) {
      stroke(minutesColour);

    } else if (obj.seconds_until_alarm == 0) {
    
      if (obj.seconds % 2 === 0) {
        stroke(minutesColour);

      } else {
        stroke(minutesColourAlarm);

      }
    }

    point(-clockSize / minutesScale, 0);
  }
  pop();

  push();
  for (k = 0; k < 12; k++) {
    rotate(30);

    if (obj.seconds_until_alarm < 0) {
      stroke(hoursColour);

    } else if (obj.seconds_until_alarm == 0) {
    
      if (obj.seconds % 2 === 0) {
        stroke(hoursColour);

      } else {
        stroke(hoursColourAlarm);

      }
    }

    point(-clockSize / hoursScale, 0);
  }
  pop();

  // ____________________ hands / numbers ____________________ 
  strokeWeight(1);
  textAlign(CENTER);

  push();
  rotate(6 * obj.seconds);
  
  if (obj.seconds_until_alarm < 0) {
    fill(secondsColour);
    stroke(secondsColour);

  } else if (obj.seconds_until_alarm == 0) {

    if (obj.seconds % 2 === 0) {
      fill(secondsColour);
      stroke(secondsColour);

    } else {
      fill(secondsColourAlarm);
      stroke(secondsColourAlarm);

    }
  }
  
  textSize(clockSize / 16)
  text(obj.seconds, 0, -clockSize / 10 - clockSize);
  rotate(90);
  line(-clockSize, 0, clockSize, 0);
  pop();


  push();
  rotate(6 * obj.minutes);

  if (obj.seconds_until_alarm < 0) {
    fill(minutesColour);
    stroke(minutesColour);

  } else if (obj.seconds_until_alarm == 0) {

    if (obj.seconds % 2 === 0) {
      fill(minutesColour);
      stroke(minutesColour);

    } else {
      fill(minutesColourAlarm);
      stroke(minutesColourAlarm);

    }
  }

  textSize(clockSize / 16)
  text(obj.minutes, 0, -clockSize / 10 - clockSize / minutesScale);
  rotate(90);
  line(-clockSize / minutesScale, 0, clockSize / minutesScale, 0);
  pop();
  

  push();
  rotate(30 * obj.hours);

  if (obj.seconds_until_alarm < 0) {
    fill(hoursColour);
    stroke(hoursColour);

  } else if (obj.seconds_until_alarm == 0) {

    if (obj.seconds % 2 === 0) {
      fill(hoursColour);
      stroke(hoursColour);

    } else {
      fill(hoursColourAlarm);
      stroke(hoursColourAlarm);

    }
  }

  textSize(clockSize / 16)
  text(obj.hours % 12, 0, -clockSize / 10 - clockSize / hoursScale);
  rotate(90);
  line(-clockSize / hoursScale, 0, clockSize / hoursScale, 0);
  pop();
}