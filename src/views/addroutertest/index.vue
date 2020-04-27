<template>
  <div class="page">
    {{ title }}
    {{ news }}
    <el-row class="rowtop">
      <!-- <el-col :span="5">
        <el-button @click="BTNgetnews"> 请求测试</el-button>
        <el-button @click="BTNtables"> 表格数据加载</el-button>
      </el-col> -->
      <el-col :span="3">
        <el-select
          v-model="value"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="2" />
      <el-col :span="9">
        <el-button
          type="primary"
          icon="el-icon-circle-plus-outline"
          @click="addsubmit"
        >新增实例</el-button>
        <el-button
          type="success"
          icon="el-icon-video-play"
        >启动实例</el-button>
        <el-button
          type="danger"
          icon="el-icon-video-pause"
        >停止实例</el-button>
      </el-col>
    </el-row>
    <el-row class="rowtable">
      <template>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" />
          <el-table-column
            label="实例"
            align="center"
          >
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="name"
            label="实例端口"
          />
          <el-table-column
            align="center"
            prop="address"
            label="状态"
            show-overflow-tooltip
          />
          <el-table-column
            label="操作"
            align="center"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button>
              <el-button
                size="mini"
                type="success"
                @click="handlesunmit(scope.$index, scope.row)"
              >submit</el-button>
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button>

            </template>
          </el-table-column>
        </el-table>
      </template>
      <el-col class="pagination">
        <el-pagination
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-col>
    </el-row>
    <el-dialog
      title="edit"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item
          label="活动名称"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.name"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="活动区域"
          :label-width="formLabelWidth"
        >
          <el-select
            v-model="form.region"
            placeholder="请选择活动区域"
          >
            <el-option
              label="区域一"
              value="shanghai"
            />
            <el-option
              label="区域二"
              value="beijing"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogFormVisible = false"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import minix from './minix';
import { tabledata } from './proxytable';
import { getnews } from '@/common/api/getnews';
export default {
  mixins: [ minix ], // 少量的公共方法可在minix中共享
  data() {
    return {
      formLabelWidth: '120px',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogFormVisible: false,
      multipleSelection: [],
      title: '动态路由测试页面',
      news: '',
      tableData: [ {
        date: '192.168.11.973',
        name: '8379',
        address: '停止'
      }, {
        date: '192.168.11.973',
        name: '8379',
        address: '停止'
      }, {
        date: '192.168.11.973',
        name: '8379',
        address: '停止'
      } ],
      input: '',
      options: [ {
        value: '选项1',
        label: '文思海辉'
      } ],
      value: ''
    };
  },
  created() {
    // this.BTNtables();
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    addsubmit() {
      this.tableData.push(
        {
          date: '192.168.11.973',
          name: '8379',
          address: '停止'
        }
      );
    },
    handleEdit() {
      this.dialogFormVisible = true;
    },
    handleDelete(val) {
      this.tableData.splice(val, 1);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(e) {
      alert(JSON.stringify(e));
    },
    BTNgetnews() {
      getnews(
        {
          type: '',
          key: 'b16826ff9d19df522079e2612acd939d'
        }
      ).then(res => {
        this.news = res;
      }).catch(rej => {

      });
    },
    BTNtables() {
      tabledata.then(res => {
        this.tableData = res;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.rowtop {
  background-color: #ccc;
  padding: 10px;
  margin-bottom: 20px;
}
.rowtable {
  padding: 10px;
}
.pagination {
  display: flex;
  flex-direction: row-reverse;
}
</style>
