// 不同类型用户的人数
$.get("../JSON数据/不同支付方式用户人数.json").done(function(data) {
    var myChart = echarts.init(document.getElementById("crq_1"));
    myChart.setOption({
        color: ['purple', 'Olive', 'palevioletred'],
        backgroundColor: 'rgba(128,128,128,0.1)',
        //
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}人 占比:({d}%)'
        },
        title: {
            text: '不同支付方式用户人数',
            left: 'center'
        },
        legend: {
            orient: 'vertical',
            left: 22,
            top: 22,
            data: data.支付方式
        },
        series: [{
            name: '新增人数',
            type: 'pie',
            radius: ['45%', '75%'],
            center: ['50%', '55%'],
            data: data.data
        }],
    })
});