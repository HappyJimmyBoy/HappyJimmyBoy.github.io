var myChart;
$(function() {
	myChart = new FusionCharts({
		"type": "msbar2d",
		"width": "800",
		"height": "600",
	});
	myChart.setJSONUrl("../json/mscolumn-bar.json");
	myChart.render('chart');

	$("#changebar").click(function() {
		if (myChart.chartType() == "msbar2d") {
			myChart.chartType("msbar3d");

		} else {
			myChart.chartType("msbar2d");

		}
	})

	$("#changecolumn").click(function() {
		if (myChart.chartType() != "mscolumn2d") {
			myChart.chartType("mscolumn2d");
		} else {
			myChart.chartType("mscolumn3d");
		}
	})
	$("#btn").click(function() {
		myChart.setJSONUrl("../json/testmscolumn-bar.json");
		myChart.render('chart');

	})
	$("#return").click(function(){
		window.location.href = "../index.html"
	})

})