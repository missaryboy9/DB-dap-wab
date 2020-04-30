<template>
  <div class="main">
    <el-collapse v-model="activeName" accordion @change="change" class="myclass">
      <el-collapse-item name="1">
        <template slot="title">
          基础表格
          <i class="header-icon el-icon-price-tag"></i>
        </template>
        <TableTpl></TableTpl>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          带斑马纹表格
          <i class="header-icon el-icon-price-tag"></i>
        </template>
        <TableTpl stripe></TableTpl>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          带边框表格
          <i class="header-icon el-icon-price-tag"></i>
        </template>
        <TableTpl border></TableTpl>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          固定表头
          <i class="header-icon el-icon-price-tag"></i>
        </template>
        <TableTpl height="250"></TableTpl>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script type="text/ecmascript-6">
import TableTpl from "./tableTemplate";
export default {
  components: { TableTpl },
  data() {
    return {
      activeName: "1"
    };
  },
  mounted() {},
  methods: {
    change(activeName) {
      console.log(activeName);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/mixin.scss";
.main {
  @include innerpadding(15px);
}
.myclass /deep/ .el-collapse-item__header{
    padding-left: 20px;
}
</style>
