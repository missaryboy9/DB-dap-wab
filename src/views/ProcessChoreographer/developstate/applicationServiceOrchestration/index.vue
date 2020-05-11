<template>
  <div class="main">
    <el-card class="box-card">
      <div class="detailTop"> <span class="detail-title">{{title}}</span><span :class='["detail-back", "el-icon-arrow-left",backClick&&"backClick"]' @click="backFun">返回</span></div>
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
      activeName: 'first',
      backClick:false,
      title:'详情页'
    };
  },
  mounted() {

  },
  methods: {
      handleClick(tab, event) {
        console.log(tab);
      },
      backFun(){
          console.log('bbb')
          this.backClick=true
      }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/mixin.scss";
 /deep/ .el-card__body{
  padding: 15px 20px;
}
.detailTop{
  position: relative;
  padding-left: 10px;
  margin-bottom: 15px;
  margin-left: -15px;
  font-weight: bold;
  &:after{
    content:"";
    position: absolute;
    width: 5px;
    height: 18px;
    background: #fc4b3b;
    left: -5px;
    top:3px;
  }
  .detail-title{
    display: inline-block;
  }
  .detail-back{
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
  .backClick{
    color: #080367;
  }
}


</style>
