<template>
  <div class="chart">
    <dv-capsule-chart :config="config" style="width:300px;height:200px" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
          data: [
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 123
          },
          {
            name: '漯河',
            value: 98
          },
          {
            name: '郑州',
            value: 75
          },
          {
            name: '西峡',
            value: 66
          }
        ],
        colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
        unit: '单位'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chart{
   background-color:#000
}
</style>
