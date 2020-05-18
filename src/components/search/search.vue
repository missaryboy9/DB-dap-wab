<template>
  <div>
    <el-card class="box-card">
      <div id="title">
        <h4>快速检索</h4>
      </div>
      <div id="searchInfo">
        <el-form :inline="true" size="mini">
          <!-- 显示的表单 -->
          <el-form-item v-for="item in showform" v-if="!expandID" :key="item.lable" :label="item.label">
            <!-- 输入框 -->
            <el-input v-if="item.type==='Input'" v-model="selectShowdata[item.prop]" :placeholder="item.placeholder"></el-input>
            <!-- 下拉框 -->
            <el-select v-if="item.type==='Select'" v-model="selectShowdata[item.prop]" size="mini" @change="item.change(selectShowdata[item.prop])">
              <el-option v-for="op in item.options" :key="op.value" :label="op.label" :value="op.value"></el-option>
            </el-select>
            <!-- 日期 -->
            <el-date-picker
              v-if="item.type==='Date'"
              v-model="selectShowdata[item.prop]"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
          <!-- 隐藏表单 -->
          <el-form-item v-for="item in handleform" v-if="expandID" :key="item.lable" :label="item.label">
            <!-- 输入框 -->
            <el-input v-if="item.type==='Input'" v-model="selectHandledata[item.prop]" placeholder="请输入要查询的条件"></el-input>
            <!-- 下拉框 -->
            <el-select v-if="item.type==='Select'" v-model="selectHandledata[item.prop]" size="mini" @change="item.change(selectHandledata[item.prop])">
              <el-option v-for="op in item.options" :key="op.value" :label="op.label" :value="op.value"></el-option>
            </el-select>
            <!-- 日期 -->
            <el-date-picker
              v-if="item.type==='Date'"
              v-model="selectHandledata[item.prop]"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
          <!-- 按钮组 -->
          <el-form-item>
            <el-button type="primary" class="search" icon="el-icon-search" @click="queryInfo"></el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="info" class="clear" @click="reset()">重置</el-button>
          </el-form-item>
          <el-form-item>
            <el-button v-show="ishandle" plain class="expand" @click="expand">筛选
              <i :class="expandID ? 'el-icon-arrow-up icon' :'el-icon-arrow-down icon'"></i>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
   props: {
   'ishandle': {
     type: Boolean,
     default: false
   },
   "handleform": {
     type: Array,
     default: () => []
   },
   "showform": {
     type: Array,
     default: () => []
   },
   'handledata': {
        type: Object,
         default: () => {}
   },
   'showdata': {
        type: Object,
        default: () => {}
    },
    "tabData": {
       type: Array,
       default: () => []
    },
    "selName": {
        type: String,
        required: true
     }
   },
    data() {
      return {
        expandID: false, // 显示与隐藏筛选表单
        selectShowdata: this.showdata,
        // selectHandledata: this.handledata
        tabledate: this.tabData
      };
    },
    created() {
    },
    methods: {
      // 查询表单
      queryInfo() {
        var type = this.selectShowdata.type
        console.log(type)
        console.log(this.selName)
        var result = this.tabledate.filter((item) => {
            return item[this.selName] === type
        })

        if (result.length !== 0) {
          this.$emit("update:tabData", [...result])
          console.log(this.tabData)
        } else {
         this.$message.error("无匹配内容")
        }
      },
      // 重置表单
      reset() {
       Object.keys(this.selectShowdata).forEach(item => {
         this.selectShowdata[item] = null
       })
       this.$emit("update:tabData", this.tabledate)
      },
      // 展开筛选与收缩筛选
      expand() {
       this.expandID = !this.expandID
      }
    }
  }
</script>

<style  lang="scss" scoped>
.box-card {
  font-size: 12px;
}
#title {
  color: #080367;
  border-left: 5px solid #fc4b3b;
  padding-left: 15px;
}
/deep/.el-card__body {
  padding: 10px 5px 5px 5px;
}
#searchInfo {
  padding-left: 20px;
  // position: relative;
}
/deep/ .el-form-item__label {
  font-size: 10px !important;
}
.icon {
  margin-left: 5px;
}
</style>
