
var plantCap = [{
    name: '违纪记分',
    value: '41分'
}, {
    name: '纠纷当事人',
    value: '17分'
}, {
    name: '投诉记分',
    value: '22分'
}, {
    name: '智能记分',
    value: '19分'
}, {
    name: '违章制度',
    value: '11分'
}, {
    name: '问题',
    value: '0分'
}, {
    name: '访问',
    value: '11分'
}];

var datalist = [{
    offset: [50, 50],
    symbolSize: 120,
    opacity: .95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#29c0fb'
    }, {
        offset: 1,
        color: '#2dc5b9'
    }]),
}, {
    offset: [38, 70],
    symbolSize: 95,
    opacity: .95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#35d17e'
    }, {
        offset: 1,
        color: '#49ddb2'
    }]),
}, {
    offset: [23, 43],
    symbolSize: 90,
    opacity: .95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#e5d273'
    }, {
        offset: 1,
        color: '#e4a37f'
    }]),
}, {
    offset: [68, 40],
    symbolSize: 90,
    opacity: .95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#277aec'
    }, {
        offset: 1,
        color: '#57c5ec'
    }]),
}, {
    offset: [60, 20],
    symbolSize: 65,
    opacity: .95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#e54948'
    }, {
        offset: 1,
        color: '#f08456'
    }]),
}, {
    offset: [56, 15],
    symbolSize: 68,
    opacity: .7,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#11c46e'
    }, {
        offset: 1,
        color: '#f08456'
    }]),
}, {
    offset: [65, 75],
    symbolSize: 65,
    opacity: .68,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#ff4141'
    }, {
        offset: 1,
        color: '#ff8989'
    }]),
}];
var datas = [];
for (var i = 0; i < plantCap.length; i++) {
    var item = plantCap[i];
    var itemToStyle = datalist[i];
    datas.push({
        name: item.name+'\n'+item.value,
        value: itemToStyle.offset,
        symbolSize: itemToStyle.symbolSize,
        label: {
            normal: {
                textStyle: {
                    fontSize: 13,
                    lineHeight: 17,
                }
            }
        },
        itemStyle: {
            normal: {
                color: itemToStyle.color,
                opacity: itemToStyle.opacity
            }
        },
    })
}
option = {
    backgroundColor: '#20203e',
    grid: {
        show: false,
        top: 10,
        bottom: 10
    },
    xAxis: [{
        gridIndex: 0,
        type: 'value',
        show: false,
        min: 0,
        max: 100,
        nameLocation: 'middle',
        nameGap: 5
    }],
    yAxis: [{
        gridIndex: 0,
        min: 0,
        show: false,
        max: 100,
        nameLocation: 'middle',
        nameGap: 30
    }],
    series: [{
        type: 'scatter',
        symbol: 'circle',
        symbolSize: 120,
        label: {
            normal: {
                show: true,
                formatter: '{b}',
                color: '#fff',
                textStyle: {
                    fontSize: '20'
                }
            },
        },
        itemStyle: {
            normal: {
                color: '#00acea'
            }
        },
        data: datas
    }]
};
