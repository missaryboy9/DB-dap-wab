<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        type="index"
        label="序号"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="参数值"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="参数项"
      >
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40,50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
    <!--  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
       tableData: [{

          name: 'masterauth',
          address: ''
        }, {

          name: 'dbfilename',
          address: 'dump_7001.rdb'
        }, {

          name: 'logfile',
          address: '/home/redis/redis-cluster-7001/run/logs/redis_7001.log'
        }, {
          name: 'requirepass',
          address: ''
        }, {
          name: 'pidfile',
          address: '/home/redis/redis-cluster-7001/run/redis_7001.pid'
        },
        {
          name: 'maxmemory',
          address: '1073741824'
        }],
         total: '0',
        currentPage: 4
    }
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
}
</script>

<style>

</style>
