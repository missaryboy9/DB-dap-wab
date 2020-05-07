<template>
  <div class="filter">
    <el-row :gutter="10">
      <el-col :span="3">
        <el-input
          v-model="input"
          size="mini"
          placeholder="请输入内容"
        />
      </el-col>
      <el-col :span="3">
        <el-select
          v-model="value"
          size="mini "
          placeholder="重要性"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-select
          v-model="value"
          size="mini"
          placeholder="类型"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-select
          v-model="value"
          size="mini"
          placeholder="类型"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="2">
        <el-button
          type="primary"
          size="mini"
        ><i class="el-icon-plus"></i> 新增</el-button>
      </el-col>
      <el-col :span="2">
        <el-button
          size="mini"
          plain
        ><i class="el-icon-download"></i>导出数据</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {

  },
  data() {
    return {
      options: [ {
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      } ],
      value: '',
      input: ''
    };
  }
};
</script>

<style scoped lang="scss">
.filter {
  padding: 10px;
}
</style>
