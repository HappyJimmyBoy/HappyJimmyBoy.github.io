//存放生成三维柱状图的高度
var num = [
	[],
	[],
	[],
	[],
	[]
];
//存放二维柱状图的高度
var num1 = [];
//控制行，列
var m = 0,
	n = 0;
//三维坐标的各个坐标值
var x1, x2, x3, x4, x5;
var y1, y2, y3, y4, y5;
var z1, z2, z3, z4, z5;
//范围
var min, max;
//各个轴的意义
var X1, Y1, X1;
//二维坐标轴的值
var xAxis, xAxis1, xAxis2, xAxis3, xAxis4, xAxis5;
var yAxis, yAxis1, yAxis2, yAxis3, yAxis4, yAxis5;
//转化范围
num[0][0] = change(localGet("y11"), localGet("min"), localGet("max"));
num[0][1] = change(localGet("y12"), localGet("min"), localGet("max"));
num[0][2] = change(localGet("y13"), localGet("min"), localGet("max"));
num[0][3] = change(localGet("y14"), localGet("min"), localGet("max"));
num[0][4] = change(localGet("y15"), localGet("min"), localGet("max"));

num[1][0] = change(localGet("y21"), localGet("min"), localGet("max"));
num[1][1] = change(localGet("y22"), localGet("min"), localGet("max"));
num[1][2] = change(localGet("y23"), localGet("min"), localGet("max"));
num[1][3] = change(localGet("y24"), localGet("min"), localGet("max"));
num[1][4] = change(localGet("y25"), localGet("min"), localGet("max"));

num[2][0] = change(localGet("y31"), localGet("min"), localGet("max"));
num[2][1] = change(localGet("y32"), localGet("min"), localGet("max"));
num[2][2] = change(localGet("y33"), localGet("min"), localGet("max"));
num[2][3] = change(localGet("y34"), localGet("min"), localGet("max"));
num[2][4] = change(localGet("y35"), localGet("min"), localGet("max"));

num[3][0] = change(localGet("y41"), localGet("min"), localGet("max"));
num[3][1] = change(localGet("y42"), localGet("min"), localGet("max"));
num[3][2] = change(localGet("y43"), localGet("min"), localGet("max"));
num[3][3] = change(localGet("y44"), localGet("min"), localGet("max"));
num[3][4] = change(localGet("y45"), localGet("min"), localGet("max"));

num[4][0] = change(localGet("y51"), localGet("min"), localGet("max"));
num[4][1] = change(localGet("y52"), localGet("min"), localGet("max"));
num[4][2] = change(localGet("y53"), localGet("min"), localGet("max"));
num[4][3] = change(localGet("y54"), localGet("min"), localGet("max"));
num[4][4] = change(localGet("y55"), localGet("min"), localGet("max"));

axisValue();
//从 localstorage 中取出值
function localGet(key) {
	return localStorage.getItem(key);
}
//转换原理
function change(value, start, stop) {
	return 550 * (value - start) / (stop - start);
}
//赋值给坐标
function axisValue() {
	X1 = localGet("X") + "";
	Y1 = localGet("Y") + "";
	Z1 = localGet("Z") + "";

	x1 = localGet("x1");
	x2 = localGet("x2");
	x3 = localGet("x3");
	x4 = localGet("x4");
	x5 = localGet("x5");

	y1 = localGet("y1");
	y2 = localGet("y2");
	y3 = localGet("y3");
	y4 = localGet("y4");
	y5 = localGet("y5");

	z1 = localGet("z1");
	z2 = localGet("z2");
	z3 = localGet("z3");
	z4 = localGet("z4");
	z5 = localGet("z5");
}
//画三维柱状图
function show1() {

	var processingInstance;

	if (!processingInstance) {
		processingInstance = Processing.getInstanceById('canvas');
	}
	processingInstance.fill( 0, 0, 0);
	processingInstance.pushMatrix();

	processingInstance.translate(90, -num[0][0] / 2, -10);
	processingInstance.box(30, num[0][0], 30);

	processingInstance.translate(100, -(num[0][1] - num[0][0]) / 2, 0);
	processingInstance.box(30, num[0][1], 30);

	processingInstance.translate(100, -(num[0][2] - num[0][1]) / 2, 0);
	processingInstance.box(30, num[0][2], 30);

	processingInstance.translate(100, -(num[0][3] - num[0][2]) / 2, 0);
	processingInstance.box(30, num[0][3], 30);

	processingInstance.translate(100, -(num[0][4] - num[0][3]) / 2, 0);
	processingInstance.box(30, num[0][4], 30);

	processingInstance.popMatrix();
}

function show2() {

	var processingInstance;

	if (!processingInstance) {
		processingInstance = Processing.getInstanceById('canvas');
	}
	processingInstance.fill( 0, 0, 0);
	processingInstance.pushMatrix();
	processingInstance.translate(0, 0, -100);

	processingInstance.translate(90, -num[1][0] / 2, 0);
	processingInstance.box(30, num[1][0], 30);

	processingInstance.translate(100, -(num[1][1] - num[1][0]) / 2, 0);
	processingInstance.box(30, num[1][1], 30);

	processingInstance.translate(100, -(num[1][2] - num[1][1]) / 2, 0);
	processingInstance.box(30, num[1][2], 30);

	processingInstance.translate(100, -(num[1][3] - num[1][2]) / 2, 0);
	processingInstance.box(30, num[1][3], 30);

	processingInstance.translate(100, -(num[1][4] - num[1][3]) / 2, 0);
	processingInstance.box(30, num[1][4], 30);

	processingInstance.popMatrix();
}

function show3() {

	var processingInstance;

	if (!processingInstance) {
		processingInstance = Processing.getInstanceById('canvas');
	}
	processingInstance.fill( 0, 0, 0);
	processingInstance.pushMatrix();
	processingInstance.translate(0, 0, -200);

	processingInstance.translate(90, -num[2][0] / 2, 0);
	processingInstance.box(30, num[2][0], 30);

	processingInstance.translate(100, -(num[2][1] - num[2][0]) / 2, 0);
	processingInstance.box(30, num[2][1], 30);

	processingInstance.translate(100, -(num[2][2] - num[2][1]) / 2, 0);
	processingInstance.box(30, num[2][2], 30);

	processingInstance.translate(100, -(num[2][3] - num[2][2]) / 2, 0);
	processingInstance.box(30, num[2][3], 30);

	processingInstance.translate(100, -(num[2][4] - num[2][3]) / 2, 0);
	processingInstance.box(30, num[2][4], 30);

	processingInstance.popMatrix();
}

function show4() {

	var processingInstance;

	if (!processingInstance) {
		processingInstance = Processing.getInstanceById('canvas');
	}
	processingInstance.fill( 0, 0, 0);
	processingInstance.pushMatrix();
	processingInstance.translate(0, 0, -300);

	processingInstance.translate(90, -num[3][0] / 2, 0);
	processingInstance.box(30, num[3][0], 30);

	processingInstance.translate(100, -(num[3][1] - num[3][0]) / 2, 0);
	processingInstance.box(30, num[3][1], 30);

	processingInstance.translate(100, -(num[3][2] - num[3][1]) / 2, 0);
	processingInstance.box(30, num[3][2], 30);

	processingInstance.translate(100, -(num[3][3] - num[3][2]) / 2, 0);
	processingInstance.box(30, num[3][3], 30);

	processingInstance.translate(100, -(num[3][4] - num[3][3]) / 2, 0);
	processingInstance.box(30, num[3][4], 30);

	processingInstance.popMatrix();
}

function show5() {

	var processingInstance;

	if (!processingInstance) {
		processingInstance = Processing.getInstanceById('canvas');
	}
	processingInstance.fill( 0, 0, 0);
	processingInstance.pushMatrix();
	processingInstance.translate(0, 0, -400);

	processingInstance.translate(90, -num[4][0] / 2, 0);
	processingInstance.box(30, num[4][0], 30);

	processingInstance.translate(100, -(num[4][1] - num[4][0]) / 2, 0);
	processingInstance.box(30, num[4][1], 30);

	processingInstance.translate(100, -(num[4][2] - num[4][1]) / 2, 0);
	processingInstance.box(30, num[4][2], 30);

	processingInstance.translate(100, -(num[4][3] - num[4][2]) / 2, 0);
	processingInstance.box(30, num[4][3], 30);

	processingInstance.translate(100, -(num[4][4] - num[4][3]) / 2, 0);
	processingInstance.box(30, num[4][4], 30);

	processingInstance.popMatrix();
}
//画二维柱状图
function myRect(num1) {
	var processingInstance1;
	if (!processingInstance1) {
		processingInstance1 = Processing.getInstanceById('canvas1');
	}
	processingInstance1.background(120, 150, 111);
//	processingInstance1.fill( 0, 0, 0);
//	processingInstance1.line(0, 0, 550, 0);
//	processingInstance1.line(540, -10, 550, 0);
//	processingInstance1.line(540, 10, 550, 0);
//	processingInstance1.text(xAxis1, 70, 20);
//	processingInstance1.text(xAxis2, 170, 20);
//	processingInstance1.text(xAxis3, 270, 20);
//	processingInstance1.text(xAxis4, 370, 20);
//	processingInstance1.text(xAxis5, 470, 20);
//	processingInstance1.text(xAxis, 550, -20);
//
//	processingInstance1.line(0, 0, 0, -550);
//	processingInstance1.line(-10, -540, 0, -550);
//	processingInstance1.line(10, -540, 0, -550);
//	processingInstance1.text(yAxis1, 10, -100);
//	processingInstance1.text(yAxis2, 10, -200);
//	processingInstance1.text(yAxis3, 10, -300);
//	processingInstance1.text(yAxis4, 10, -400);
//	processingInstance1.text(yAxis5, 10, -500);
//	processingInstance1.text(yAxis, 0, -560);

	processingInstance1.rect(80, 0, 20, -num1[0]);
	processingInstance1.text(Math.ceil(num1[0]), 80, -num1[0] - 10);
	processingInstance1.rect(180, 0, 20, -num1[1]);
	processingInstance1.text(Math.ceil(num1[1]), 180, -num1[1] - 10);
	processingInstance1.rect(280, 0, 20, -num1[2]);
	processingInstance1.text(Math.ceil(num1[2]), 280, -num1[2] - 10);
	processingInstance1.rect(380, 0, 20, -num1[3]);
	processingInstance1.text(Math.ceil(num1[3]), 380, -num1[3] - 10);
	processingInstance1.rect(480, 0, 20, -num1[4]);
	processingInstance1.text(Math.ceil(num1[4]), 480, -num1[4] - 10);

}

window.onload = function() {
	//控制哪一个面生成二维 m,n
	document.getElementById("one").addEventListener("click", function() {
		for (var i = 0; i < num[m].length; i++) {
			num1[i] = num[m][i]
			num[m][i] = 0;

		}
		m++;
		var processingInstance;
		if (!processingInstance) {
			processingInstance = Processing.getInstanceById('canvas');
		}
		xAxis = localGet("X");
		xAxis1 = localGet("x1");
		xAxis2 = localGet("x2");
		xAxis3 = localGet("x3");
		xAxis4 = localGet("x4");
		xAxis5 = localGet("x5");

		yAxis = localGet("Y");
		yAxis1 = localGet("y1");
		yAxis2 = localGet("y2");
		yAxis3 = localGet("y3");
		yAxis4 = localGet("y4");
		yAxis5 = localGet("y5");
		myRect(num1);
		twoCor();
		processingInstance.redraw1();

	})

	document.getElementById("two").addEventListener("click", function() {
		for (var i = 0; i < 5; i++) {
			num1[i] = num[i][n]
			num[i][n] = 0;

		}
		n++;
		var processingInstance;
		if (!processingInstance) {
			processingInstance = Processing.getInstanceById('canvas');
		}

		xAxis = localGet("Z");
		xAxis1 = localGet("z1");
		xAxis2 = localGet("z2");
		xAxis3 = localGet("z3");
		xAxis4 = localGet("z4");
		xAxis5 = localGet("z5");

		yAxis = localGet("Y");
		yAxis1 = localGet("y1");
		yAxis2 = localGet("y2");
		yAxis3 = localGet("y3");
		yAxis4 = localGet("y4");
		yAxis5 = localGet("y5");
		myRect(num1);
		twoCor();
		processingInstance.redraw1();

	})

}