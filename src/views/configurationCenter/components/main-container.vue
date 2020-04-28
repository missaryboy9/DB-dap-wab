<template>
  <div class="filtermain">
    <el-table
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      :row-class-name="tableRowClassName"
      style="margin-bottom:10px;border:1px solid #eaedf6;"
      :header-cell-style="headerCellStyle"
      stripe
    >
      <template v-for="(item,index) in tableclum">
        <el-table-column
          :key="index"
          align="center"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :show-overflow-tooltip="true"
        ></el-table-column>
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
            circle
            icon="el-icon-edit"
            @click="edit"
          ></el-button>
          <el-button
            size="mini"
            circle
            icon="el-icon-delete"
            @click="del(scope)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <Glb-diadlog
      :show.sync="show"
      titlename="编辑应用"
    >
      <fromdata @closetag="closetag">
      </fromdata>
    </Glb-diadlog>
    <el-row align="bottom">
      <el-col :span="24">
        <glb-pagination
          :current-page.sync="currentPage"
          :articles-per-page="pageSize"
          :totaldate="tableData.length"
        >
        </glb-pagination>
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
import fromdata from "./fromdata";
import tabledata from "./tabledata";
import listnone from "./listnone";
export default {
  components: {
    listnone,
    fromdata
  },
  data() {
    return {
      show: false,
      sizeForm: {
        Numbering: "",
        name: ""
      },
      dialogVisible: false,
      currentPage: 1,
      pageSize:10,
      codestring: "",
      tableclum: [
        {
          prop: "date",
          label: "类型",
          width: "60"
        },
        {
          prop: "name",
          label: "处理器类型",
          width: "110"
        },
        {
          prop: "address",
          label: "业务bean名称",
          width: ""
        },
        {
          prop: "businessName",
          label: "业务bean标识",
          width: ""
        }
      ],
      tableData: tabledata
    };
  },
  /**
   *  date: '内置2',
    name: '认证类',
    address: '非空校验',
    businessName: 'PLUGIN_CHECK'
   */
  mounted() {
    this.$bus.$on('addtablelist', (e) => {
      let { applicationfrom } = e
      this.tableData.push({
        date: '内置2',
        name: applicationfrom.number,
        address: applicationfrom.acse,
        businessName: 'PLUGIN_CHECK'
      })
    })
  },
  beforeDestroy() {
    this.$bus.$off('addtablelist')
  },
  methods: {
    closetag() {
      this.show = false
    },
    handleClose() {
      this.dialogVisible = false;
    },
    headerCellStyle({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #eaedf6;'
      }
    },
    handleSizeChange() { },
    handleCurrentChange() { },
    edit() {
      this.show = true;
    },
    del(scope) {
      this.$confirm("将删除该条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.tableData.splice(scope.$index, 1)
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
    tableRowClassName() {
      return "rowclass";
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
.el-table__header tr,
.el-table__header th {
  padding: 0;
  height: 34px;
}
.el-table__body tr,
.el-table__body td {
  padding: 0;
  height: 34px;
}
</style>
