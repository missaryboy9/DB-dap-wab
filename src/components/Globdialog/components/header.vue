<template>
  <div class="headermain">
    <p>{{ $attrs.titlename }}</p>
    <div class="iconzoom" @click="zoom">
      <span>{{ Isfull? '\ue60e':'\ue60f' }}</span>
    </div>
    <div class="iconclose" @click="hidedia">
      <!-- <div class="icon" /> -->
      <span class="el-icon-close"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  inheritAttrs: false,
  props: {},
  data() {
    return {
      Isfull: false
    };
  },
  methods: {
    hidedia() {
      this.$emit("closedialog");
    },
    zoom() {
      this.Isfull = !this.Isfull;
      this.$emit("isfull", this.Isfull);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../style/base.scss";
@import "../style/mixin.scss";
.headermain {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  font-family: glbfonticon;
  background-color: #f4f1f2;
  p {
    margin: 0;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 5px;
    flex: 2;
  }
  .iconzoom {
    background-color: #080367;
    box-shadow: 3px 3px 10px #000;
    transition: 0.5s box-shadow ease;
    border-radius: 5px;
    cursor: pointer;
    width: 16px;
    height: 16px;
    display: flex;
    flex: 1;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    span {
      font-size: 12px;
      color: #fff;
    }
    &:hover {
      box-shadow: 0px 0px 0px #000;
    }
  }
  .iconclose {
    width: 16px;
    height: 16px;
    display: flex;
    background-color: #080367;
    box-shadow: 3px 3px 10px #000;
    transition: 0.5s box-shadow ease;
    border-radius: 5px;
    cursor: pointer;
    flex: 1;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    span {
      font-size: 14px;
      font-weight: 900;
      color: #fff;
    }
    .icon {
      @include spanicon(16px, 16px);
    }
  }
  .iconclose:hover {
    box-shadow: 0px 0px 0px #000;
  }
}
</style>
