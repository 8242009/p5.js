function preload(){
   
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,150,100,300,280);
    stroke(0, 128, 0);
    fill(0, 128, 0);
  rect(100, 50, 500, 30);
  rect(100, 410, 500, 30);
  rect(45, 50, 30, 400);
  rect(565, 50, 30, 400);
  stroke(255,0,0);
  fill(255,0,0);
  circle(60, 425, 100);
  circle(575, 425, 100);
    circle(60, 60, 100);
    circle(575, 60, 100);
}

function take_snapshot(){
    save('img.png');
}

