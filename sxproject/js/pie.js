var option;
var myChart;
var i = 0;
var dat;
$(function() {
	myChart = echarts.init(document.getElementById('main'));

	option = {
		backgroundColor: '#2c343c',
		title: {
			text: '某站点用户访问来源',
			left: 'center',
			top: 20,
			textStyle: {
				color: '#ccc'
			}
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			data: [{
				"value": 456,
				"name": '视频广告'
			}, {
				value: 274,
				name: '联盟广告'
			}, {
				value: 310,
				name: '邮件营销'
			}, {
				value: 335,
				name: '直接访问'
			}, {
				value: 400,
				name: '搜索引擎'
			}],

			label: {
				normal: {
					textStyle: {
						color: 'rgba(255, 255, 255, 0.3)'
					}
				}
			},
			labelLine: {
				normal: {
					lineStyle: {
						color: '#2C343C'
					}
				}
			},
			itemStyle: {
				normal: {
					shadowBlur: 200,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

	$("#click2").click(function() {
		$.get("../json/pie.json").done(function(da) {
			option.series[0].data = da.data;
			option.title.text = da.title.text;
			myChart.setOption(option);
			dat = da;

		})

	})
	$("#ccc").click(function() {
		dat.data[i].value = '0';
		dat.data[i].name = " ";
		if (i < dat.data.length) {
			i++;
		}

		option.series[0].data = dat.data;
		myChart.setOption(option);

	})

})

$(function() {
	$("#click").click(function() {
		if (option.roseType) {
			window.location.reload();
		} else {
			option.roseType = 'radius';
			myChart.setOption(option);

		}

	})
	$("#return").click(function() {
		window.location.href = "../index.html"
	})
})