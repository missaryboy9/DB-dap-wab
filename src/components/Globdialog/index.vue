<template>
  <div class="dialogmain">
    <div v-if="show" class="mask" />
    <transition name="el-fade-in-linear">
      <div
        v-if="show"
        v-clickoutside="clickout"
        v-movedialog
        class="pop-upLayer"
        :class="[mainstyle,isfull?'fullcree':'']"
      >
        <div class="pop-upLayerHeader" @headehideclick="hideclick">
          <headertop
            ref="headertop"
            v-bind="$attrs"
            @closedialog="closedialog"
            @isfull="clickisfull"
          />
        </div>
        <div class="pop-upLayerMAIN">
          <slot />
        </div>
        <div class="pop-upLayerfooter">
          <slot name="footer" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import headertop from "./components/header";
import clickoutside from "@/common/js/clickoutside";
import movedialog from "./config/plugInUnit";
export default {
  name: "GlbDiadlog",
  directives: {
    clickoutside,
    movedialog
  },
  components: {
    headertop
  },
  inheritAttrs: false,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    mainstyle: {
      type: String,
      default: "larger"
    },
    showtype: {
      type: Object,
      default: () => {
        return {
          type: false,
          second: 3
        };
      }
    },
    clickouthide: {
      type: Boolean,
      default: false
    },
    appendchildtobody: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isfull: ""
    };
  },
  watch: {
    show: function(val) {
      if (this.showtype.type && val) {
        if (this.appendchildtobody) {
          document.body.appendChild(this.$el);
        }
        setTimeout(() => {
          this.hideclick();
        }, this.showtype.second * 1000);
      }
    }
  },
  mounted() {
    if (this.appendchildtobody) {
      document.body.appendChild(this.$el);
    }
  },
  destroyed() {
    this.$el.parentNode.removeChild(this.$el);
  },
  methods: {
    clickisfull(e) {
      this.isfull = e;
    },
    clickout() {
      if (this.clickouthide) {
        this.hideclick();
      }
    },

    close() {
      this.hideclick();
    },
    async hideclick(event) {
      await this.beforeclose();
      this.$emit("update:show", false);
    },
    beforeclose() {
      return Promise.resolve(
        (() => {
          // alert('这是关闭弹窗前的回调');
          this.$emit("beforeclose");
        })()
      );
    },
    closedialog() {
      this.hideclick();
    }
  }
};
</script>

<style scoped lang="scss">
@import "./style/base.scss";
@import "./style/mixin.scss";
.dialogmain {
  .mask {
    @include positionre;
  }
  .pop-upLayer {
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    @include postionab;
    box-shadow: 10px 5px 15px rgb(61, 52, 52);
    .pop-upLayerHeader {
      height: 42px;
      line-height: 42px;
    }
    .pop-upLayerMAIN {
      flex: 8;
      // background-color: #f9fbfd;
      // border-bottom: 2px dashed #676597;
      // border-top: 2px solid #676597;
      overflow: auto;
      padding: 10px 20px;
      &::-webkit-scrollbar {
        width: 0 !important;
      }
    }
    .pop-upLayerfooter {
      flex: 0.3;
      padding: 10px 20px;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "./style/base.scss";
/**
$minwidth:30
$default: 50%;
$larger: 80%;
 */
.minwidth {
  height: 30vh;
  width: $minwidth;
  min-width: $minwidth;
}
.default {
  height: 50vh;
  width: $default;
  min-width: $default;
}
.larger {
  height: 80vh;
  width: $larger;
}
.fullcree {
  left: 50% !important;
  top: 50% !important;
  height: 100%;
  width: 100%;
}
</style>
