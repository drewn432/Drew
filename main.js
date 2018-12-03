function setup() {
    createCanvas(640, 480);
}

function draw() {
    background('#FFFAED');
    var x = mouseX;
    var y = mouseY;
    
    //earLeft
    noStroke();
    fill('#FFFAFA');
    push();
    translate(x+50, y-80);
    ellipse(0, 0, 52, 200);
    pop();
    
    //earRight
    fill('#FFFAFA');
    push();
    translate(x-50, y-80);
    ellipse(0, 0, 52, 200);
    pop();
    
    //earINNERLeft
    fill('#EFB8D2');
    push();
    translate(x+50, y-80);
    ellipse(0, 0, 25, 150);
    pop();
    
    //earINNERRight
    fill('#EFB8D2');
    push();
    translate(x-50, y-80);
    ellipse(0, 0, 25, 150);
    pop();
    
    //face
    noStroke();
    fill('#FFFFFF');
    ellipse(x, y, 200, 200);
    
    //nose
    fill('#EFB8D2');
    triangle(x-20, y, x+20, y, x+0, y+20);
    
    // eyeLeft
    fill('#FFFFFF');
    ellipse(x+42, y-26, 64, 64);
    
    //pupilLeft
    fill('#7FC35E');
    ellipse(x+42, y-26, 30, 30);
    
    //eyeRight
    fill('#FFFFFF');
    ellipse(x-42, y-26, 64, 64);
    
    //pupilRight 
    fill('#7FC35E');
    ellipse(x-42, y-26, 30, 30);
    
    //mouth
    fill('#EE82EE');
    arc( x, y+25, 80, 80, 0, PI, CHORD);
    
}
