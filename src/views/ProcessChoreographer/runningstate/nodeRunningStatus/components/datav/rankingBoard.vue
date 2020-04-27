<template>
  <div id="ranking-board">
    <div class="ranking-board-title">服务调用数排行</div>
    <dv-scroll-ranking-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'RankingBoard',
  data () {
    return {
      config: {
        data: [
          {
            name: '服务1',
            value: 55
          },
          {
            name: '服务2',
            value: 120
          },
          {
            name: '服务3',
            value: 78
          },
          {
            name: '服务4',
            value: 66
          },
          {
            name: '服务5',
            value: 80
          },
          {
            name: '服务6',
            value: 45
          },
          {
            name: '服务7',
            value: 29
          },
          {
            name: '服务8',
            value: 29
          },
          {
            name: '服务9',
            value: 29
          }
        ],
        rowNum: 9
      }
    }
  }
}
</script>

<style lang="scss">
#ranking-board {
  width: 20%;
  box-shadow: 0 0 3px blue;
  display: flex;
  flex-direction: column;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  box-sizing: border-box;
  padding: 0px 30px;

  .ranking-board-title {
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .dv-scroll-ranking-board {
    flex: 1;
  }
}
</style>
