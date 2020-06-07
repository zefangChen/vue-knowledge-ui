<template>
    <div style="height: 880px;width: 1000px;margin: 20px;" id="LabelType"></div>
</template>

<script>
  import echarts from 'echarts'
  import 'echarts/map/js/china'
  export default {
    name: 'LabelType',
      data() {
          return {
              colorList : [[
                  '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
                  '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
                  '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
                  '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
              ],
                  [
                      '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
                      '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
                      '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
                      '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
                  ],
                  [
                      '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
                      '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
                      '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
                      '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
                  ]][2],
              options : {
                  title: {
                      show:true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
                      // text: '微博热搜榜话题图谱',//主标题文本，'\n'指定换行
                      x: 'center',        // 水平安放位置，默认为左对齐，可选为：
                      // 'center' ¦ 'left' ¦ 'right'
                      // ¦ {number}（x坐标，单位px）
                      y: 'bottom',             // 垂直安放位置，默认为全图顶端，可选为：
                      // 'top' ¦ 'bottom' ¦ 'center'
                      // ¦ {number}（y坐标，单位px）
                      //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
                      backgroundColor: 'rgba(0,0,0,0)',
                      // borderColor: '#ccc',    // 标题边框颜色
                      borderWidth: 0,         // 标题边框线宽，单位px，默认为0（无边框）
                      padding: 5,             // 标题内边距，单位px，默认各方向内边距为5，
                                              // 接受数组分别设定上右下左边距，同css
                      itemGap: 10,            // 主副标题纵向间隔，单位px，默认为10，
                      textStyle: {
                          fontSize: 18,
                          // fontWeight: 'bolder',
                          color: '#fff'        // 主标题文字颜色
                      },
                      subtextStyle: {
                          color: '#fff'        // 副标题文字颜色
                      }
                  },
                  // backgroundColor: '#000',
                  tooltip: {},
                  animationDurationUpdate: function(idx) {
                      // 越往后的数据延迟越大
                      return idx * 100;
                  },
                  animationEasingUpdate: 'bounceIn',
                  color: ['#fff', '#fff', '#fff'],
                  series: [{
                      type: 'graph',
                      layout: 'force',
                      force: {
                          repulsion: 500,  //控制最外层div的大小
                          edgeLength: 10
                      },
                      roam: false,  //控制最外层div是否可以拖拽
                      label: {
                          normal: {
                              show: true  //是否显示标签
                          }
                      },
                      data: [
                          {"name": "绘画", "value": 2058124, "symbolSize": 143, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": '#fdff8b', "color": '#433e7c' } } },
                          {"name": "摄影", "value": 1751491, "symbolSize": 132, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": '#2d77ff', "color": '#ff7f50' } } },
                          {"name": "读书", "value": 1642587, "symbolSize": 128, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": '#3893ff', "color": '#ff7f50' } } },
                          {"name": "唱歌", "value": 1524287, "symbolSize": 123, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": '#70ffb9', "color": '#75ff5d' } } },
                          {"name": "乃万甩话筒", "value": 1435649, "symbolSize": 119, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": '#ff7f50', "color": '#71ff77' } } },
                          {"name": "合作舞台", "value": 1301903, "symbolSize": 114, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": '#ff7f50', "color": '#653220' } } },
                          {"name": "蓬松的", "value": 1150224, "symbolSize": 107, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": '#2d77ff', "color": '#ff7f50' } } },
                          {"name": "", "value": 1008954, "symbolSize": 60, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": '#cdcdcd', "color": '#dfdfe3' } } },
                          // {"name": "", "value": 1008954, "symbolSize": 30, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": '#cbf3ff', "color": '#ff7f50' } } }
                      ]
                  }]
              },


          }
    },
      mounted() {
          this.drawCharts()
      },
      methods: {
          drawCharts() {
              const myChart = echarts.init(document.getElementById('LabelType'));
              myChart.setOption(this.options);
          },


    }
  }
</script>

<style scoped>

</style>
