$(function() {
	var previousFrame;
	var translation;
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
			var cir = document.getElementById("cir");
			x = 1440 * normalized[0];
			y = 900 * (1 - normalized[1]);
			cir.style.top = y + "px";
			cir.style.left = x + "px";

		}
		//刷新和返回首页
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

		//右移动
		if (frame.hands.length == 1) {
			previousFrame = controller.frame(30);
			translation = frame.translation(previousFrame);

			if (translation[0] > 80 && frame.hands[0].palmPosition[0] > 0) {
				$(function() {
					option.dataZoom[0].end += 1;
					myChart.setOption(option);
					//					alert("right");

				})
			}
		}
		//左移动
		if (frame.hands.length == 1) {
			previousFrame = controller.frame(30);
			translation = frame.translation(previousFrame);
			if (translation[0] < 0 && translation[0] > -200 && frame.hands[0].palmPosition[0] < 0) {
				$(function() {
					option.dataZoom[0].start -= 1;
					myChart.setOption(option);
					//					alert("left");
				})
			}
		}
		//左上
		if (frame.hands.length == 1) {
			previousFrame = controller.frame(30);
			translation = frame.translation(previousFrame);
			if (translation[1] > 100 && frame.hands[0].palmPosition[1] > 50) {
				$(function() {
					option.dataZoom[0].start += 1;
					myChart.setOption(option);
				})
			}
		}
		//右下
		if (frame.hands.length == 1) {
			previousFrame = controller.frame(20);
			translation = frame.translation(previousFrame);
			if (translation[1] < -100) {
				$(function() {
					option.dataZoom[0].end -= 1;
					myChart.setOption(option);
				})
			}
		}

//		if (frame.hands.length == 1) {
//			previousFrame = controller.frame(20);
//			translation = frame.translation(previousFrame);
//			if (translation[2] < -100 && frame.hands[0].palmPosition[2] < 0) {
//
//				option.series[0].type = "bar";
//				option.series[1].type = "bar";
//
//				myChart.setOption(option);
//
//			}
//		}

	})
})