<template>
  <div class="main">
    <h3>详情页展示</h3>
    <el-card class="box-card">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="表单详情" name="first">
          <formInfo></formInfo>
        </el-tab-pane>
        <el-tab-pane label="表格详情" name="second">
          <tableInfo></tableInfo>
        </el-tab-pane>
        <el-tab-pane label="图表详情" name="third">
          <chart></chart>
        </el-tab-pane>
        <el-tab-pane label="列表详情" name="fourth">
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
import { formInfo, tableInfo, chart } from './components'
export default {
  components: {
    formInfo,
    tableInfo,
    chart
  },
  data() {
    return {
      activeName: 'second'
    };
  },
  mounted() {

  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/mixin.scss";

</style>
