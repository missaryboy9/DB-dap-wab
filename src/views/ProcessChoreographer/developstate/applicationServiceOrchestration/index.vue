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
          <list></list>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
import { formInfo, tableInfo, chart, list } from './components'
export default {
  components: {
    formInfo,
    tableInfo,
    chart,
    list
  },
  data() {
    return {
      activeName: 'first'
    };
  },
  mounted() {

  },
  methods: {
      handleClick(tab, event) {
        console.log(tab);
      }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/mixin.scss";

</style>
