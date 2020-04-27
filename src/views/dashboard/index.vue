<template>
  <div class="dashboard-container">
    <div id="echarts">1</div>
    <!-- <div
      id="myDiagramDiv"
      style="width:400px; height:400px; background-color: #DAE4E4;"
    /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Dashboard',
      option: {
        xAxis: {
          type: 'category',
          data: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [ 820, 932, 901, 934, 1290, 1330, 1320 ],
            type: 'line'
          }
        ]
      }
    };
  },
  mounted() {
    this.initecharts();
  },
  methods: {
    initecharts() {
      this.$initecharts(document.getElementById('echarts'), this.option);
    }
  }
};
</script>

<style lang="scss" scoped>
#echarts {
  height: 50vh;
  width: 50vh;
}
// .dashboard {
//   &-container {
//     margin: 30px;
//   }
//   &-text {
//     font-size: 30px;
//     line-height: 46px;
//   }
// }
</style>
