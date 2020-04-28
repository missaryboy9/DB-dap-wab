<template>
  <div class="main">
    <el-card style="height:700px">
      <el-header>
        <el-page-header @back="goBack" content="详情页面"></el-page-header>
      </el-header>
      <el-container class="myclass" style="padding:0 20px">
        <el-transfer
          filterable
          :filter-method="filterMethod"
          filter-placeholder="请输入城市拼音"
          v-model="value"
          :data="data"
        ></el-transfer>
      </el-container>
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    const generateData = _ => {
      const data = [];
      const cities = ["上海", "北京", "广州", "深圳", "南京", "西安", "成都"];
      const pinyin = [
        "shanghai",
        "beijing",
        "guangzhou",
        "shenzhen",
        "nanjing",
        "xian",
        "chengdu"
      ];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data;
    };
    return {
      data: generateData(),
      value: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      }
    };
  },
  mounted() {
    // console.log(go, '11111111111111111');
  },
  methods: {
    goBack() {
      console.log("go back");
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/mixin.scss";
.main {
  @include innerpadding(15px);
}
.myclass /deep/ .el-transfer-panel__header {
  background: #080367;
}
.myclass
  >>> .el-transfer-panel
  .el-transfer-panel__header
  .el-checkbox
  .el-checkbox__label {
  color: white;
}
.myclass
  >>> .el-transfer-panel
  .el-transfer-panel__header
  .el-checkbox
  .el-checkbox__label
  span {
  color: white;
}
</style>
