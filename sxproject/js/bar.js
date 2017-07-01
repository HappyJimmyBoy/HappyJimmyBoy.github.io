var option;
var myChart;
$(function() {
	myChart = echarts.init(document.getElementById('main'));
	// 指定图表的配置项和数据
	option = {
		title: {
			x: 'center',
			y: 'top',
			text: '销售情况'
		},
		tooltip: {},
		legend: {
			x: 'center',
			y: '40',
			data: ['销售数量']
		},
		xAxis: {
			data: ["耐克", "羊毛衫", "雪纺衫", "裤子", "羊毛衫", "雪纺衫", "裤子", "羊毛衫", "雪纺衫", "裤子", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "Book", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "Book", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "Book", "羊毛衫", "雪纺衫", "裤子", "羊毛衫", "雪纺衫", "裤子", "羊毛衫", "雪纺衫", "裤子", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "Book", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "Book", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "Book", "羊毛衫", "雪纺衫", "裤子", "羊毛衫", "雪纺衫", "裤子", "羊毛衫", "雪纺衫", "裤子", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "Book", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "Book", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "Book"],

		},
		yAxis: {},
		series: [{
			name: '销售数量',
			type: 'bar',
			itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,100,200,0.8)'
                }
            },
			data: [5, 20, 36, 10, 10, 20, 20, 36, 10, 20, 36, 10, 20, 36, 10, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20, 20, 36, 10, 20, 36, 10, 20, 36, 10, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20, 20, 36, 10, 20, 36, 10, 20, 36, 10, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20]

		}
		],
		dataZoom: [{ // 这个dataZoom组件，默认控制x轴。
			type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
			start: 30, // 左边在 10% 的位置。
			end: 60 // 右边在 60% 的位置。
		}]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

})

$(function() {
	$("#btn").click(function() {
		$.get('../json/bar_data.json').done(function(data) {
			// 填入数据

			option = data;
			myChart.setOption(option);
		});
	})
	$("#return").click(function() {
		window.location.href = "../index.html"
	})
})