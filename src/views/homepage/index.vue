<template>
  <div class="homePage">
    <el-row :gutter="10">
      <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
        <div class="grid-content">
          <div class="header">
            <h2>Hello,李婧茹！👋</h2>
            <div class="date">
              <b>{{ new Date().toLocaleDateString() }}</b>
              <i class="el-icon-date" style="margin-right:4px"></i>
            </div>
          </div>
          <div class="main">
            <el-divider content-position="left">平台组件</el-divider>
            <dv-border-box-8 :reverse="true" :color="['#ebebec', '#080367']" dur="10">
              <div class="componts">
                <el-row :gutter="12" style="padding:0 10px">
                  <el-col v-for="item in route" :key="item.name" :span="24/route.length">
                    <div @click="topath(item)">
                      <el-card shadow="hover">{{ item.children[0].name }}</el-card>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="12" style="padding:10px">
                  <el-col :span="8">
                    <el-card shadow="hover">流程编排</el-card>
                  </el-col>
                  <el-col :span="8">
                    <el-card shadow="hover">消息管理</el-card>
                  </el-col>
                  <el-col :span="8">
                    <el-card shadow="hover">缓存管理</el-card>
                  </el-col>
                </el-row>
              </div>
            </dv-border-box-8>
          </div>
        </div>
      </el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="grid-content timeline">
          <div v-for="item in modulelist" :key="item.name">
            <component :is="item.name" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { homepath } from "./router";
import { timeline } from "./components";
export default {
  components: { timeline },
  data() {
    return {
      modulelist: [
        {
          name: "timeline"
        }
      ],
      route: []
    };
  },
  created() {
    homepath.then(res => {
      this.route = res.data;
    });
  },
  methods: {
    topath(e) {
      this.$router.push({ path: e.path + "/" + e.children[0].path });
    }
  }
};
</script>
<style lang="scss" scoped>
i {
  font-weight: bold;
}
.timeline {
  padding: 10px 0;
}
.header {
  width: 100%;
  padding: 20px 15px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2{
      color: #080367;
  }
  .date {
    padding: 10px;
    background-color: #ebebec;
    color: #080367;
    border-radius: 12px;
  }
}
.main {
  width: 100%;
  padding: 20px 15px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 8px;
}
.componts {
  width: 100%;
  padding: 20px 0px;
  /deep/ .el-card {
    text-align: center;
    background-color:#ebebec;
    color: #080367;
    cursor: pointer;
  }
}
</style>
