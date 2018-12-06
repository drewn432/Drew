var bn;
var feed = []; // an empty array
var numFood = 10;

var a = [1,2,3];

function setup() {
    createCanvas(740, 480);
    bn = new Bunny();

    // initializing 10 pieces of food
    for(var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background(0,255,0);
    bn.display();
    
    // display all the food
    for(var i = 0; i < numFood; i++) {
        feed[i].display();
    }
}

function mousePressed() {
    bn.eat();
}

function Food(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    
    this.display = function() {
        var foodSize = 50;
        fill(this.color);
        ellipse(this.x, this.y, foodSize, foodSize);
    }
}

function Bunny() {
    // instance variables
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;
    
    this.getDistance = function(other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    }
    
    this.eat = function() {
        for(var i = 0; i < numFood; i++){
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if(r1 + r2 > d) {
                console.log('hit');
            }
        }
    }
    
    this.display = function() {
        var x = mouseX;
        var y = mouseY;
    
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
}
