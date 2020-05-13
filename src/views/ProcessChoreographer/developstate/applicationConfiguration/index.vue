<template>
  <div class="main">
    <div class="app-container">
      <el-input
        v-model="filename"
        size="mini"
        placeholder="请输入文件名（默认excel-list)"
        style="width:350px;"
        prefix-icon="el-icon-document"
      />
      <el-button
        :loading="downloadLoading"
        style="margin-bottom:20px"
        size="mini"
        type="primary"
        icon="el-icon-document"
        @click="handleDownload"
      >导出选择项</el-button>
      <el-table
        ref="multipleTable"
        :data="tableData"
        border
        size="mini"
        highlight-current-row
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" align="center" />
        <el-table-column align="center" prop="id" label="Id" width="50">
          <template slot-scope="scope">{{ scope.$index+1 }}</template>
        </el-table-column>
        <el-table-column align="center" label="类型" prop="date">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="处理器类型" prop="name" align="center">
          <template slot-scope="scope">
            <el-tag size="mini">{{ scope.row.name }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" label="业务bean名称" prop="address">
          <template slot-scope="scope">
            <span>{{ scope.row.address }}</span>
          </template>
        </el-table-column>
         <el-table-column align="center" label="业务bean标识" prop="businessName" width="220">
          <template slot-scope="scope">
            <span>{{ scope.row.businessName }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import tabledata from "../../components/tabledata";
export default {
  data() {
    return {
      multipleSelection: [],
      downloadLoading: false,
      filename: "",
      tableData: tabledata
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleDownload() {
      if (this.multipleSelection.length) {
        this.downloadLoading = true;
        import("@/vendor/Export2Excel").then(excel => {
          const tHeader = ["类型", "处理器类型", "业务bean名称", "业务bean标识"];
          const filterVal = [
            "date",
            "name",
            "address",
            "businessName"
          ];
          debugger
          const list = this.multipleSelection;
          const data = this.formatJson(filterVal, list);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: this.filename
          });
          this.$refs.multipleTable.clearSelection();
          this.downloadLoading = false;
        });
      } else {
        this.$message({
          message: "请至少选择一条",
          type: "warning"
        });
      }
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }
  }
};
</script>

<style scoped lang="scss">
</style>
