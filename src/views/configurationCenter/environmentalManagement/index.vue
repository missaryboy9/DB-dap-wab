<template>
  <div class="applicationManagement">
    <!--
      ishandle 区分简单查询和多条件查询 true 显示筛选按钮 , false 不显示筛选按钮
      handleform 复杂查询表单
      showform 简单查询表单
      handledata 复杂查询表单值
      showdata  简单查询表单值
     -->
    <el-search
      :ishandle="false"
      :handleform="handleform"
      :showform="showform"
      :handledata="handledata"
      :showdata.sync="showdata"
    ></el-search>
    <div
      v-for="(item,key) in modulelist"
      :key="key"
    >
      <component :is="item.name" />
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import {
  newapplication,
  filtermain
} from '../components';

export default {
  components: {
    newapplication,
    filtermain
  },
  data() {
    return {
            showform: [
              { type: 'Input', label: '类型：', prop: 'type', width: '180px', placeholder: '请输入处理器类型...' }
            ],
            showdata: {
              type: null
            },
           modulelist: [
           {
               name: 'newapplication',
               sendpropos: '',
               getemit: ''
           },
          {
            name: 'filtermain',
            sendpropos: '',
            getemit: ''
          }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.applicationManagement {
  /*padding: 15px;*/
  display: flex;
  flex-direction: column;
  > :last-child {
    overflow: auto;
    height: 80vh;
    > .happy-scroll-content {
      display: block !important;
    }
  }
}
</style>
