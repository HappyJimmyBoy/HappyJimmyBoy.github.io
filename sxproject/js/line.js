var option;
var myChart;
$(function() {
	myChart = echarts.init(document.getElementById('main'));
	// 指定图表的配置项和数据
	option = {
		title: {
			text: '未来一周气温变化',
			subtext: '不一定准确'
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['最高气温', '最低气温']
		},
		
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				formatter: '{value} °C'
			}
		},
		series: [{
			name: '最高气温',
			type: 'line',
			data: [11, 11, 15, 13, 12, 13, 10],
			markPoint: {
				data: [{
					type: 'max',
					name: '最大值'
				}, {
					type: 'min',
					name: '最小值'
				}]
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		}, {
			name: '最低气温',
			type: 'line',
			data: [1, -2, 2, 5, 3, 2, 0],
			markPoint: {
				data: [{
					name: '周最低',
					value: -2,
					xAxis: 1,
					yAxis: -1.5
				}]
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		}],
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
		$.get('../json/line_data.json').done(function(data) {
			// 填入数据

			option = data;
			myChart.setOption(option);
		});
	})
	$("#return").click(function() {
		window.location.href = "../index.html"
	})
})