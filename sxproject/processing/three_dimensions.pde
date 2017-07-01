float lr = 0;
float big = 1.5;
float easing = 0.05;

void setup() {
	size(800, 700, P3D);
	lights();
	smooth();
	noLoop();
	textSize(25);
}

void draw() {
	stroke(20, 240, 10);
	background(120, 130, 100);
	
	pushMatrix();
	translate(400,600,-1200);
	rotateY(lr);
	pushMatrix();
	translate(-400, 110, 0);
	scale(big);

	line(0, 0, 0, 550, 0, 0);
	line(530, 0, -10, 550, 0, 0);
	line(530, 0, 10, 550, 0, 0);
	text(X1, 550, 0, 30);
	text(x1, 80, 10, 30);
	text(x2, 180, 10, 30);
	text(x3, 280, 10, 30);
	text(x4, 380, 10, 30);
	text(x5, 480, 10, 30);

	line(0, 0, 0, 0, -550, 0);
	line(-10, -530, 0, 0, -550, 0);
	line(10, -530, -0, 0, -550, 0);
	text(y1, 30, -100, 0);
	line(0,-100,0,10,-100,0);
	text(y2, 30, -200, 0);
	line(0,-200,0,10,-200,0);
	text(y3, 30, -300, 0);
	line(0,-300,0,10,-300,0);
	text(y4, 30, -400, 0);
	line(0,-400,0,10,-400,0);
	text(Y1, 30, -565, 0);
	line(0,-490,0,10,-490,0);
	text(y5, 30, -490, 0);

	line(0, 0, 0, 0, 0, -550);
	line(-10, 0, -530, 0, 0, -550);
	line(10, 0, -530, 0, 0, -550);
	text(z1, -40, 0, 0);
	line(0,0,0,10,0,0);
	text(z2, -40, 0, -100);
	line(0,0,-100,10,0,-100);
	text(z3, -40, 0, -200);
	line(0,0,-200,10,0,-200);
	text(z4, -40, 0, -300);
	line(0,0,-300,10,0,-300);
	text(Z1, -40, 0, -565);
	text(z5, -40, 0, -400);
	line(0,0,-400,10,0,-400);

	show1();
	show2();
	show3();
	show4();
	show5();
	
	popMatrix();
 	popMatrix();

}
void nrotating() {

	lr += 0.05;
	redraw();
}

void nbigging() {

	if (big < 2) {
		big += 0.01;
	}
	redraw();

}
void protating() {
	lr -= 0.05;
	redraw();
}
void pbigging() {
	if (big > 0.5) {
		big -= 0.01;
	}

	redraw();

}
void keyPressed() {
	if (keyPressed == true) {
		if (keyCode == UP) {
			if (big <1.8) {
				big += 0.01;
			}
			redraw();

		}
		if (keyCode == DOWN) {
			if (big > 0.5) {
				big -= .01;
			}
			redraw();
		}

		if (keyCode == LEFT) {
			lr = lr - 0.1;
			redraw();
		}
		if (keyCode == RIGHT) {
			lr = lr + 0.1;
			redraw();
		}

	}

}

void redraw1() {
	redraw();

}





