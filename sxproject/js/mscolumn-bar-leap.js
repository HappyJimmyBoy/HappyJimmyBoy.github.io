var left;
var down;
$(function() {
	var previousFrame;
	var translation;
	var right = 0;
	var left = 0;
	var x;
	var y;
	var cir = document.getElementById("cir");
	//初始化 leapmotion
	var controllerOptions = {
		host: '127.0.0.1',
		port: 6437,
		enableGestures: true,
		frameEventName: 'animationFrame',
		useAllPlugins: true
	};

	var controller = Leap.loop(controllerOptions, function(frame) {

		//显示跟踪手指位移
		if (frame.fingers.length > 0) {

			var finger = frame.fingers[1];
			var position = finger.stabilizedTipPosition;
			var normalized = frame.interactionBox.normalizePoint(position);
			x = 1440 * normalized[0];
			y = 900 * (1 - normalized[1]);
			cir.style.top = y + "px";
			cir.style.left = x + "px";

		}

		//左移动
		if (frame.hands.length == 1) {
			previousFrame = controller.frame(30);
			translation = frame.translation(previousFrame);
			if (translation[0] < 0 && translation[0] > -200 && frame.hands[0].palmPosition[0] < 0) {

				if (myChart.chartType() == "msbar2d") {
					myChart.chartType("msbar3d");

				} else {
					myChart.chartType("msbar2d");

				}
			}
		}

		//右下
		if (frame.hands.length == 1) {
			previousFrame = controller.frame(20);
			translation = frame.translation(previousFrame);
			if (translation[1] < -100) {
				if (myChart.chartType() != "mscolumn2d") {
					myChart.chartType("mscolumn2d");
				} else {
					myChart.chartType("mscolumn3d");
				}

			}
		}
		//画圆重绘和返回上一页
		for (var i = 0; i < frame.gestures.length; i++) {
			var gesture = frame.gestures[i];
			switch (gesture.type) {
				case "circle":
					if (gesture.state == "stop" && gesture.radius > 40) {
						var pointableID = gesture.pointableIds[0];
						var direction = frame.pointable(pointableID).direction;
						var dotProduct = Leap.vec3.dot(direction, gesture.normal);
						if (dotProduct > 0) {
							window.location.reload();
						} else {
							window.location.href = "../index.html";
						}
					}
					break;
				default:
					break;
			}
		}

	})

})