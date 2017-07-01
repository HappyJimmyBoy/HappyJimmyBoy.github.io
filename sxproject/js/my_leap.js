//初始化对象
var controllerOptions = {
	host: '127.0.0.1',
	port: 6437,
	enableGestures: true,
	frameEventName: 'animationFrame',
	useAllPlugins: true
};
var processingInstance;
var processingInstance1;

var controller = Leap.loop(controllerOptions, function(frame) {
	var previousFrame;
	var translation;
	var scale;
	var hand;
	var cir = document.getElementById("cir");
	if (frame.fingers.length > 0) {

		var finger = frame.fingers[1];
		var position = finger.stabilizedTipPosition;
		var normalized = frame.interactionBox.normalizePoint(position);
		var x = 1440 * normalized[0];
		var y = 900 * (1 - normalized[1]);

		cir.style.top = y + "px";
		cir.style.left = x + "px";

	}
	if (frame.hands.length == 2) {
		var hand1 = frame.hands[0];
		var hand2 = frame.hands[1];
		var dis = Leap.vec3.dist(hand1.palmPosition, hand2.palmPosition);
		if (!processingInstance1) {

			processingInstance1 = Processing.getInstanceById('canvas1');

		}

		if (dis > 200) {
			processingInstance1.big()
		}
		if (dis < 100) {
			processingInstance1.small()
		}
	}

	//	if (frame.hands.length > 0) {
	//		hand = frame.hands[0];
	//
	//		function handStateFromHistory(hand, historySamples) {
	//			if (!processingInstance1) {
	//
	//				processingInstance1 = Processing.getInstanceById('canvas1');
	//
	//			}
	//			var sum = 0
	//			for (var s = 0; s < historySamples; s++) {
	//				var oldHand = controller.frame(s).hand(hand.id)
	//				if (!oldHand.valid) break;
	//				sum += oldHand.grabStrength
	//			}
	//			var avg = sum / s;
	//			if (hand.grabStrength - avg < -0.3) {
	//				processingInstance1.big();
	//			};
	//			if (hand.grabStrength - avg > 0.3) {
	//				processingInstance1.small();
	//			};
	//
	//		}
	//		handStateFromHistory(hand, 30);
	//	}
	if (frame.hands.length == 1) {
		previousFrame = controller.frame(30);
		translation = frame.translation(previousFrame);
		if (translation[0] > 150 && frame.fingers[0].tipPosition[0] > 0) {
			switchSketchState(1);
		}
		if (translation[0] < -100 && frame.fingers[0].tipPosition[0] < 0) {
			switchSketchState(-1)
		}
	}

//	//缩放
//	function switchSketchState(choice) {
//
//		if (!processingInstance) {
//
//			processingInstance = Processing.getInstanceById('canvas');
//
//		}
//
//		if (choice == 1) {
//
//			processingInstance.nrotating();
//
//		}
//		if (choice == -1) {
//			processingInstance.protating();
//		}
//
//		if (choice == 2) {
//
//			processingInstance.nbigging();
//		}
//
//		if (choice == -2) {
//			processingInstance.pbigging();
//		}
//	}
	//生成二维
	if (frame.hands.length > 0) {

		frame.gestures.forEach(function(gesture) {

			switch (gesture.type) {
				case "swipe":
					
					if (gesture.state == "stop") {
						var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
						//Classify as right-left or up-down
						if (isHorizontal) {
							if (gesture.direction[0] > 0) {
								swipeDirection = "right";
							} else {
								swipeDirection = "left";
							}
						} else { //vertical
							if (gesture.direction[1] > 0) {						
								//上
								for (var i = 0; i < 5; i++) {
									num1[i] = num[i][n]
									num[i][n] = 0;

								}
								n++;
								var processingInstance;
								if (!processingInstance) {
									processingInstance = Processing.getInstanceById('canvas');
								}
								var processingInstance1;
								if (!processingInstance1) {
									processingInstance1 = Processing.getInstanceById('canvas1');
								}
								//二维坐标赋值
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
								processingInstance.redraw1();
								twoCor();

							} else {
								//								

								for (var i = 0; i < num[m].length; i++) {
									num1[i] = num[m][i]
									num[m][i] = 0;

								}
								if (m < 5) {
									m++;

								}
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
								processingInstance.redraw1();
								twoCor();

							}
						}
					}

					break;
				case "circle":
					if (gesture.state == "stop" && gesture.radius > 40) {
						var pointableID = gesture.pointableIds[0];
						var direction = frame.pointable(pointableID).direction;
						var dotProduct = Leap.vec3.dot(direction, gesture.normal);
						if (dotProduct > 0) {
							$(function() {
								window.location.reload();
							})
						} else {
							$(function() {
								window.location.href = "../index.html"
							})
						}
					}
					break;
				case "keyTap":
					//alert("hello");
				default:
					break;
			}
		})

	}

	if (frame.hands.length == 1) {
		previousFrame = controller.frame(30);
		scale = frame.scaleFactor(previousFrame);
		hand = frame.hands[0];
		if (hand.grabStrength == 1 && hand.pinchStrength == 1 && hand.confidence < 0.6) {
			switchSketchState(-2);
		}
		if (scale > 2) {
			switchSketchState(2);
		}
	}

});
controller.setBackground(true);
function twoCor(){
	var processingInstance1;
	if (!processingInstance1) {
		processingInstance1 = Processing.getInstanceById('canvas1');
	}
	processingInstance1.fill( 0, 0, 0);
	processingInstance1.line(0, 0, 550, 0);
	processingInstance1.line(540, -10, 550, 0);
	processingInstance1.line(540, 10, 550, 0);
	processingInstance1.text(xAxis1, 70, 20);
	processingInstance1.text(xAxis2, 170, 20);
	processingInstance1.text(xAxis3, 270, 20);
	processingInstance1.text(xAxis4, 370, 20);
	processingInstance1.text(xAxis5, 470, 20);
	processingInstance1.text(xAxis, 550, -20);

	processingInstance1.line(0, 0, 0, -550);
	processingInstance1.line(-10, -540, 0, -550);
	processingInstance1.line(10, -540, 0, -550);
	processingInstance1.text(yAxis1, 10, -100);
	processingInstance1.text(yAxis2, 10, -200);
	processingInstance1.text(yAxis3, 10, -300);
	processingInstance1.text(yAxis4, 10, -400);
	processingInstance1.text(yAxis5, 10, -500);
	processingInstance1.text(yAxis, 0, -560);
}

//缩放
	function switchSketchState(choice) {

		if (!processingInstance) {

			processingInstance = Processing.getInstanceById('canvas');

		}

		if (choice == 1) {

			processingInstance.nrotating();

		}
		if (choice == -1) {
			processingInstance.protating();
		}

		if (choice == 2) {

			processingInstance.nbigging();
		}

		if (choice == -2) {
			processingInstance.pbigging();
		}
	}