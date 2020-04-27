<template>
  <div class="filtermain">
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
          <el-button
            size="mini"
            type="primary"
            @click="edit"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="del"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row align="bottom">
      <el-col :span="4">
        共100条
      </el-col>
      <el-col
        :span="6"
        :offset="12"
      >
        <el-pagination
          background
          :total="10000"
          :current-page.sync="currentPage1"
          :page-size="100"
          layout=" prev, pager, next"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-col>
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
              >保存</el-button>
              <el-button
                type="danger"
                size="mini"
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
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    handleSizeChange() {

    },
    handleCurrentChange() { },
    edit() {
      this.dialogVisible = true;
    },
    del() { },
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
</style>
