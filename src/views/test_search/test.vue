<template>
  <div class="app">
    <!--
      isexpand 区分简单查询和多条件查询 true 显示筛选按钮 , false 不显示筛选按钮

     -->
    <el-search
      :ishandle="true"
      :handleform="handleform"
      :showfrom="showfrom"
      :handledata="handledata"
      :showdata="showdata"
    ></el-search>
    <el-button icon="el-icon-plus" class="btn-add" type="primary" size="mini" @click="showAddDialog">新增</el-button>
    <el-table :data="tableData" style="width: 100%" border stripe :header-row-style="{backgroundColor:'#eaedf6'}">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="danger" plain icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row)"></el-button>
          <el-button type="info" plain icon="el-icon-delete" size="mini"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增用户对话框 -->
    <el-dialog
      title="添加用户"
      :visible.sync="addDialogVisible"
      width="50%"
      :append-to-body="true"
      custom-class="Dialog"
    >
      <el-form :model="addform" size="small">
        <el-form-item label="用户名称" label-width="120">
          <el-input v-model="addform.name" autocomplete="off" class="inputWidth"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" label-width="120">
          <el-select v-model="addform.address" placeholder="请选择活动区域">
            <el-option label="上海" value="上海市普陀区金沙江路 1516 弄"></el-option>
            <el-option label="西安" value="陕西省西安市长安区"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="7">
            <el-date-picker v-model="addform.date1" type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="1">-----</el-col>
          <el-col :span="7">
            <el-time-picker v-model="addform.date2" placeholder="选择时间" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="addform.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="addform.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="addform.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input v-model="addform.desc" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="info" plain @click="addDialogVisible = false">取 消</el-button>
        <el-button type="danger" plain @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑用户对话框 -->
    <el-dialog
      title="编辑用户"
      :visible.sync="editDialogVisible"
      width="30%"
      :append-to-body="true"
    >
      <el-form :model="editForm" size="small">
        <el-form-item label="用户名称" label-width="120">
          <el-input v-model="editForm.name" autocomplete="off" class="inputWidth"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" label-width="120">
          <el-select v-model="editForm.address" placeholder="请选择活动区域">
            <el-option label="上海市普陀区金沙江路 1516 弄" value="上海市普陀区金沙江路 1516 弄"></el-option>
            <el-option label="陕西省西安市长安区" value="陕西省西安市长安区"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="info" plain @click="editDialogVisible = false">取 消</el-button>
        <el-button type="danger" plain @click="editUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
   data() {
      let sexs = [{ label: '男', value: 'M' }, { label: '女', value: 'F' }]
      let sexProps = { label: 'label', value: 'value' }
        return {
          handleform: [
              { type: 'Input', label: '姓名', prop: 'name', width: '180px', placeholder: '请输入姓名...' },
              { type: 'Input', label: '年龄', prop: 'age', width: '180px', placeholder: '请输入年龄...' },
              { type: 'Date', label: '日期', prop: 'date', width: '180px', placeholder: '请选择日期...' },
              { type: 'Select', label: '性别', prop: 'sex', width: '180px', options: sexs, props: sexProps, change: row => '', placeholder: '请选择性别...' }
            ],
            showfrom: [
              { type: 'Input', label: '姓名', prop: 'name', width: '180px', placeholder: '请输入姓名...' },
              { type: 'Input', label: '年龄', prop: 'age', width: '180px', placeholder: '请输入年龄...' }
              // { type: 'Select', label: '性别', prop: 'sex', width: '180px', options: sexs, props: sexProps, change: row => '', placeholder: '请选择性别...' }
            ],
            handledata: {
              name: null,
              age: null,
              sex: null,
              Date: null
            },
            showdata: {
              name: null,
              age: null,
              sex: null
            },
            tableData: [{
              id: '1',
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              id: '2',
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              id: '3',
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: '4',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }],
          addDialogVisible: false,
          addform: {
            name: '',
            address: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          editDialogVisible: false,
          editForm: {
             name: '',
             address: ''
          },
          index: 0
        };
      },
      methods: {
        showAddDialog() {
          this.addDialogVisible = true
        },
        addUser() {
           this.addform.date = new Date()
           this.tableData.push(this.addform)
           this.addDialogVisible = false
        },
        showEditDialog(row) {
          this.editForm = row
          this.index = row.id
          this.editDialogVisible = true
        },
        editUser() {
          console.log('bianji1');
          this.tableData[this.index] = this.editForm
          this.editDialogVisible = false
        }
      }
};
</script>

<style lang="scss" scoped>
.app{
  padding: 20px;
}
.el-card{
  margin-top: 15px;
}
.inputWidth {
  width: 300px;
}
.btn-add{
  margin: 10px 0px;
}
.el-select{
  width: 300px;
}
/deep/  .el-table th{
     background-color: #eaedf6 ;
}
</style>
