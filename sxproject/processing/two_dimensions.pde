int a = -300;
void setup() {
	size(595, 700, P3D);
	stroke(#73FF31);
  noFill();
  noLoop();
  textSize(25);
}

void draw(){
  translate(20,600,a);
  myRect(num1);
}
void small(){
	if(a>-500  ){
		a = a - 10;
	}
	redraw();
	twoCor();
	
}

void big() {
	if (a < 20) {
		a = a + 10;
	}
	
	redraw();
	twoCor();

}