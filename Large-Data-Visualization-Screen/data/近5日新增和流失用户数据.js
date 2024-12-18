$.get('../JSON数据/近5日新增和流失用户数据.json').done(function(result) {
    var mychart = echarts.init(document.getElementById("crq_3"))
    mychart.hideLoading(),
        mychart.setOption({
            title: {
                text: '近5日新增和流失用户数据'
            },
            legend: {
                data: result.类型,
                left: 300
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: result.日期
            },
            series: [{
                name: '新增人数',
                type: 'bar',
                data: result.新增人数
            }, {
                name: '流失人数',
                type: 'bar',
                data: result.流失人数
            }],
        })
    mychart.hideLoading()
})