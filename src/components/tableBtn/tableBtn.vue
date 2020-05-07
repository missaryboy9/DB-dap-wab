<template>
  <div class="tabBtn">
    <span class="el-icon-edit-outline tabBtn-edit" @click="edit"></span>
    <span class="el-icon-delete tabBtn-delete" @click="del"></span>
  </div>
</template>
<script>
export default {
  props: {
    "row": {
      type: Object,
      default: () => {}
    },
    "tableList": {
       type: Array,
       default: () => []
    },
    'show': {
       type: Boolean
    }
  },
  data() {
    return {
       tableDate: this.tableList
    }
  },
  watch: {
    tableDate(newVal, oldVal) {
      // 在监听你使用update事件来更新word,而在父组件不需要调用该函数
      this.$emit('update:tableList', newVal);
    }
  },
  created() {

  },
  methods: {
    edit() {
       this.$emit('update:show', true);
    },
    del() {
      this.$confirm("将删除该条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.tableData.splice(this.row.$index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.tabBtn{
  > span {
    padding: 3px 5px;
    background-color: #fff;
    &:hover {
      cursor: pointer;
    }
  }
}
.tabBtn-edit{
  border: 1px solid #ccc;
  border-right: none;
  color:#080367;
}
.tabBtn-delete{
  color: #f04b3b;
  border: 1px solid #ccc;

  margin-left: -5px;
}
</style>
