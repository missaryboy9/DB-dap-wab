<template>
  <div class="cardpage">
    <div class="left">
      <div class="leftinner">
        <i
          class="el-icon-milk-tea iconsize"
          :style="'color:' + testcolor"
        />
      </div>
    </div>
    <div class="right">
      <p>￥1234123213</p>
      <p>一月数据</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {

  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    obj: {
      type: Object,
      default: () => {

      }
    }
  },
  data() {
    return {
      testcolor: '#04BE68'
    };
  }
};
</script>
<style lang="scss" scoped>
.cardpage:active {
  background-color: #00bf6f;
  .left {
    .leftinner {
      background-color: #fff;
    }
  }
  .right > p {
    color: #fff;
  }
}
</style>
<style scoped lang="scss">
.cardpage {
  transition: background-color 0.1s;
  cursor: pointer;
  height: 13vh;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 1px #ccc;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "gr gd";
  background-color: #fff;

  .left {
    grid-area: gr;
    display: flex;
    align-items: center;
    justify-content: center;
    .leftinner {
      transform: translateX(10%);
      background-color: #d1f1e2;
      height: 70%;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      .iconsize {
        font-size: 40px;
      }
    }
  }
  .right {
    grid-area: gd;
    display: flex;
    justify-content: center;
    flex-direction: column;
    > :first-child {
      font-size: 20px;
      font-weight: 600;
    }
    > :last-child {
      margin-top: 10px;
      color: #ccc;
    }
    p {
      transform: translateX(-10%);
      padding: 0;
      margin: 0;
    }
  }
}
</style>
