<template>
    <div style="height: 580px;width: 1000px;margin: 20px;" id="provinceChart"></div>
</template>

<script>
  import echarts from 'echarts'
  import 'echarts/map/js/china'
  export default {
    name: 'provincesChart',
      data() {
          return {
            options : {
                backgroundColor: '', //背景颜色
                title: {
                    text: '中国',
                    subtext: 'China',
                    color: '#fff',
                    // sublink: 'http://www.pm25.in',
                    x:'center',
                },
                //是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
                visualMap: {
                    min: 0, //最小值
                    max: 600, //最大值
                    calculable: true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
                    inRange: {
                        color: ['#e0ffff', '#006edd'] //颜色   根据数据的多少显示颜色的渐变
                    },
                    textStyle: {
                        color: '#fff'
                    },
                },
                // 提示框，鼠标移入
                tooltip:{
                    show:true, //鼠标移入是否触发数据显示
                    trigger: 'item', //出发方式
                    formatter:'{b}-销售数量：{c}'
                },
                geo: {
                    map: 'china',
                    show: true,
                    roam: true,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: '#3a7fd5',
                            borderColor: '#0a53e9',//线
                            shadowColor: '#092f8f',//外发光
                            shadowBlur: 20
                        },
                        emphasis: {
                            areaColor: '#0a2dae',//悬浮区背景
                        }
                    }
                },
                //配置地图的数据，并且显示
                series:[
                    {
                        name:'地图',
                        type: 'map',  //地图种类
                        map: 'china', //地图类型。
                        data:[
                            {name: '北京',value: Math.round(Math.random()*500)},
                            {name: '天津',value: Math.round(Math.random()*500)},
                            {name: '上海',value: Math.round(Math.random()*500)},
                            {name: '重庆',value: Math.round(Math.random()*500)},
                            {name: '河北',value: Math.round(Math.random()*500)},
                            {name: '河南',value: Math.round(Math.random()*500)},
                            {name: '云南',value: Math.round(Math.random()*500)},
                            {name: '辽宁',value: Math.round(Math.random()*500)},
                            {name: '黑龙江',value: Math.round(Math.random()*500)},
                            {name: '湖南',value: Math.round(Math.random()*500)},
                            {name: '安徽',value: Math.round(Math.random()*500)},
                            {name: '山东',value: Math.round(Math.random()*500)},
                            {name: '新疆',value: Math.round(Math.random()*500)},
                            {name: '江苏',value: Math.round(Math.random()*500)},
                            {name: '浙江',value: Math.round(Math.random()*500)},
                            {name: '江西',value: Math.round(Math.random()*500)},
                            {name: '湖北',value: Math.round(Math.random()*500)},
                            {name: '广西',value: Math.round(Math.random()*500)},
                            {name: '甘肃',value: Math.round(Math.random()*500)},
                            {name: '山西',value: Math.round(Math.random()*500)},
                            {name: '内蒙古',value: Math.round(Math.random()*500)},
                            {name: '陕西',value: Math.round(Math.random()*500)},
                            {name: '吉林',value: Math.round(Math.random()*500)},
                            {name: '福建',value: Math.round(Math.random()*500)},
                            {name: '贵州',value: Math.round(Math.random()*500)},
                            {name: '广东',value: Math.round(Math.random()*500)},
                            {name: '青海',value: Math.round(Math.random()*500)},
                            {name: '西藏',value: Math.round(Math.random()*500)},
                            {name: '四川',value: Math.round(Math.random()*500)},
                            {name: '宁夏',value: Math.round(Math.random()*500)},
                            {name: '海南',value: Math.round(Math.random()*500)},
                            {name: '台湾',value: Math.round(Math.random()*500)},
                            {name: '香港',value: Math.round(Math.random()*500)},
                            {name: '澳门',value: Math.round(Math.random()*500)},
                            {name: '南海诸岛',value: Math.round(Math.random()*500)}
                        ],
                        itemStyle: { //地图区域的多边形 图形样式。
                            normal: {   //正常状态下的样式
                                areaColor: '#a2ebf6',
                                borderColor: '#0a53e9',//线
                                // shadowColor: '#092f8f',//外发光
                                // shadowBlur: 20    //阴影
                            },
                            emphasis:{ //高亮状态下的样试
                                label:{
                                    show:true,
                                },
                                areaColor: '#2234f7',//鼠标经过颜色
                                shadowColor: '#092f8f',//外发光
                                shadowBlur: 20    //阴影
                            }
                        },
                        zoom:1,//放大比例
                        label: {  //图形上的文本标签，可用于说明图形的一些数据信息
                            show:true,
                        },
                    },
                    {
                        type:'scatter',
                        showEffectOn: 'render',//配置什么时候显示特效
                        coordinateSystem:'geo',//该系列使用的坐标系
                        symbolSize:10,//标记的大小
                        data:[
                            {name: '宜昌', value: [111.3,30.7,130]},
                        ],
                        zlevel:99999
                    },
                ],
            },

          }
    },
      mounted() {
         /* window.addEventListener('resize', () => {
              // 自动渲染echarts
              const myChart = echarts.init(document.getElementById('provinceChart'));
              myChart.resize();
          })*/
          this.drawCharts()
      },
      methods: {
          drawCharts() {
            const myChart = echarts.init(document.getElementById('provinceChart'));
            myChart.setOption(this.options);
          },

    }
  }
</script>

<style scoped>

</style>
