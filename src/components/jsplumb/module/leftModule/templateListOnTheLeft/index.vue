<template>
  <div
    class="temmain"
    @mouseenter="temmouseenter"
    @mouseleave="temmouseleave"
  >
    <el-collapse-transition>
      <div
        v-show="temheader"
        class="temheader"
      >

        <span />
      </div>
    </el-collapse-transition>
    <div class="temcontener">
      <slot />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import minhide from '../../../mixin/index';
export default {
  components: {

  },
  mixins: [ minhide ],
  data() {
    return {
      temheader: false

    };
  },
  methods: {
    temmouseenter() {
      this.temheader = true;
    },
    temmouseleave() {
      this.temheader = true;
    }
  }
};
</script>

<style scoped lang="scss">
.temmain {
  .temheader {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    > span {
      position: relative;
      width: 20px;
      height: 20px;
      top: 3px;
      right: 0;
      cursor: pointer;
      width: 12px;
      height: 12px;
      border: 1px solid #e0e0e0;
      outline: 10px solid #ccc;
      outline-offset: -15px;
      transform: rotate(45deg);
    }

    > span::before :hover {
      outline-color: #ccc;
      background-color: blue;
    }
  }
}
</style>
