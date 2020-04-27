
<template>
  <div
    v-if="show"
    v-clickoutside="clickoutside"
    class="toastmessagemain"
    :style="{top:clientY + 'px' ,left:clientX + 'px'}"
  >
    <el-row>
      <div class="nodeclass">
        <i>
          操作模板数据
        </i>
      </div>
    </el-row>
    <el-row>
      <el-col
        class="iconfonttoast"
        :span="4"
      > <span>&#xe68e;</span></el-col>
      <el-col :span="20">
        <component
          :is="item"
          v-for="(item, index) in componentslist.filter(e => e.name === type )"
          :key="index"
          :ref="item.name"
        ></component>
      </el-col>
    </el-row>
    <el-row
      type="flex"
      justify="end"
      :gutter="10"
    >
      <el-col :span="8">
        <el-button
          size="mini"
          round
          type="danger"
          @click="cancel"
        >取消</el-button>
      </el-col>
      <el-col :span="8">

        <el-button
          type="primary"
          size="mini"
          round
          @click="edit"
        >确定</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
import clickoutside from '@/common/js/clickoutside';
import componentslist from './components'
export default {
  directives: {
    clickoutside
  },
  components: {

  },
  data() {
    return {
      show: true,
      componentslist: componentslist
    }
  },
  watch: {
    show(e) {
      if (!e) {
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    clickoutside() {
      this.show = false
    },
    handleScroll(e) {
      this.show = false
    },
    cancel() {
      this.show = false
    },
    edit() {
      this.success(this.$refs[ this.type ][ 0 ])
      this.show = false
    }
  }
}
</script>

<style scoped lang="scss">
.toastmessagemain {
  position: fixed;
  background-color: rgba($color: #cccccc, $alpha: 0.8);
  padding: 10px;
  border-radius: 5px;
  font-family: glbfonticon;
}
.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.nodeclass {
  font-size: 10px;
  border-left: 3px solid #67c23a;
  padding-left: 10px;
}
.iconfonttoast {
  font-size: 25px;
  color: #080367;
}
</style>
