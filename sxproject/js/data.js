//获取表格中的数据
function getValue(id) {
	return document.getElementById(id).value;

}
//把数据存入localstorage
function localSet(key, value) {
	localStorage.setItem(key, value);
}

window.onload = function() {
	//给确定按钮添加事件，存放数据进入localstorage
	document.getElementById("bindData").addEventListener("click", function() {
		//把数据的数据映射到1--550之间，原理：start2+(stop2-start2)*(value-start1)/(stop1-start1)
		localSet("min", getValue("min"));
		localSet("max", getValue("max"));
		//x ,y, z 分别代表的意义
		localSet("X", getValue("xaxis"));
		localSet("Y", getValue("yaxis"));
		localSet("Z", getValue("zaxis"));

		localSet("y11", getValue("num11"));
		localSet("y12", getValue("num12"));
		localSet("y13", getValue("num13"));
		localSet("y14", getValue("num14"));
		localSet("y15", getValue("num15"));

		localSet("y21", getValue("num21"));
		localSet("y22", getValue("num22"));
		localSet("y23", getValue("num23"));
		localSet("y24", getValue("num24"));
		localSet("y25", getValue("num25"));

		localSet("y31", getValue("num31"));
		localSet("y32", getValue("num32"));
		localSet("y33", getValue("num33"));
		localSet("y34", getValue("num34"));
		localSet("y35", getValue("num35"));

		localSet("y41", getValue("num41"));
		localSet("y42", getValue("num42"));
		localSet("y43", getValue("num43"));
		localSet("y44", getValue("num44"));
		localSet("y45", getValue("num45"));

		localSet("y51", getValue("num51"));
		localSet("y52", getValue("num52"));
		localSet("y53", getValue("num53"));
		localSet("y54", getValue("num54"));
		localSet("y55", getValue("num55"));

	});
	(function() {
		localSet("min", getValue("min"));
		localSet("max", getValue("max"));
		//x ,y, z 分别代表的意义
		localSet("X", getValue("xaxis"));
		localSet("Y", getValue("yaxis"));
		localSet("Z", getValue("zaxis"));

		localSet("y11", getValue("num11"));
		localSet("y12", getValue("num12"));
		localSet("y13", getValue("num13"));
		localSet("y14", getValue("num14"));
		localSet("y15", getValue("num15"));

		localSet("y21", getValue("num21"));
		localSet("y22", getValue("num22"));
		localSet("y23", getValue("num23"));
		localSet("y24", getValue("num24"));
		localSet("y25", getValue("num25"));

		localSet("y31", getValue("num31"));
		localSet("y32", getValue("num32"));
		localSet("y33", getValue("num33"));
		localSet("y34", getValue("num34"));
		localSet("y35", getValue("num35"));

		localSet("y41", getValue("num41"));
		localSet("y42", getValue("num42"));
		localSet("y43", getValue("num43"));
		localSet("y44", getValue("num44"));
		localSet("y45", getValue("num45"));

		localSet("y51", getValue("num51"));
		localSet("y52", getValue("num52"));
		localSet("y53", getValue("num53"));
		localSet("y54", getValue("num54"));
		localSet("y55", getValue("num55"));
	})();

}
//设定x ,y ,z 轴的各个坐标
$(function() {
	(function() {
		localSet("x1", $("td .x1").val());
		localSet("x2", $("td .x2").val());
		localSet("x3", $("td .x3").val());
		localSet("x4", $("td .x4").val());
		localSet("x5", $("td .x5").val());

		localSet("y1", $("td .y1").val());
		localSet("y2", $("td .y2").val());
		localSet("y3", $("td .y3").val());
		localSet("y4", $("td .y4").val());
		localSet("y5", $("td .y5").val());

		localSet("z1", $("td .z1").val());
		localSet("z2", $("td .z2").val());
		localSet("z3", $("td .z3").val());
		localSet("z4", $("td .z4").val());
		localSet("z5", $("td .z5").val());
	})();
	$("#bindData").on("click", function() {
		localSet("x1", $("td .x1").val());
		localSet("x2", $("td .x2").val());
		localSet("x3", $("td .x3").val());
		localSet("x4", $("td .x4").val());
		localSet("x5", $("td .x5").val());

		localSet("y1", $("td .y1").val());
		localSet("y2", $("td .y2").val());
		localSet("y3", $("td .y3").val());
		localSet("y4", $("td .y4").val());
		localSet("y5", $("td .y5").val());

		localSet("z1", $("td .z1").val());
		localSet("z2", $("td .z2").val());
		localSet("z3", $("td .z3").val());
		localSet("z4", $("td .z4").val());
		localSet("z5", $("td .z5").val());

	})

})