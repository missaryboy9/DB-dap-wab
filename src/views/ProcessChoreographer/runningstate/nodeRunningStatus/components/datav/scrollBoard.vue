<template>
  <div id="scroll-board">
    <dv-scroll-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'ScrollBoard',
  data () {
    return {
      config: {
        header: ['调用时间', '服务名称', '调用次数', '服务描述'],
        data: [
          ['2019-07-01 19:25:00', '服务1', '5', 'xxxxxxx'],
          ['2019-07-02 17:25:00', '服务1', '13', 'xxxxxxx'],
          ['2019-07-03 16:25:00', '服务1', '6', 'xxxxxxx'],
          ['2019-07-04 15:25:00', '服务1', '2', 'xxxxxxx'],
          ['2019-07-05 14:25:00', '服务1', '1', 'xxxxxxx'],
          ['2019-07-06 13:25:00', '服务1', '3', 'xxxxxxx'],
          ['2019-07-07 12:25:00', '服务1', '4', 'xxxxxxx'],
          ['2019-07-08 11:25:00', '服务1', '2', 'xxxxxxx'],
          ['2019-07-09 10:25:00', '服务1', '5', 'xxxxxxx'],
          ['2019-07-10 09:25:00', '服务1', '3', 'xxxxxxx']
        ],
        index: true,
        columnWidth: [50, 120, 120],
        align: ['center'],
        rowNum: 7,
        headerBGC: '#1981f6',
        headerHeight: 45,
        oddRowBGC: 'rgba(0, 44, 81, 0.8)',
        evenRowBGC: 'rgba(10, 29, 50, 0.8)'
      }
    }
  }
}
</script>

<style lang="scss">
#scroll-board {
  width: 50%;
  box-sizing: border-box;
  margin-left: 20px;
  height: 100%;
  overflow: hidden;
}
</style>
