<template>
  <div class="main">
    <el-card>
      <el-page-header @back="goBack" title="返回首页" content="穿梭框展示"></el-page-header>
    </el-card>
    <el-card style="height:700px;margin-top:20px;padding:0 20px">
      <el-row class="myclass">
        <el-transfer
          filterable
          :filter-method="filterMethod"
          filter-placeholder="请输入城市拼音"
          v-model="value"
          :data="data"
        ></el-transfer>
      </el-row>
      <el-row style="margin-top:20px">
        <div>
          <el-button :plain="true" @click="open2">成功</el-button>
          <el-button :plain="true" @click="open3">警告</el-button>
          <el-button :plain="true" @click="open1">消息</el-button>
          <el-button :plain="true" @click="open4">错误</el-button>
        </div>
      </el-row>
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
      this.$router.push("/");
    },
    open1() {
      this.$message("这是一条消息提示");
    },
    open2() {
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success"
      });
    },

    open3() {
      this.$message({
        message: "警告哦，这是一条警告消息",
        type: "warning"
      });
    },

    open4() {
      this.$message.error("错了哦，这是一条错误消息");
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
