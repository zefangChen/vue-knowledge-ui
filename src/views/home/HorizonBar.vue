<template>
    <div style="height: 380px;width: 1000px;margin: 20px;" id="horizonBar"></div>
</template>

<script>
  import echarts from 'echarts'
  import 'echarts/map/js/china'
  export default {
    name: 'horizonBar',
      data() {
          return {
              options : {
                  title: {
                      text: '世界人口总量',
                      subtext: '数据来自网络'
                  },
                  tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                          type: 'shadow'
                      }
                  },
                  legend: {
                      data: []
                  },
                  grid: {
                      left: '3%',
                      right: '4%',
                      bottom: '3%',
                      containLabel: true
                  },
                  xAxis: {
                      show: false,  //不显示x轴坐标刻度
                      type: 'value',
                      boundaryGap: [0, 0.01]
                  },
                  yAxis: {
                      show: true,
                      type: 'category',
                      inverse: true,  //是否反向显示数据
                      axisLine: {
                          show: false  //不显示竖线坐标
                      },
                      axisTick: {
                          show: false   //不显示刻度线
                      },
                      axisPointer: {
                          label: {
                              show: true,
                              margin: 30
                          }
                      },
                      data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
                  },
                  series: [
                      {
                          name: '2012年',
                          type: 'bar',
                          label: {
                              show: true,  //右边数据显示
                              position: 'right',
                              color: '#333333',
                              fontSize: 14,
                              offset: [10, 0]
                          },
                          data: [19325, 23438, 31000, 121594, 134141, 681807],
                          barWidth: '30px',  //柱状图每个柱子的宽度
                          barCategoryGap : '30%',  //柱子间距
                          itemStyle: {
                              normal: {
                                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{   //0, 0, 0, 1是从上到下的变化
                                      offset: 1,
                                      color: 'rgb(57,89,255,1)'
                                  }, {
                                      offset: 0,
                                      color: 'rgb(46,200,207,1)'
                                  }]),  //渐变色控制
                                  barBorderRadius: [0,50,50,0]  //控制柱子的圆角
                              },
                          }
                      }
                  ]
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
            const myChart = echarts.init(document.getElementById('horizonBar'));
            myChart.setOption(this.options);
          },

    }
  }
</script>

<style scoped>

</style>
