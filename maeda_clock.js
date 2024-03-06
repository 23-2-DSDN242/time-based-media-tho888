function draw_clock(obj) {
  angleMode(DEGREES)
  background(150);
  textAlign(CENTER, CENTER);
  translate(width / 2, height / 2);
  
  let scale = 120
  
  push();
  textSize(3 * scale);
  fill(0);
  rotate(360 / 12 * (obj.hours % 12));
  text(obj.hours % 12, 0, 0);
  pop();

  rotate(90);

  push();
  textSize(2.5 * scale);
  fill(255);
  rotate((360 / 60 * obj.minutes));
  text(obj.minutes, 0, 0);
  pop();

  push();
  textSize(1.5 * scale);
  fill(231, 0, 0);
  rotate((360 / 60 * obj.seconds));
  text(obj.seconds, 0, 0);
  pop();

  // ++ rotating millisecond dot
  // push();
  // fill(125);
  // noStroke();
  // rotate(90 + (360 / 1000 * obj.millis));
  // translate(0, scale)
  // rect(0, 0, 25, 25)
  // pop();
}