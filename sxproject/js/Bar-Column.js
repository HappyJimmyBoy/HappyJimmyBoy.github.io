var myChart;

$(function() {
	 myChart = new FusionCharts({
		"type": "bar2d",
		"width": "800",
		"height": "600"
	});
	myChart.setJSONUrl("../json/bar-column.json");
	myChart.render('chart');

	$("#changebar").click(function() {
		if (myChart.chartType() == "bar2d") {
			myChart.chartType("bar3d");
		
		} else {
			myChart.chartType("bar2d");
		
		}
	})
	
	$("#changecolumn").click(function(){
		if (myChart.chartType()!="column2d") {
			myChart.chartType("column2d");
		} else{
			myChart.chartType("column3d");			
		}
	})
	
	$("#btn").click(function(){
		myChart.setJSONUrl("../json/testbar2d.json");
	})
	$("#return").click(function(){
		window.location.href = "../index.html"
	})
	
})