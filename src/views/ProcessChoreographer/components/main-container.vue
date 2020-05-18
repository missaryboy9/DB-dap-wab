<template>
  <div class="filtermain">
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
      :tab-data.sync="tableData"
      sel-name="name"
    ></el-search>
    <el-table
      :data="tableData"
      border
      :row-class-name="tableRowClassName"
      style="margin-bottom:10px"
      stripe
    >
      <template v-for="item in tableclum">
        <el-table-column
          align="center"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :show-overflow-tooltip="true"
        />
      </template>
      <el-table-column
        align="center"
        label="操作"
        class-name="tableclumstyles"
        width="300px"
      >
        <template slot-scope="scope">
          <el-button type="primary" plain icon="el-icon-edit" size="mini" class="tabBtn" @click="edit"></el-button>
          <el-button type="danger" plain icon="el-icon-delete" size="mini" class="tabBtn" @click="del(scope)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row align="bottom">
      <el-pagination
        background
        :total="10000"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :small="true"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-row>
    <div>
      <el-dialog
        title="修改应用"
        :visible.sync="dialogVisible"
        :before-close="handleClose"
        :append-to-body="true"
        custom-class="customwidth"
      >
        <el-form
          ref="form"
          :model="sizeForm"
          label-width="auto"
          size="mini"
        >
          <el-row class="showrow">
            <el-col
              :offset="1"
              :span="20"
            >
              <el-form-item label="应用编号">
                <el-input v-model="sizeForm.Numbering" />
              </el-form-item>
            </el-col>
            <el-col
              :offset="1"
              :span="20"
            >
              <el-form-item label="应用名称">
                <el-input
                  v-model="sizeForm.name"
                  type="textarea"
                />
              </el-form-item>
            </el-col>
            <el-col
              :offset="12"
              style="margin-top:20px"
            >
              <el-button
                type="primary"
                size="mini"
                plain
              >保存</el-button>
              <el-button
                type="danger"
                size="mini"
                plain
              >退出</el-button>
            </el-col>
          </el-row>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<style lang="scss">
.el-table .rowclass > td {
  padding: 4px;
}
</style>
<script type="text/ecmascript-6">
import tabledata from './tabledata';
export default {
  components: {
  },
  data() {
    return {
      showform: [
              { type: 'Input', label: '类型：', prop: 'type', width: '180px', placeholder: '请输入处理器类型...' }
      ],
      showdata: {
              type: null
      },
      sizeForm: {
        Numbering: '',
        name: ''
      },
      dialogVisible: false,
      currentPage1: 1,
      codestring: '',
      tableclum: [
        {
          prop: 'date',
          label: '类型',
          width: '60'
        },
        {
          prop: 'name',
          label: '处理器类型',
          width: '110'
        },
        {
          prop: 'address',
          label: '业务bean名称',
          width: ''
        },
        {
          prop: 'businessName',
          label: '业务bean标识',
          width: ''
        }
      ],
      tableData: tabledata
    };
  },
  created() {
  },
  methods: {
    edit() {
      this.dialogVisible = true;
    },
    del(scope) {
      this.$confirm("将删除该条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.tableData.splice(scope.$index, 1);
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
    },
    handleClose() {
      this.dialogVisible = false;
    },
    handleSizeChange() {

    },
    handleCurrentChange() { },
    tableRowClassName() {
      return 'rowclass';
    }
  }
};
</script>

<style  lang="scss">
.filtermain {
  padding: 10px;
}
.tableclumstyles {
  width: 1000px;
}
.customwidth {
  width: 20rem;
}
.el-table{
  margin-top:15px;
}
.el-pagination{
  margin-top:10px;
}
</style>
