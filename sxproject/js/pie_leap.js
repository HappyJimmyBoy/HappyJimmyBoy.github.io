$(function() {
	var previousFrame;
	var translation;
	var i = 0;
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
		//点击变换
		if (frame.hands.length == 1) {
			previousFrame = controller.frame(20);
			translation = frame.translation(previousFrame);
			if (translation[2] < -100 && frame.hands[0].palmPosition[2] < 0) {

				option.roseType = 'radius';
				myChart.setOption(option);

			}
		}
		//去掉一部分
		if (frame.hands.length > 0) {

			frame.gestures.forEach(function(gesture) {

				switch (gesture.type) {
					case "swipe":
						if (gesture.state == "stop") {
							var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
							//Classify as right-left or up-down
							if (isHorizontal) {
								if (gesture.direction[0] > 0) {

								} else {

									if (i < dat.data.length) {
										dat.data[i].value = '0';
										dat.data[i].name = " ";
										i++;
									}

									option.series[0].data = dat.data;
									myChart.setOption(option);

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
								window.location.reload();
							} else {
								window.location.href = "../index.html";
							}
						}
						break;

					case "default":
						break;

				}
			})
		}

	})
})