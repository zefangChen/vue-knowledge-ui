// 水球图
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


//地图
option = {
    backgroundColor: '#030f24',
    legend: {
        show: false
    },
    tooltip: {
        show: true
    },
    geo: {
        map: 'china',
        aspectScale: 0.75,
        label: {
            emphasis: {
                show: false
            }
        },
        regions: [
            {
                name: "南海诸岛",
                value: 0,
                itemStyle: {
                    normal: {
                        opacity: 0,
                        label: {
                            show: false
                        }
                    }
                }
            }
        ],
        itemStyle: {
            normal: {
                borderColor: 'rgba(147, 235, 248, 0)',
                borderWidth: 0.5,
                areaColor: {
                    x: 1000,
                    y: 1000,
                    x2: 1000,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#69c5d8' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#126caf' // 50% 处的颜色
                    }],
                    global: true // 缺省为 false
                },
                opacity:1,
            },
            emphasis: {
                show:false,
                areaColor: '#69c5d8'
            }
        },
        z: 2
    },
    series: [{
        type: 'map',
        map: 'china',
        tooltip: {
            show: false
        },
        label: {
            emphasis: {
                show: false,
                color:'#fff'
            }
        },
        top: '9.7%',
        left: '10%',
        aspectScale: .75,
        roam: false,
        itemStyle: {
            normal: {
                borderColor: '#2cb3dd',
                borderWidth: 0.8,
                areaColor: {
                    type: 'linear-gradient',
                    x: 1000,
                    y: 600,
                    x2: 1000,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#274d68' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#09132c' // 50% 处的颜色
                    }],
                    global: true // 缺省为 false
                },
            },
            emphasis: {
                show:false,
                areaColor: '#274d62'
            }
        },
        zlevel: 1
    }]
};



// 地图
var zhongguo = "/asset/get/s/data-1562829675575-NZp9nSurz.json";
var hainan = "/asset/get/s/data-1528971693521-r18nZaybm.json";
var xizang = "/asset/get/s/data-1528970391616-BJeoh2JW7.json";
var zhejiang = "/asset/get/s/data-1528970380661-SkH93h1-m.json";
var yunnan = "/asset/get/s/data-1528970362114-r1MK321WQ.json";
var xinjiang = "/asset/get/s/data-1528970349852-H18u22kWX.json";
var tianjin = "/asset/get/s/data-1528970339987-Hk2wnh1ZX.json";
var sichuan = "/asset/get/s/data-1528970319531-Hy_8n3y-m.json";
var shanxi = "/asset/get/s/data-1528970298351-HyzB32JZ7.json";
var shangxi = "/asset/get/s/data-1528970273819-B1cmnnk-Q.json";
var shanghai = "/asset/get/s/data-1528970254015-HJLfhnyWX.json";
var shangdong = "/asset/get/s/data-1528970240242-Byu-hhybX.json";
var qinghai = "/asset/get/s/data-1528970209434-Bytyh3kZ7.json";
var ningxia = "/asset/get/s/data-1528970150882-SJJ2j2yWQ.json";
var neimenggu = "/asset/get/s/data-1528970102554-HyJKo31bQ.json";
var liaoning = "/asset/get/s/data-1528970052404-BJhHihkbQ.json";
var jilin = "/asset/get/s/data-1528970024458-rkeEjhy-Q.json";
var jiangxi = "/asset/get/s/data-1528969991368-BkkMi31Zm.json";
var jiangsu = "/asset/get/s/data-1528969864934-BJ-qchkWQ.json";
var hunan = "/asset/get/s/data-1528969831328-Sykuqh1bX.json";
var hubei = "/asset/get/s/data-1528969822119-Bk8v93kZ7.json";
var henan = "/asset/get/s/data-1528969802719-HyXIqhk-m.json";
var heilongjiang = "/asset/get/s/data-1528969789631-ryLHcnJbm.json";
var hebei = "/asset/get/s/data-1528969737020-HJWMqhy-Q.json";
var guizhou = "/asset/get/s/data-1528969712502-Hy_g92yZQ.json";
var guangxi = "/asset/get/s/data-1528969706270-HJMg5hkWQ.json";
var guangdong = "/asset/get/s/data-1528969700634-BkT1qn1WQ.json";
var gansu = "/asset/get/s/data-1528969694316-BJLkc2yZX.json";
var chongqing = "/asset/get/s/data-1528969687660-r1ey9nkbX.json";
var aomen = "/asset/get/s/data-1528969612486-rJ4qtnyZm.json";
var anhui = "/asset/get/s/data-1528969607452-Hkk5tnJ-Q.json";
var beijing = "/asset/get/s/data-1528969604941-Hk6Ytn1WQ.json";
var fujian = "/asset/get/s/data-1528969599839-S1OFFn1ZQ.json";
var xianggang = "/asset/get/s/data-1528969589857-S1ROthJWm.json";
var changjiangsanjiao = "/asset/get/s/data-1585548193898-oqdhSorMp.json";
var jingjinji = "/asset/get/s/data-1585547549774-nn24o2cEP.json";
var chengyujingjiqu = "/asset/get/s/data-1585549419389-utKeoYNob.json";
var dawanqu = "/asset/get/s/data-1585548673935-TkE3wSQeu.json";
var yidaiyilu = "/asset/get/s/data-1585550787262-hBCROBOs9.json";
var allCtyData = [{
    name: '南京市',
    value: 7
},
    {
        name: '无锡市',
        value: 7
    },
    {
        name: '徐州市',
        value: 7
    },
    {
        name: '常州市',
        value: 7
    },
    {
        name: '苏州市',
        value: 7
    },
    {
        name: '南通市',
        value: 7
    },
    {
        name: '连云港市',
        value: 7
    },
    {
        name: '淮安市',
        value: 7
    },
    {
        name: '盐城市',
        value: 7
    },
    {
        name: '扬州市',
        value: 7
    },
    {
        name: '镇江市',
        value: 7
    },
    {
        name: '泰州市',
        value: 7
    },
    {
        name: '宿迁市',
        value: 7
    },
    {
        name: '崇明区',
        value: 6
    },
    {
        name: '宝山区',
        value: 6
    },
    {
        name: '嘉定区',
        value: 6
    },
    {
        name: '青浦区',
        value: 6
    },
    {
        name: '松江区',
        value: 6
    },
    {
        name: '金山区',
        value: 6
    },
    {
        name: '浦东新区',
        value: 6
    },
    {
        name: '奉贤区',
        value: 6
    },
    {
        name: '闵行区',
        value: 6
    },
    {
        name: '长宁区',
        value: 6
    },
    {
        name: '普陀区',
        value: 6
    },
    {
        name: '徐汇区',
        value: 6
    },
    {
        name: '黄浦区',
        value: 6
    },
    {
        name: '静安区',
        value: 6
    },
    {
        name: '虹口区',
        value: 6
    },
    {
        name: '杨浦区',
        value: 6
    },
    {
        name: '广州市',
        value: 7
    },
    {
        name: '深圳市',
        value: 7
    },
    {
        name: '珠海市',
        value: 7
    },
    {
        name: '佛山市',
        value: 7
    },
    {
        name: '江门市',
        value: 7
    },
    {
        name: '肇庆市',
        value: 7
    },
    {
        name: '惠州市',
        value: 7
    },
    {
        name: '东莞市',
        value: 7
    },
    {
        name: '中山市',
        value: 7
    },
    {
        name: '湛江市',
        value: 7
    },
    {
        name: '茂名市',
        value: 7
    },
    {
        name: '阳江市',
        value: 7
    },
    {
        name: '云浮市',
        value: 7
    },
    {
        name: '汕头市',
        value: 7
    },
    {
        name: '汕尾市',
        value: 7
    },
    {
        name: '潮州市',
        value: 7
    },
    {
        name: '揭阳市',
        value: 7
    },
    {
        name: '韶关市',
        value: 7
    },
    {
        name: '梅州市',
        value: 7
    },
    {
        name: '河源市',
        value: 7
    },
    {
        name: '清远市',
        value: 7
    },
    {
        name: '南宁市',
        value: 6
    },
    {
        name: '柳州市',
        value: 6
    },
    {
        name: '桂林市',
        value: 6
    },
    {
        name: '梧州市',
        value: 6
    },
    {
        name: '北海市',
        value: 6
    },
    {
        name: '防城港市',
        value: 6
    },
    {
        name: '钦州市',
        value: 6
    },
    {
        name: '贵港市',
        value: 6
    },
    {
        name: '玉林市',
        value: 6
    },
    {
        name: '百色市',
        value: 6
    },
    {
        name: '贺州市',
        value: 6
    },
    {
        name: '河池市',
        value: 6
    },
    {
        name: '来宾市',
        value: 6
    },
    {
        name: '崇左市',
        value: 6
    },
    {
        name: '郴州市',
        value: 6
    },
    {
        name: '海口市',
        value: 7
    },
    {
        name: '三亚市',
        value: 7
    },
    {
        name: '三沙市',
        value: 7
    },
    {
        name: '五指山市',
        value: 7
    },
    {
        name: '琼海市',
        value: 7
    },
    {
        name: '儋州市',
        value: 7
    },
    {
        name: '文昌市',
        value: 7
    },
    {
        name: '万宁市',
        value: 7
    },
    {
        name: '东方市',
        value: 7
    },
    {
        name: '澄迈县',
        value: 7
    },
    {
        name: '定安县',
        value: 7
    },
    {
        name: '屯昌县',
        value: 7
    },
    {
        name: '临高县',
        value: 7
    },
    {
        name: '白沙黎族自治县',
        value: 7
    },
    {
        name: '昌江黎族自治县',
        value: 7
    },
    {
        name: '乐东黎族自治县',
        value: 7
    },
    {
        name: '陵水黎族自治县',
        value: 7
    },
    {
        name: '保亭黎族苗族自治县',
        value: 7
    },
    {
        name: '琼中黎族苗族自治县',
        value: 7
    },
    {
        name: '郑州市',
        value: 7
    },
    {
        name: '开封市',
        value: 7
    },
    {
        name: '洛阳市',
        value: 7
    },
    {
        name: '平顶山市',
        value: 7
    },
    {
        name: '安阳市',
        value: 7
    },
    {
        name: '鹤壁市',
        value: 7
    },
    {
        name: '新乡市',
        value: 7
    },
    {
        name: '焦作市',
        value: 7
    },
    {
        name: '濮阳市',
        value: 7
    },
    {
        name: '许昌市',
        value: 7
    },
    {
        name: '漯河市',
        value: 7
    },
    {
        name: '三门峡市',
        value: 7
    },
    {
        name: '南阳市',
        value: 7
    },
    {
        name: '商丘市',
        value: 7
    },
    {
        name: '信阳市',
        value: 7
    },
    {
        name: '周口市',
        value: 7
    },
    {
        name: '驻马店市',
        value: 7
    },
    {
        name: '济源市',
        value: 7
    },
    {
        name: '西安市',
        value: 8
    },
    {
        name: '商洛市',
        value: 8
    },
    {
        name: '铜川市',
        value: 8
    },
    {
        name: '宝鸡市',
        value: 8
    },
    {
        name: '咸阳市',
        value: 8
    },
    {
        name: '渭南市',
        value: 8
    },
    {
        name: '延安市',
        value: 8
    },
    {
        name: '汉中市',
        value: 8
    },
    {
        name: '榆林市',
        value: 8
    },
    {
        name: '安康市',
        value: 8
    },
    {
        name: '兰州市',
        value: 9
    },
    {
        name: '金昌市',
        value: 9
    },
    {
        name: '白银市',
        value: 9
    },
    {
        name: '天水市',
        value: 9
    },
    {
        name: '嘉峪关市',
        value: 9
    },
    {
        name: '武威市',
        value: 9
    },
    {
        name: '张掖市',
        value: 9
    },
    {
        name: '平凉市',
        value: 9
    },
    {
        name: '酒泉市',
        value: 9
    },
    {
        name: '庆阳市',
        value: 9
    },
    {
        name: '定西市',
        value: 9
    },
    {
        name: '陇南市',
        value: 9
    },
    {
        name: '临夏回族自治州',
        value: 9
    },
    {
        name: '甘南藏族自治州',
        value: 9
    },
    {
        name: '西宁市',
        value: 10
    },
    {
        name: '海东市',
        value: 10
    },
    {
        name: '海北藏族自治州',
        value: 10
    },
    {
        name: '黄南藏族自治州',
        value: 10
    },
    {
        name: '海南藏族自治州',
        value: 10
    },
    {
        name: '果洛藏族自治州',
        value: 10
    },
    {
        name: '玉树藏族自治州',
        value: 10
    },
    {
        name: '海西蒙古族藏族自治州',
        value: 10
    },
    {
        name: '长沙市',
        value: 6
    },
    {
        name: '株洲市',
        value: 6
    },
    {
        name: '湘潭市',
        value: 6
    },
    {
        name: '衡阳市',
        value: 6
    },
    {
        name: '邵阳市',
        value: 6
    },
    {
        name: '岳阳市',
        value: 6
    },
    {
        name: '常德市',
        value: 6
    },
    {
        name: '张家界市',
        value: 6
    },
    {
        name: '益阳市',
        value: 6
    },
    {
        name: '永州市',
        value: 6
    },
    {
        name: '怀化市',
        value: 6
    },
    {
        name: '娄底市',
        value: 6
    },
    {
        name: '湘西土家族苗族自治州',
        value: 6
    },
    {
        name: '武汉市',
        value: 7
    },
    {
        name: '襄阳市',
        value: 7
    },
    {
        name: '黄石市',
        value: 7
    },
    {
        name: '十堰市',
        value: 7
    },
    {
        name: '荆州市',
        value: 7
    },
    {
        name: '宜昌市',
        value: 7
    },
    {
        name: '襄樊市',
        value: 7
    },
    {
        name: '鄂州市',
        value: 7
    },
    {
        name: '荆门市',
        value: 7
    },
    {
        name: '孝感市',
        value: 7
    },
    {
        name: '黄冈市',
        value: 7
    },
    {
        name: '咸宁市',
        value: 7
    },
    {
        name: '随州市',
        value: 7
    },
    {
        name: '仙桃市',
        value: 7
    },
    {
        name: '天门市',
        value: 7
    },
    {
        name: '潜江市',
        value: 7
    },
    {
        name: '神农架林区',
        value: 7
    },
    {
        name: '恩施土家族苗族自治州',
        value: 7
    },
    {
        name: '南昌市',
        value: 8
    },
    {
        name: '景德镇市',
        value: 8
    },
    {
        name: '萍乡市',
        value: 8
    },
    {
        name: '九江市',
        value: 8
    },
    {
        name: '新余市',
        value: 8
    },
    {
        name: '鹰潭市',
        value: 8
    },
    {
        name: '赣州市',
        value: 8
    },
    {
        name: '吉安市',
        value: 8
    },
    {
        name: '宜春市',
        value: 8
    },
    {
        name: '抚州市',
        value: 8
    },
    {
        name: '上饶市',
        value: 8
    },
    {
        name: '济南市',
        value: 6
    },
    {
        name: '青岛市',
        value: 6
    },
    {
        name: '淄博市',
        value: 6
    },
    {
        name: '枣庄市',
        value: 6
    },
    {
        name: '东营市',
        value: 6
    },
    {
        name: '烟台市',
        value: 6
    },
    {
        name: '潍坊市',
        value: 6
    },
    {
        name: '济宁市',
        value: 6
    },
    {
        name: '泰安市',
        value: 6
    },
    {
        name: '威海市',
        value: 6
    },
    {
        name: '日照市',
        value: 6
    },
    {
        name: '莱芜市',
        value: 6
    },
    {
        name: '临沂市',
        value: 6
    },
    {
        name: '德州市',
        value: 6
    },
    {
        name: '聊城市',
        value: 6
    },
    {
        name: '滨州市',
        value: 6
    },
    {
        name: '菏泽市',
        value: 6
    },
    {
        name: '合肥市',
        value: 8
    },
    {
        name: '芜湖市',
        value: 8
    },
    {
        name: '蚌埠市',
        value: 8
    },
    {
        name: '淮南市',
        value: 8
    },
    {
        name: '马鞍山市',
        value: 8
    },
    {
        name: '淮北市',
        value: 8
    },
    {
        name: '铜陵市',
        value: 8
    },
    {
        name: '安庆市',
        value: 8
    },
    {
        name: '黄山市',
        value: 8
    },
    {
        name: '滁州市',
        value: 8
    },
    {
        name: '阜阳市',
        value: 8
    },
    {
        name: '宿州市',
        value: 8
    },
    {
        name: '巢湖市',
        value: 8
    },
    {
        name: '六安市',
        value: 8
    },
    {
        name: '亳州市',
        value: 8
    },
    {
        name: '池州市',
        value: 8
    },
    {
        name: '宣城市',
        value: 8
    },
    {
        name: '石家庄市',
        value: 6
    },
    {
        name: '唐山市',
        value: 6
    },
    {
        name: '秦皇岛市',
        value: 6
    },
    {
        name: '邯郸市',
        value: 6
    },
    {
        name: '邢台市',
        value: 6
    },
    {
        name: '保定市',
        value: 6
    },
    {
        name: '张家口市',
        value: 6
    },
    {
        name: '承德市',
        value: 6
    },
    {
        name: '沧州市',
        value: 6
    },
    {
        name: '廊坊市',
        value: 6
    },
    {
        name: '衡水市',
        value: 6
    },
    {
        name: '东城区',
        value: 8
    },
    {
        name: '西城区',
        value: 8
    },
    {
        name: '朝阳区',
        value: 8
    },
    {
        name: '丰台区',
        value: 8
    },
    {
        name: '石景山区',
        value: 8
    },
    {
        name: '海淀区',
        value: 8
    },
    {
        name: '门头沟区',
        value: 8
    },
    {
        name: '房山区',
        value: 8
    },
    {
        name: '通州区',
        value: 8
    },
    {
        name: '顺义区',
        value: 8
    },
    {
        name: '昌平区',
        value: 8
    },
    {
        name: '大兴区',
        value: 8
    },
    {
        name: '怀柔区',
        value: 8
    },
    {
        name: '平谷区',
        value: 8
    },
    {
        name: '密云区',
        value: 8
    },
    {
        name: '延庆区',
        value: 8
    },
    {
        name: '和平区',
        value: 7
    },
    {
        name: '河东区',
        value: 7
    },
    {
        name: '河西区',
        value: 7
    },
    {
        name: '南开区',
        value: 7
    },
    {
        name: '河北区',
        value: 7
    },
    {
        name: '红桥区',
        value: 7
    },
    {
        name: '东丽区',
        value: 7
    },
    {
        name: '西青区',
        value: 7
    },
    {
        name: '津南区',
        value: 7
    },
    {
        name: '北辰区',
        value: 7
    },
    {
        name: '武清区',
        value: 7
    },
    {
        name: '宝坻区',
        value: 7
    },
    {
        name: '滨海新区',
        value: 7
    },
    {
        name: '宁河区',
        value: 7
    },
    {
        name: '静海区',
        value: 7
    },
    {
        name: '蓟州区',
        value: 7
    },
    {
        name: '哈尔滨市',
        value: 6
    },
    {
        name: '齐齐哈尔市',
        value: 6
    },
    {
        name: '鹤岗市',
        value: 6
    },
    {
        name: '双鸭山市',
        value: 6
    },
    {
        name: '鸡西市',
        value: 6
    },
    {
        name: '大庆市',
        value: 6
    },
    {
        name: '伊春市',
        value: 6
    },
    {
        name: '牡丹江市',
        value: 6
    },
    {
        name: '佳木斯市',
        value: 6
    },
    {
        name: '七台河市',
        value: 6
    },
    {
        name: '黑河市',
        value: 6
    },
    {
        name: '绥化市',
        value: 6
    },
    {
        name: '大兴安岭地区',
        value: 6
    },
    {
        name: '长春市',
        value: 7
    },
    {
        name: '吉林市',
        value: 7
    },
    {
        name: '四平市',
        value: 7
    },
    {
        name: '辽源市',
        value: 7
    },
    {
        name: '通化市',
        value: 7
    },
    {
        name: '白山市',
        value: 7
    },
    {
        name: '松原市',
        value: 7
    },
    {
        name: '白城市',
        value: 7
    },
    {
        name: '延边朝鲜族自治州',
        value: 7
    },
    {
        name: '沈阳市',
        value: 8
    },
    {
        name: '大连市',
        value: 8
    },
    {
        name: '鞍山市',
        value: 8
    },
    {
        name: '抚顺市',
        value: 8
    },
    {
        name: '本溪市',
        value: 8
    },
    {
        name: '丹东市',
        value: 8
    },
    {
        name: '锦州市',
        value: 8
    },
    {
        name: '营口市',
        value: 8
    },
    {
        name: '阜新市',
        value: 8
    },
    {
        name: '辽阳市',
        value: 8
    },
    {
        name: '盘锦市',
        value: 8
    },
    {
        name: '铁岭市',
        value: 8
    },
    {
        name: '朝阳市',
        value: 8
    },
    {
        name: '葫芦岛市',
        value: 8
    },
    {
        name: '呼和浩特市',
        value: 6
    },
    {
        name: '包头市',
        value: 6
    },
    {
        name: '乌海市',
        value: 6
    },
    {
        name: '赤峰市',
        value: 6
    },
    {
        name: '通辽市',
        value: 6
    },
    {
        name: '鄂尔多斯市',
        value: 6
    },
    {
        name: '呼伦贝尔市',
        value: 6
    },
    {
        name: '巴彦淖尔市',
        value: 6
    },
    {
        name: '乌兰察布市',
        value: 6
    },
    {
        name: '锡林郭勒盟',
        value: 6
    },
    {
        name: '兴安盟',
        value: 6
    },
    {
        name: '阿拉善盟',
        value: 6
    },
    {
        name: '太原市',
        value: 7
    },
    {
        name: '大同市',
        value: 7
    },
    {
        name: '阳泉市',
        value: 7
    },
    {
        name: '长治市',
        value: 7
    },
    {
        name: '晋城市',
        value: 7
    },
    {
        name: '朔州市',
        value: 7
    },
    {
        name: '晋中市',
        value: 7
    },
    {
        name: '运城市',
        value: 7
    },
    {
        name: '忻州市',
        value: 7
    },
    {
        name: '临汾市',
        value: 7
    },
    {
        name: '吕梁市',
        value: 7
    },
    {
        name: '乌鲁木齐市',
        value: 8
    },
    {
        name: '北屯市',
        value: 8
    },
    {
        name: '克拉玛依市',
        value: 8
    },
    {
        name: '石河子市',
        value: 8
    },
    {
        name: '阿拉尔市',
        value: 8
    },
    {
        name: '图木舒克市',
        value: 8
    },
    {
        name: '五家渠市',
        value: 8
    },
    {
        name: '吐鲁番市',
        value: 8
    },
    {
        name: '阿克苏地区',
        value: 8
    },
    {
        name: '喀什地区',
        value: 8
    },
    {
        name: '哈密市',
        value: 8
    },
    {
        name: '和田地区',
        value: 8
    },
    {
        name: '阿图什市',
        value: 8
    },
    {
        name: '库尔勒市',
        value: 8
    },
    {
        name: '昌吉市',
        value: 8
    },
    {
        name: '阜康市',
        value: 8
    },
    {
        name: '米泉市',
        value: 8
    },
    {
        name: '博乐市',
        value: 8
    },
    {
        name: '伊宁市',
        value: 8
    },
    {
        name: '奎屯市',
        value: 8
    },
    {
        name: '塔城地区',
        value: 8
    },
    {
        name: '乌苏市',
        value: 8
    },
    {
        name: '阿勒泰地区',
        value: 8
    },
    {
        name: '双河市',
        value: 8
    },
    {
        name: '可克达拉市',
        value: 8
    },
    {
        name: '铁门关市',
        value: 8
    },
    {
        name: '昆玉市',
        value: 8
    },
    {
        name: '昌吉回族自治州',
        value: 8
    },
    {
        name: '伊犁哈萨克自治州',
        value: 8
    },
    {
        name: '博尔塔拉蒙古自治州',
        value: 8
    },
    {
        name: '巴音郭楞蒙古自治州',
        value: 8
    },
    {
        name: '克孜勒苏柯尔克孜自治州',
        value: 8
    },
    {
        name: '银川市',
        value: 7
    },
    {
        name: '石嘴山市',
        value: 7
    },
    {
        name: '吴忠市',
        value: 7
    },
    {
        name: '固原市',
        value: 7
    },
    {
        name: '中卫市',
        value: 7
    },
    {
        name: '福州市',
        value: 6
    },
    {
        name: '厦门市',
        value: 6
    },
    {
        name: '莆田市',
        value: 6
    },
    {
        name: '三明市',
        value: 6
    },
    {
        name: '泉州市',
        value: 6
    },
    {
        name: '漳州市',
        value: 6
    },
    {
        name: '南平市',
        value: 6
    },
    {
        name: '龙岩市',
        value: 6
    },
    {
        name: '宁德市',
        value: 6
    },
    {
        name: '杭州市',
        value: 8
    },
    {
        name: '宁波市',
        value: 8
    },
    {
        name: '温州市',
        value: 8
    },
    {
        name: '嘉兴市',
        value: 8
    },
    {
        name: '湖州市',
        value: 8
    },
    {
        name: '绍兴市',
        value: 8
    },
    {
        name: '金华市',
        value: 8
    },
    {
        name: '衢州市',
        value: 8
    },
    {
        name: '舟山市',
        value: 8
    },
    {
        name: '台州市',
        value: 8
    },
    {
        name: '丽水市',
        value: 8
    },
    {
        name: '拉萨市',
        value: 6
    },
    {
        name: '那曲地区',
        value: 6
    },
    {
        name: '昌都市',
        value: 6
    },
    {
        name: '山南地区',
        value: 6
    },
    {
        name: '日喀则市',
        value: 6
    },
    {
        name: '阿里地区',
        value: 6
    },
    {
        name: '林芝市',
        value: 6
    },
    {
        name: '贵阳市',
        value: 9
    },
    {
        name: '盘州市',
        value: 9
    },
    {
        name: '水城县',
        value: 9
    },
    {
        name: '赤水市',
        value: 9
    },
    {
        name: '仁怀市桐梓县',
        value: 9
    },
    {
        name: '绥阳县',
        value: 9
    },
    {
        name: '正安县',
        value: 9
    },
    {
        name: '道真县',
        value: 9
    },
    {
        name: '务川县',
        value: 9
    },
    {
        name: '凤冈县',
        value: 9
    },
    {
        name: '湄潭县',
        value: 9
    },
    {
        name: '习水县',
        value: 9
    },
    {
        name: '余庆县',
        value: 9
    },
    {
        name: '安顺市',
        value: 9
    },
    {
        name: '六盘水市',
        value: 9
    },
    {
        name: '铜仁市',
        value: 9
    },
    {
        name: '毕节市',
        value: 9
    },
    {
        name: '遵义市',
        value: 9
    },
    {
        name: '黔西南布依族苗族自治州',
        value: 9
    },
    {
        name: '黔东南苗族侗族自治州',
        value: 9
    },
    {
        name: '黔南布依族苗族自治州',
        value: 9
    },
    {
        name: '昆明市',
        value: 8
    },
    {
        name: '曲靖市',
        value: 8
    },
    {
        name: '玉溪市',
        value: 8
    },
    {
        name: '保山市',
        value: 8
    },
    {
        name: '昭通市',
        value: 8
    },
    {
        name: '丽江市',
        value: 8
    },
    {
        name: '思茅市',
        value: 8
    },
    {
        name: '临沧市',
        value: 8
    },
    {
        name: '思茅市',
        value: 8
    },
    {
        name: '文山壮族苗族自治州',
        value: 8
    },
    {
        name: '红河哈尼族彝族自治州',
        value: 8
    },
    {
        name: '西双版纳傣族自治州',
        value: 8
    },
    {
        name: '楚雄彝族自治州',
        value: 8
    },
    {
        name: '大理白族自治州',
        value: 8
    },
    {
        name: '德宏傣族景颇族自治州',
        value: 8
    },
    {
        name: '怒江傈僳族自治州',
        value: 8
    },
    {
        name: '迪庆藏族自治州',
        value: 8
    },
    {
        name: '普洱市',
        value: 8
    },
    {
        name: '秀山土家族苗族自治县',
        value: 7
    },
    {
        name: '酉阳土家族苗族自治县',
        value: 7
    },
    {
        name: '黔江区',
        value: 7
    },
    {
        name: '彭水苗族土家族自治县',
        value: 7
    },
    {
        name: '武隆县',
        value: 7
    },
    {
        name: '南川区',
        value: 7
    },
    {
        name: '江津区',
        value: 7
    },
    {
        name: '永川区',
        value: 7
    },
    {
        name: '涪陵区',
        value: 7
    },
    {
        name: '云阳县',
        value: 7
    },
    {
        name: '奉节县',
        value: 7
    },
    {
        name: '巫山县',
        value: 7
    },
    {
        name: '巫溪县',
        value: 7
    },
    {
        name: '开县',
        value: 7
    },
    {
        name: '城口县',
        value: 7
    },
    {
        name: '万州区',
        value: 7
    },
    {
        name: '垫江县',
        value: 7
    },
    {
        name: '长寿区',
        value: 7
    },
    {
        name: '梁平县',
        value: 7
    },
    {
        name: '忠县',
        value: 7
    },
    {
        name: '丰都县',
        value: 7
    },
    {
        name: '石柱土家族自治县',
        value: 7
    },
    {
        name: '潼南区',
        value: 7
    },
    {
        name: '大足区',
        value: 7
    },
    {
        name: '荣昌区',
        value: 7
    },
    {
        name: '合川区',
        value: 7
    },
    {
        name: '铜梁区',
        value: 7
    },
    {
        name: '璧山区',
        value: 7
    },
    {
        name: '綦江区',
        value: 7
    },
    {
        name: '巴南区',
        value: 7
    },
    {
        name: '大渡口区',
        value: 7
    },
    {
        name: '九龙坡区',
        value: 7
    },
    {
        name: '沙坪坝区',
        value: 7
    },
    {
        name: '江北区',
        value: 7
    },
    {
        name: '南岸区',
        value: 7
    },
    {
        name: '渝北区',
        value: 7
    },
    {
        name: '北碚区',
        value: 7
    },
    {
        name: '成都市',
        value: 7
    },
    {
        name: '自贡市',
        value: 7
    },
    {
        name: '攀枝花市',
        value: 7
    },
    {
        name: '泸州市',
        value: 7
    },
    {
        name: '德阳市',
        value: 7
    },
    {
        name: '绵阳市',
        value: 7
    },
    {
        name: '广元市',
        value: 7
    },
    {
        name: '遂宁市',
        value: 7
    },
    {
        name: '内江市',
        value: 7
    },
    {
        name: '乐山市',
        value: 7
    },
    {
        name: '南充市',
        value: 7
    },
    {
        name: '眉山市',
        value: 7
    },
    {
        name: '宜宾市',
        value: 7
    },
    {
        name: '广安市',
        value: 7
    },
    {
        name: '达州市',
        value: 7
    },
    {
        name: '雅安市',
        value: 7
    },
    {
        name: '巴中市',
        value: 7
    },
    {
        name: '资阳市',
        value: 7
    },
    {
        name: '阿坝藏族羌族自治州',
        value: 7
    },
    {
        name: '甘孜藏族自治州',
        value: 7
    },
    {
        name: '凉山彝族自治州',
        value: 7
    }
];
var allprovinceData = [{
    name: "黑龙江",
    value: 1,
},
    {
        name: "吉林",
        value: 1,
    },
    {
        name: "辽宁",
        value: 1,
    },
    {
        name: "上海",
        value: 2,
    },
    {
        name: "江苏",
        value: 2,
    },
    {
        name: "浙江",
        value: 2,
    },
    {
        name: "安徽",
        value: 2,
    },
    {
        name: "福建",
        value: 1,
    },
    {
        name: "江西",
        value: 8,
    },
    {
        name: "山东",
        value: 8,
    },
    {
        name: "台湾",
        value: 8,
    },
    {
        name: "北京",
        value: 3,
    },
    {
        name: "天津",
        value: 3,
    },
    {
        name: "山西",
        value: 8,
    },
    {
        name: "河北",
        value: 3,
    },
    {
        name: "内蒙古",
        value: 1,
    },
    {
        name: "河南",
        value: 8,
    },
    {
        name: "湖北",
        value: 8,
    },
    {
        name: "湖南",
        value: 8,
    },
    {
        name: "广东",
        value: 4,
    },
    {
        name: "广西",
        value: 8,
    },
    {
        name: "海南",
        value: 1,
    },
    {
        name: "香港",
        value: 8,
    },
    {
        name: "澳门",
        value: 8,
    },
    {
        name: "重庆",
        value: 5,
    },
    {
        name: "四川",
        value: 5,
    },
    {
        name: "贵州",
        value: 8,
    },
    {
        name: "云南",
        value: 1,
    },
    {
        name: "西藏",
        value: 1,
    },
    {
        name: "陕西",
        value: 1,
    },
    {
        name: "甘肃",
        value: 1,
    },
    {
        name: "青海",
        value: 1,
    },
    {
        name: "宁夏",
        value: 1,
    },
    {
        name: "新疆",
        value: 1,
    },
    {
        name: "南海诸岛",
        value: 1,
    }
];
var areaProjects = [{
    city: '辽宁',
    name: "一带一路",
    merge: (Math.random() * 100).toFixed(2),
    dataone: (Math.random() * 100).toFixed(2),
    datatwo: (Math.random() * 100).toFixed(2)
},
    {
        city: '黑龙江',
        name: "一带一路",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '吉林',
        name: "一带一路",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '内蒙古',
        name: "一带一路",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '山西',
        name: "",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '新疆',
        name: "一带一路",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '宁夏',
        name: "一带一路",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '北京',
        name: "京津冀",
        merge: -25.53,
        dataone: 123123,
        datatwo: 123123.01
    },
    {
        city: '河北',
        name: "京津冀",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '天津',
        name: "京津冀",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '山东',
        name: "",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '安徽',
        name: "长江三角",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '河南',
        name: "",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '陕西',
        name: "一带一路",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '甘肃',
        name: "一带一路",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '青海',
        name: "一带一路",
        merge: -24.50,
        dataone: 39950025,
        datatwo: 703641592.50
    },
    {
        city: '江苏',
        name: "长江三角",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '上海',
        name: "长江三角",
        merge: -26.06,
        dataone: 11111,
        datatwo: 111111.33
    },
    {
        city: '湖北',
        name: "",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '湖南',
        name: "",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '江西',
        name: "",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '四川',
        name: "成渝经济区",
        merge: -22.23,
        dataone: 11111,
        datatwo: 32123.55
    },
    {
        city: '西藏',
        name: "一带一路",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '云南',
        name: "一带一路",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '重庆',
        name: "成渝经济区",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '贵州',
        name: "",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '福建',
        name: "一带一路",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '浙江',
        name: "长江三角",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '广东',
        name: "大湾区",
        merge: -24.96,
        dataone: 123123,
        datatwo: 123123.15
    },
    {
        city: '深圳',
        name: "大湾区",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '广西',
        name: "",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    },
    {
        city: '海南',
        name: "一带一路",
        merge: (Math.random() * 100).toFixed(2),
        dataone: (Math.random() * 100).toFixed(2),
        datatwo: (Math.random() * 100).toFixed(2)
    }
];
var provinceProJects = [{
    city: '北京',
    name: "京津冀",
    dataone: 1231,
    datatwo: 123.01,
    datathree: -25.53
},
    {
        city: '上海',
        name: "长江三角",
        dataone: 123123,
        datatwo: 123213.33,
        datathree: -26.06
    },
    {
        city: '广东',
        name: "大湾区",
        dataone: 123123,
        datatwo: 123213.15,
        datathree: -24.96
    },
    {
        city: '青海',
        name: "一带一路",
        dataone: 39950123025,
        datatwo: 123123.50,
        datathree: -24.50
    },
    {
        city: '四川',
        name: "成渝经济区",
        dataone: 123123,
        datatwo: 123123.55,
        datathree: -22.23
    }
];

echarts.extendsMap = function(id, opt) {
    // 实例
    var chart = this.init(document.getElementById(id));

    var curGeoJson = {};
    var cityMap = {
        '中国': zhongguo,
        '上海': changjiangsanjiao,
        '河北': jingjinji,
        '内蒙古': yidaiyilu,
        '辽宁': yidaiyilu,
        '吉林': yidaiyilu,
        '黑龙江': yidaiyilu,
        '江苏': changjiangsanjiao,
        '浙江': changjiangsanjiao,
        '安徽': changjiangsanjiao,
        '福建': yidaiyilu,
        '广东': dawanqu,
        '海南': yidaiyilu,
        '四川': chengyujingjiqu,
        '云南': yidaiyilu,
        '西藏': yidaiyilu,
        '陕西': yidaiyilu,
        '甘肃': yidaiyilu,
        '青海': yidaiyilu,
        '宁夏': yidaiyilu,
        '新疆': yidaiyilu,
        '北京': jingjinji,
        '天津': jingjinji,
        '重庆': chengyujingjiqu,
        '香港': xianggang,
        '澳门': aomen,
        '深圳': dawanqu,
        '京津冀': jingjinji,
        '一带一路': yidaiyilu,
        '成渝经济区': chengyujingjiqu,
        '长江三角': changjiangsanjiao,
        '大湾区': dawanqu
    };
    var geoCoordMap = {
        "一带一路": [100.38, 36.8],
        "大湾区": [113.65, 22.82],
        "京津冀": [116.46, 39.92],
        "成渝经济区": [103, 30.65],
        "长江三角": [119.65, 31]
    };

    var levelColorMap = {
        '1': 'rgba(241, 109, 115, .8)',
        '2': 'rgba(255, 235, 59, .7)',
        '3': 'rgba(147, 235, 248, 1)'
    };

    var defaultOpt = {
        mapName: 'china', // 地图展示
        goDown: false, // 是否下钻
        bgColor: '#404a59', // 画布背景色
        activeArea: [], // 区域高亮,同echarts配置项
        data: [],
        // 下钻回调(点击的地图名、实例对象option、实例对象)
        callback: function(name, option, instance) {}
    };
    if (opt) opt = this.util.extend(defaultOpt, opt);

    // 层级索引
    var name = [opt.mapName];
    var idx = 0;
    var pos = {
        leftPlus: 115,
        leftCur: 150,
        left: 198,
        top: 50
    };

    var line = [
        [0, 0],
        [8, 11],
        [0, 22]
    ];
    // style
    var style = {
        font: '18px "Microsoft YaHei", sans-serif',
        textColor: '#eee',
        lineColor: 'rgba(147, 235, 248, .8)'
    };

    var handleEvents = {
        /**
         * i 实例对象
         * o option
         * n 地图名
         **/
        resetOption: function(i, o, n) {
            //var breadcrumb = this.createBreadcrumb(n);
            var breadcrumb = null;
            if (n == ("江苏") || n == ("上海") || n == ("浙江") || n == ("安徽")) {
                breadcrumb = this.createBreadcrumb("长江三角");
            } else if (n == ("广东") || n == ("深圳")) {
                breadcrumb = this.createBreadcrumb("大湾区");
            } else if (n == ("四川") || n == ("重庆")) {
                breadcrumb = this.createBreadcrumb("成渝经济区");
            } else if (n == ("北京") || n == ("河北") || n == ("天津")) {
                breadcrumb = this.createBreadcrumb("京津冀");
            } else if (n == ("新疆") ||
                //n == ("重庆") ||
                n == ("陕西") ||
                n == ("甘肃") ||
                n == ("宁夏") ||
                n == ("青海") ||
                n == ("内蒙古") ||
                n == ("黑龙江") ||
                n == ("吉林") ||
                n == ("辽宁") ||
                n == ("江门") ||
                n == ("云南") ||
                n == ("西藏") ||
                n == ("上海") ||
                n == ("福建") ||
                n == ("广东") ||
                n == ("浙江") ||
                n == ("海南")) {
                breadcrumb = this.createBreadcrumb("一带一路");
            }
            if (breadcrumb != null) {
                breadcrumb.left = 265;
            }

            var j = name.indexOf(n);
            var l = o.graphic.length;
            if (j < 0) {
                o.graphic.push(breadcrumb);
                o.graphic[0].children[0].shape.x2 = 170;
                o.graphic[0].children[1].shape.x2 = 170;
                if (o.graphic.length > 2) {
                    var cityData = [];
                    var cityJson;
                    for (var x = 0; x < opt.data.length; x++) {
                        if (n === opt.data[x].city) {
                            $([opt.data[x]]).each(function(index, data) {
                                cityJson = {
                                    city: data.city,
                                    name: data.name,
                                    value: data.value,
                                    crew: data.crew,
                                    company: data.company,
                                    position: data.position,
                                    region: data.region,
                                    merge: data.merge,
                                    dataone: data.dataone,
                                    datatwo: data.datatwo
                                };
                                cityData.push(cityJson)
                            })
                        }
                    }

                    if (cityData != null) {
                        o.series[0].data = handleEvents.initSeriesData(cityData);

                    } else {
                        o.series[0].data = [];
                    }


                }
                name.push(n);
                idx++;
            } else {
                o.graphic.splice(j + 2, l);
                if (o.graphic.length <= 2) {
                    o.graphic[0].children[0].shape.x2 = 60;
                    o.graphic[0].children[1].shape.x2 = 60;
                    //o.series[0].data = handleEvents.initSeriesData(opt.data);
                    o.series[0].data = [];
                };
                name.splice(j + 1, l);
                idx = j;
                pos.leftCur -= pos.leftPlus * (l - j - 1);
            };

            o.geo.map = n;
            o.geo.zoom = 0.4;
            i.clear();
            i.setOption(o);
            chart.dispatchAction({
                type:'showTip',
                seriesIndex: 0,
                dataIndex: 0
            })
            this.zoomAnimation();
            opt.callback(n, o, i);
        },

        /**
         * name 地图名
         **/
        createBreadcrumb: function(name) {
            var cityToPinyin = {
                '中国': 'zhongguo',
                '上海': 'shanghai',
                '河北': 'hebei',
                '山西': 'shangxi',
                '内蒙古': 'neimenggu',
                '辽宁': 'liaoning',
                '吉林': 'jilin',
                '黑龙江': 'heilongjiang',
                '江苏': 'jiangsu',
                '浙江': 'zhejiang',
                '安徽': 'anhui',
                '福建': 'fujian',
                '江西': 'jiangxi',
                '山东': 'shangdong',
                '河南': 'henan',
                '湖北': 'hubei',
                '湖南': 'hunan',
                '广东': 'guangdong',
                '广西': 'guangxi',
                '海南': 'hainan',
                '四川': 'sichuan',
                '贵州': 'guizhou',
                '云南': 'yunnan',
                '西藏': 'xizang',
                '陕西': 'shanxi',
                '甘肃': 'gansu',
                '青海': 'qinghai',
                '宁夏': 'ningxia',
                '新疆': 'xinjiang',
                '北京': 'beijing',
                '天津': 'tianjin',
                '重庆': 'chongqing',
                '香港': 'xianggang',
                '澳门': 'aomen',
                '一带一路': 'yidaiyilu',
                '京津冀': 'jingjinji',
                '成渝经济区': 'chengyujingjiqu',
                '长江三角': 'changjiangsanjiao',
                '大湾区': 'dawanqu'
            };

            var breadcrumb = {
                type: 'group',
                id: name,
                left: pos.leftCur + pos.leftPlus,
                top: pos.top + 3,
                children: [{
                    type: 'polyline',
                    left: -90,
                    top: -5,
                    shape: {
                        points: line
                    },
                    style: {
                        stroke: '#fff',
                        key: name
                        // lineWidth: 2,
                    },
                    onclick: function() {
                        var name = this.style.key;
                        handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 'middle',
                    style: {
                        text: name,
                        textAlign: 'center',
                        fill: style.textColor,
                        font: style.font
                    },
                    onclick: function() {
                        var name = this.style.text;
                        //handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 10,
                    style: {
                        name: name,
                        text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: '12px "Microsoft YaHei", sans-serif',
                    },
                    onclick: function() {
                        // console.log(this.style);
                        var name = this.style.name;
                        //handleEvents.resetOption(chart, option, name);
                    }
                }]
            }

            pos.leftCur += pos.leftPlus;

            return breadcrumb;
        },

        // 设置effectscatter
        initSeriesData: function(data) {
            var temp = [];
            debugger
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    temp.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                        merge: data[i].merge,
                        dataone: data[i].dataone,
                        datatwo: data[i].datatwo
                    });
                }
            };
            return temp;
        },
        zoomAnimation: function() {
            var count = null;
            var zoom = function(per) {
                if (!count) count = per;
                count = count + per;
                // console.log(per,count);
                chart.setOption({
                    geo: {
                        zoom: count
                    }
                });
                if (count < 1) window.requestAnimationFrame(function() {
                    zoom(0.2);
                });
            };
            window.requestAnimationFrame(function() {
                zoom(0.2);
            });
        }
    };

    var option = {
        backgroundColor: opt.bgColor,
        tooltip: {
            show: true,
            alwaysShowContent: true,
            backgroundColor: 'rgba(50,50,50,0.7)',
            hideDelay: 100,
            triggerOn: 'mousemove',
            enterable: true,
            position: ['60%', '70%']

        },
        graphic: [{
            type: 'group',
            left: pos.left,
            top: pos.top - 4,
            children: [{
                type: 'line',
                left: 0,
                top: -20,
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 60,
                    y2: 0
                },
                style: {
                    stroke: style.lineColor,
                }
            }, {
                type: 'line',
                left: 0,
                top: 20,
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 60,
                    y2: 0
                },
                style: {
                    stroke: style.lineColor,
                }
            }]
        },
            {
                id: name[idx],
                type: 'group',
                left: pos.left + 2,
                top: pos.top,
                children: [{
                    type: 'polyline',
                    left: 90,
                    top: -12,
                    shape: {
                        points: line
                    },
                    style: {
                        stroke: 'transparent',
                        key: name[0]
                    },
                    onclick: function() {
                        var name = this.style.key;
                        handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: 0,
                    top: 'middle',
                    style: {
                        text: '中国',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: style.font
                    },
                    onclick: function() {

                        option.tooltip.formatter = function(params, ticket, callback) {
                            return '大区名称：' + params.data.name + '大区' + '<br/>' +
                                '年累容量：' + params.data.merge + '/MW' + '<br/>' + '未开工容量：' + params.data.dataone + '/MW' + '<br/>' + '在建容量：' + params.data.datatwo + '/MW';
                        }
                        option.series[1].data = allprovinceData;
                        opt.data = areaProjects;
                        handleEvents.resetOption(chart, option, 'china');
                    }
                }, {
                    type: 'text',
                    left: 0,
                    top: 10,
                    style: {
                        text: 'China',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: '12px "Microsoft YaHei", sans-serif',
                    },
                    onclick: function() {
                        option.tooltip.formatter = function(params, ticket, callback) {
                            return '大区名称：' + params.data.name + '大区' + '<br/>' + '年累容量：' + params.data.merge + '/MW' + '<br/>' + '未开工容量：' + params.data.dataone + '/MW' + '<br/>' + '在建容量：' + params.data.datatwo + '/MW';
                        }
                        option.series[1].data = allprovinceData;
                        opt.data = areaProjects;
                        handleEvents.resetOption(chart, option, 'china');
                    }
                }]
            }
        ],
        geo: {
            map: opt.mapName,
            roam: true,
            zoom: 1,
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(255, 255, 255, .5)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .5)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(255, 255, 255, .5)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: 0,  //控制阴影偏向
                    shadowOffsetY: 2,  //控制阴影偏向
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: 'rgba(249,157,51, .9)',
                    borderWidth: 0
                }
            },
            regions: opt.activeArea.map(function(item) {
                if (typeof item !== 'string') {
                    return {
                        name: item.name,
                        itemStyle: {
                            normal: {
                                areaColor: item.areaColor || '#389BB7'
                            }
                        },
                        label: {
                            normal: {
                                show: item.showLabel,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    }
                } else {
                    return {
                        name: item,
                        itemStyle: {
                            normal: {
                                borderColor: '#91e6ff',
                                areaColor: '#389BB7'
                            }
                        }
                    }
                }
            })
        },
        visualMap: {
            min: 0,
            max: 11,
            left: '3%',
            bottom: '10%',
            showLabel: !0,
            calculable: false,
            show: false,
            itemWidth:'20',
            itemHeight:'16',
            inRange: {
                color: [
                    "#ffffff",
                    "rgba(159,202,70,1)", //yidaiyilu
                    "rgba(225,131,46,1)", //changjiangsanjiao
                    "rgba(231,210,99,1)", //jingjinji
                    "rgba(2,201,251,1)", //dawanqu
                    "rgba(50,100,236,1)", //chengyujingjiqu
                    "#4bbdd6",
                    "#ff6f5b",
                    "#F4D5B1",
                    "#ADE1E3",
                    "#F4B387",
                    "#F0F3F4"
                ]
            },
            outOfRange: {
                color: [
                    "rgba(48,59,175,1)",
                ]
            },
            pieces: [{
                value: 3,
                label: '京津冀',
                color: 'rgba(231,210,99,1)'
            },
                {
                    value: 5,
                    label: '成渝经济区',
                    color: 'rgba(50,100,236,1)'
                },
                {
                    value: 4,
                    label: '大湾区',
                    color: 'rgba(2,201,251,1)'
                },
                {
                    value: 1,
                    label: '一带一路',
                    color: 'rgba(159,202,70,1)'
                },
                {
                    value: 2,
                    label: '长三角区',
                    color: 'rgba(225,131,46,1)'
                },
            ],
            show: !0,
            textStyle:{
                color:'rgba(150,173,255,1)',
                fontSize:'20'
            }
        },
        series: [{
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            rippleEffect: {
                period: 15,
                scale: 4,
                brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#FABC61',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            //data: handleEvents.initSeriesData(opt.data)
        }, {
            name: "map",
            type: 'map',
            mapType: 'china',
            geoIndex: 0,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: allprovinceData,
            tooltip: {
                trigger: "item",
                triggerOn: "mousemove",
                backgroundColor: "rgba(0,0,0,.8)",
                borderColor: "#3574c8",
                borderWidth: "2",
                extraCssText: "padding:10px;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",
                show: false,
                formatter: function(params) {
                    var res;
                    if (params.value > 0) {
                        res = params.data.value2 + "<br/>";
                        res += params.data.value3;
                    } else {
                        res = "";
                    }
                    return res;
                }
            },
        }],
    };

    chart.setOption(option);
    // 添加事件
    chart.on('click', function(params) {
        var _self = this;
        var cityDot = "";
        var city = params.name;
        if (city == "新疆" ||
            //city == "重庆" ||
            city == "陕西" ||
            city == "甘肃" ||
            city == "宁夏" ||
            city == "青海" ||
            city == "内蒙古" ||
            city == "黑龙江" ||
            city == "吉林" ||
            city == "辽宁" ||
            city == "江门" ||
            city == "云南" ||
            city == "西藏" ||
            city == "上海" ||
            city == "福建" ||
            //city == "广东" ||
            city == "浙江" ||
            city == "海南") {
            params.name = '青海'
        } else if (city == "上海" || city == "江苏" || city == "浙江" || city == "安徽") {
            params.name = '上海'
        } else if (city == "北京" || city == "河北" || city == "天津") {
            params.name = '北京'
        } else if (city == "重庆" || city == "四川") {
            params.name = '四川'
        } else if (city == "广东" || city == "深圳") {
            params.name = '广东'
        }
        if (opt.goDown && params.name !== name[idx]) {
            if (cityMap[params.name]) {

                var url = cityMap[params.name];
                $.get(url, function(response) {
                    curGeoJson = response;
                    echarts.registerMap(params.name, response);
                    option.series[1].data = allCtyData;
                    option.tooltip.formatter = function(params, ticket, callback) {
                        return '所在大区：' + params.data.name + '<br/>' + '份数：' +
                            params.data.dataone + '' + '<br/>' + '金额：' +
                            params.data.datatwo + '(万元)' + '' + '<br/>' + '同比：' +
                            params.data.merge + '%';
                    }

                    option.data = provinceProJects;
                    handleEvents.resetOption(_self, option, params.name);
                });
            }
            // }
            debugger
            chart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0, //第几条series
                dataIndex: 0, //第几个tooltip
            })
        }
    });

    chart.on("mouseover", function(params) {
        var city = params.name;
        if (city == "新疆" ||
            //city == "重庆" ||
            city == "陕西" ||
            city == "甘肃" ||
            city == "宁夏" ||
            city == "青海" ||
            city == "内蒙古" ||
            city == "黑龙江" ||
            city == "吉林" ||
            city == "辽宁" ||
            city == "江门" ||
            city == "云南" ||
            city == "西藏" ||
            city == "上海" ||
            city == "福建" ||
            //city == "广东" ||
            city == "浙江" ||
            city == "海南") {
            chart.dispatchAction({
                type: "highlight",
                name: "新疆"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "浙江"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "重庆"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "陕西"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "甘肃"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "宁夏"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "青海"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "内蒙古"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "黑龙江"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "吉林"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "辽宁"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "江门"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "云南"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "西藏"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "上海"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "福建"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "广东"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "海南"
            });
        }
        if (city == "上海" || city == "江苏" || city == "浙江" || city == "安徽") {
            chart.dispatchAction({
                type: "highlight",
                name: "上海"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "江苏"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "浙江"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "安徽"
            });
        }
        if (city == "北京" || city == "河北" || city == "天津") {
            chart.dispatchAction({
                type: "highlight",
                name: "北京"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "河北"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "天津"
            });
        }
        if (city == "重庆" || city == "四川") {
            chart.dispatchAction({
                type: "highlight",
                name: "重庆"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "四川"
            });
        }
        if (city == "广东" || city == "深圳") {
            chart.dispatchAction({
                type: "highlight",
                name: "广东"
            });
            chart.dispatchAction({
                type: "highlight",
                name: "深圳"
            });
        }
    });
    chart.on("mouseout", function(params) {
        var city = params.name;
        if (city == "新疆" ||
            city == "重庆" ||
            city == "陕西" ||
            city == "甘肃" ||
            city == "宁夏" ||
            city == "青海" ||
            city == "内蒙古" ||
            city == "黑龙江" ||
            city == "吉林" ||
            city == "辽宁" ||
            city == "江门" ||
            city == "云南" ||
            city == "西藏" ||
            city == "上海" ||
            city == "福建" ||
            //city == "广东" ||
            city == "浙江" ||
            city == "海南") {
            chart.dispatchAction({
                type: "downplay",
                name: "新疆"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "浙江"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "重庆"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "陕西"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "甘肃"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "宁夏"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "青海"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "内蒙古"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "黑龙江"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "吉林"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "辽宁"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "江门"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "云南"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "西藏"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "上海"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "福建"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "广东"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "海南"
            });
        }
        if (city == "上海" || city == "江苏" || city == "浙江" || city == "安徽") {
            chart.dispatchAction({
                type: "downplay",
                name: "上海"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "江苏"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "浙江"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "安徽"
            });
        }
        if (city == "北京" || city == "河北" || city == "天津") {
            chart.dispatchAction({
                type: "downplay",
                name: "北京"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "河北"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "天津"
            });
        }
        if (city == "重庆" || city == "四川") {
            chart.dispatchAction({
                type: "downplay",
                name: "重庆"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "四川"
            });
        }
        if (city == "广东" || city == "深圳") {
            chart.dispatchAction({
                type: "downplay",
                name: "广东"
            });
            chart.dispatchAction({
                type: "downplay",
                name: "深圳"
            });

        }
    });
    chart.setMap = function(mapName) {
        var _self = this;
        if (mapName.indexOf('市') < 0) mapName = mapName + '市';
        var citySource = cityMap[mapName];
        if (citySource) {
            var url = './map/' + citySource + '.json';
            $.get(url, function(response) {
                // console.log(response);
                curGeoJson = response;
                echarts.registerMap(mapName, response);
                handleEvents.resetOption(_self, option, mapName);
            });
        }

    };

    return chart;
};

$.getJSON(zhongguo, function(geoJson) {
    echarts.registerMap('china', geoJson);
    var myChart = echarts.extendsMap('chart-panel', {
        bgColor: '#154e90', // 画布背景色
        mapName: 'china', // 地图名
        text: 'by:wxw',
        goDown: true, // 是否下钻
        // 下钻回调
        callback: function(name, option, instance) {
            //console.log(name, option, instance);
        },
        // 数据展示
        data: areaProjects
    });
})



//气泡图
let icon = 'image://data:image/png;base64,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'

option = {
    backgroundColor: '#000',
    xAxis: {
        show: false,
        min: 0,
        max: 10
    },
    yAxis: {
        show: false,
        scale: true,
        min: 0,
        max: 20
    },
    series: [{
        type: 'scatter',
        symbolSize: (d, i) => i.dataIndex > 4 ? Math.random() * 20 : i.dataIndex === 0 ? 70 : 50,
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter (p) {
                    let {dataIndex, value, name} = p
                    return dataIndex === 0 ? `{b0|${value[2]}}\n{c|${name.length > 4 ? name.substr(0, 4) + '...' : name}}` : dataIndex < 5 ? `{b|${value[2]}}\n{c|${name.length > 4 ? name.substr(0, 4) + '...' : name}}` : ''

                },
                color: '#01FDFF',
                rich: {
                    b0: {
                        color: '#02F6F6',
                        align: 'center',
                        fontWeight: 'bold',
                        fontSize: 32
                    },
                    b: {
                        color: '#02F6F6',
                        align: 'center'
                    },
                    c: {
                        fontWeight: 'bold',
                        color: '#00CEFF',
                        align: 'center'
                    }
                }
            }
        },
        itemStyle: {
            normal: {
                color: 'rgba(6,33,41,1)',
                borderColor: '#00ceff'
            }
        },
        data: [{
            name: 'APT',
            value: [5, 10, 100],
            symbol: icon
        }, {
            name: '海莲花',
            value: [
                [2, 3][Math.round(Math.random())],
                [14, 15, 16, 17][Math.round(Math.random() * 3)], 100
            ]
        }, {
            name: '永恒之蓝',
            value: [
                [7, 8][Math.round(Math.random())],
                [14, 15, 16, 17][Math.round(Math.random() * 3)], 100
            ]
        }, {
            name: '灰熊草原',
            value: [
                [7, 8][Math.round(Math.random())],
                [5, 6, 7, 8][Math.round(Math.random() * 3)], 100
            ]
        }, {
            name: '方程式',
            value: [
                [2, 3][Math.round(Math.random())],
                [5, 6, 7, 8][Math.round(Math.random() * 3)], 100
            ]
        }, {
            name: '方程式',
            value: [Math.random() * 10, Math.random() * 20, 100]
        }, {
            name: '方程式',
            value: [Math.random() * 10, Math.random() * 20, 100]
        }, {
            name: '方程式',
            value: [Math.random() * 10, Math.random() * 20, 100]
        }, {
            name: '方程式',
            value: [Math.random() * 10, Math.random() * 20, 100]
        }, {
            name: '方程式',
            value: [Math.random() * 10, Math.random() * 20, 100]
        }, {
            name: '方程式',
            value: [Math.random() * 10, Math.random() * 20, 100]
        }, {
            name: '方程式',
            value: [Math.random() * 10, Math.random() * 20, 100]
        }, {
            name: '方程式',
            value: [Math.random() * 10, Math.random() * 20, 100]
        }, {
            name: '方程式',
            value: [Math.random() * 10, Math.random() * 20, 100]
        }, {
            name: '方程式',
            value: [Math.random() * 10, Math.random() * 20, 100]
        }, {
            name: '方程式',
            value: [Math.random() * 10, Math.random() * 20, 100]
        }, {
            name: '方程式',
            value: [Math.random() * 10, Math.random() * 20, 100]
        }, {
            name: '方程式',
            value: [Math.random() * 10, Math.random() * 20, 100]
        }, {
            name: '方程式',
            value: [Math.random() * 10, Math.random() * 20, 100]
        }, {
            name: '方程式',
            value: [Math.random() * 10, Math.random() * 20, 100]
        }, {
            name: '方程式',
            value: [Math.random() * 10, Math.random() * 20, 100]
        }, {
            name: '方程式',
            value: [Math.random() * 10, Math.random() * 20, 100]
        }]
    }]
}
