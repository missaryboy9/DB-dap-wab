<template>
  <div class="main">
    <el-card class="myclass">
      <el-tabs :tab-position="tabPosition" style="height:80vh">
        <el-tab-pane label="穿梭框展示">
          <el-transfer
            filterable
            :filter-method="filterMethod"
            filter-placeholder="请输入城市拼音"
            v-model="value"
            :titles="['Source', 'Target']"
            :data="data"
          ></el-transfer>
        </el-tab-pane>
        <el-tab-pane label="提示展示">
          <el-divider>
            <i class="el-icon-mobile-phone"></i>
          </el-divider>
          <el-row>
            <el-button :plain="true" @click="open2" size="mini">成功</el-button>
            <el-button :plain="true" @click="open3" size="mini">警告</el-button>
            <el-button :plain="true" @click="open1" size="mini">消息</el-button>
            <el-button :plain="true" @click="open4" size="mini">错误</el-button>
          </el-row>
          <el-divider>
            <i class="el-icon-mobile-phone"></i>
          </el-divider>
          <el-row>
            <el-tooltip content="Top center" placement="top">
              <el-button size="mini">Dark</el-button>
            </el-tooltip>
            <el-tooltip content="Bottom center" placement="bottom" effect="light">
              <el-button size="mini">Light</el-button>
            </el-tooltip>
          </el-row>
          <el-divider>
            <i class="el-icon-mobile-phone"></i>
          </el-divider>
          <el-row>
            <el-alert
              title="成功提示的文案"
              type="success"
              description="文字说明文字说明文字说明文字说明文字说明文字说明"
              show-icon
            ></el-alert>
            <el-alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
            <el-alert
              title="警告提示的文案"
              type="warning"
              description="文字说明文字说明文字说明文字说明文字说明文字说明"
              show-icon
            ></el-alert>
            <el-alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="表格展示">
          <div v-for="item in modulelist" :key="item.name">
            <el-divider content-position="left">{{item.title}}</el-divider>
            <component :is="item.name" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
import { CustomTemplate, MultiSelected, TreeTable } from "./components";
export default {
  components: {
    CustomTemplate,
    MultiSelected,
    TreeTable
  },
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
      },
      tabPosition: "right",
      modulelist: [
        {
          name: "MultiSelected",
          title: "多选表格"
        },
        {
          name: "TreeTable",
          title: "树表格"
        },
        {
          name: "CustomTemplate",
          title: "自定义模版"
        }
      ]
    };
  },
  mounted() {
    // console.log(go, '11111111111111111');
  },
  methods: {
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
.myclass {
  /deep/ .el-transfer-panel__header {
    background: #eaedf4;
  }
  /deep/ .el-transfer {
    padding: 30px;
  }
  /deep/ .el-transfer-panel__body {
    height: 500px;
  }
  /deep/ .el-transfer-panel__list.is-filterable {
    height: 400px;
  }
  /deep/ .el-alert {
    margin: 15px 0;
  }
  /deep/ .el-tabs__content {
    height: 100%;
    overflow: auto;
  }
  /deep/ .el-tabs__content::-webkit-scrollbar {
    width: 0 !important;
  }
  /deep/ .el-transfer-panel {
    border-radius: 8px;
  }
}
.myclass {
  /deep/
    .el-transfer-panel
    .el-transfer-panel__header
    .el-checkbox
    .el-checkbox__label {
    font-size: 14px;
  }
  /deep/ .el-transfer-panel .el-transfer-panel__header .el-checkbox {
    line-height: 30px;
  }
  /deep/ .el-transfer-panel .el-transfer-panel__header {
    height: 30px;
    line-height: 30px;
  }
  /deep/ .el-button {
    padding: 7px 15px;
  }
}
</style>
