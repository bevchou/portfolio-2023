class manipulateText {
  constructor(array, x, y, xspeed, yspeed) {
    //pass to class
    this.array = array;
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    //internal variables
    this.angle = -PI / 7;
    this.angleSpeed = PI / 800;
    this.fontsize = 20;
  }
  tilt(ypos) {
    push();
    this.angle = move(this.angle, this.angleSpeed);
    this.angle = restart(this.angle, -PI / 6, PI / 6);
    //this.angleSpeed = bounce(this.angle, this.angleSpeed, -PI/6, PI/6);
    let spacing = width / (this.array.length - 1);
    shearX(this.angle);
    for (let i = 0; i < this.array.length; i++) {
      text(this.array[i], spacing * i, ypos);
    }
    pop();
  }
  scroll(textbox, scrollspeed) {
    push();
    translate(textbox.rectx, textbox.recty);
    this.yspeed = scrollspeed;
    this.y = move(this.y, this.yspeed);
    for (let i = 0; i < this.array.length; i++) {
      text(this.array[i], textbox.rectwidth / this.array.length * i, this.y);
    }
    this.y = restart(this.y, -textbox.rectheight, textbox.rectheight*1.5);
    pop();
  }
  boundVert(textbox) {
    push();
    translate(textbox.rectx, textbox.recty);
    fill(0);
    rect(0, 0, textbox.rectwidth, -textbox.rectheight*1.5);
    rect(0, textbox.rectheight, textbox.rectwidth, textbox.rectheight*1.5);
    pop();
  }

}



function bounce(pos, speed, min, max) {
  if (pos < min || pos > max) {
    speed *= -1;
  }
  return speed;
}

function restart(pos, min, max) {
  if (pos > max) {
    pos = min;
  }
  return pos;
}

function move(pos, speed) {
  pos += speed;
  return pos;
}
