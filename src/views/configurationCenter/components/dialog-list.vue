<template>
  <div>
    <div class="vtable">
      <el-row>
        <el-col :span="24">
          <el-table
            :data="tableData"
            style="width: 100%"
            :span-method="objectSpanMethod"
            size="mini"
            :fit="true"
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
          >
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column label="配送信息">
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column label="地址">
                <el-table-column prop="province" label="省份"></el-table-column>
                <el-table-column prop="city" label="市区"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column prop="zip" label="邮编"></el-table-column>
              </el-table-column>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <glb-pagination :current-page.sync="currentPage" :articles-per-page="10" :totaldate="55"></glb-pagination>
        </el-col>
      </el-row>
    </div>
    <div class="bottom">
      <span class="pagination"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DialogList",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      currentPage: 1,
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  methods: {
    // 修改table header的背景色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background: #eaedf4;";
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    }
  }
};
</script>

<style lang='scss'>
.vtable {
  border: 1px solid #eaedf4;
  margin-bottom: 10px;
}
.bottom {
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 1fr 4fr;
  align-items: center;
}
.pagination {
  display: grid;
  justify-items: end;
}
</style>
