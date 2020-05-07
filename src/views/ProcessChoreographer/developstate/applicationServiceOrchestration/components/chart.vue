<template>
  <div class="chart">
      <div id="myCharts" ref="myCharts"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      
    }
  },
  mounted(){
    const myCharts = this.$echarts.init(this.$refs.myCharts);
    let options = {
          title: { 
             text: '资源总限流/熔断',   //图表顶部的标题 
             subtext: '纯属虚构'    //副标题
          },
          tooltip: {   //鼠标悬浮框的提示文字
              trigger: 'axis'
            },
          legend: {
            data:['资源总限流','资源总熔断']
          },
          xAxis : [{  //x轴坐标数据
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
            }],
           yAxis : [{   //y轴坐标数据
              type : 'value',
              axisLabel : {
                formatter: '{value}'
              }
            }],
          series: [  //驱动图表生成的数据内容数组，几条折现，数组中就会有几个对应对象，来表示对应的折线
            {
              name:"资源总限流",
              type: "line",  //pie->饼状图  line->折线图  bar->柱状图
              data:[11, 11, 15, 13, 12, 13, 10], 
              },
            {
              name:"资源总熔断",
              type: "line",  //pie->饼状图  line->折线图  bar->柱状图
              data:[1, -2, 2, 5, 3, 2, 0],
              }
     ]}
     myCharts.setOption(options);
  }
}
</script>

<style lang="scss" scoped>
#myCharts{
  width:600px;
  height:400px;
}
</style>
