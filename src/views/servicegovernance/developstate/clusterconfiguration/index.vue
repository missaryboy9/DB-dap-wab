<template>
  <div class="main">
    <!--
      ishandle 区分简单查询和多条件查询 true 显示筛选按钮 , false 不显示筛选按钮
      handleform 复杂查询表单
      showform 简单查询表单
      handledata 复杂查询表单值
      showdata  简单查询表单值
     -->
    <el-search
      :ishandle="false"
      :showform="showform"
      :showdata="showdata"
    ></el-search>
    <el-button type="primary" size="mini"><i class="el-icon-plus"></i>新增配置</el-button>
    <tree-table
      :data="tabledata"
      :columns="columns"
      :selection-type="false"
      :expand-type="false"
      border
      :tree-type="true"
    >
      <tempalte slot="isok" slot-scope="scope">
        <el-button size="mini" type="primary" icon="el-icon-edit" class="tabEdit" plain></el-button>
        <el-button size="mini" type="danger" icon="el-icon-delete" class="tabDel" plain></el-button>
      </tempalte>
    </tree-table>
  </div>
</template>

<script type="text/ecmascript-6">
import tabledata from "./tabledata"
export default {
  data() {
    let opt = [{ label: 'cluster_openApi', value: 'cluster_openApi' }, { label: 'euos_cluster', value: 'euos_cluster' }, { label: 'Cluster_zecard', value: 'Cluster_zecard' }]
     let optProps = []
    return {
       showform: [
          { type: 'Select', label: '集群', prop: 'type', width: '180px', options: opt, props: optProps, change: row => '', placeholder: '请输入集群类型...' }
       ],
       showdata: {
              type: null
        },
      tabledata: tabledata,
      columns: [
        { label: "应用名称", prop: 'appName' },
        { label: "集群名称", prop: 'clusterName' },
        { label: "限流模式", prop: 'limitModel' },
        { label: "实例数", prop: 'limitModel' },
        { label: "流行框架", prop: 'limitFrame' },
        { label: "应用框架", prop: 'appFrame' },
        { label: "操作", type: 'template', template: 'isok', width: "200px" }
      ]
    };
  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
.el-button{
  margin:10px 0px;
}
</style>
