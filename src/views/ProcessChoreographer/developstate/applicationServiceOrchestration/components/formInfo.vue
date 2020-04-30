<template>
  <div class="form">
    <el-form ref="ruleForm" :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="pass">
        <el-input v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
          pass: '李婧茹',
          checkPass: '女',
          age: '23'
       }
    }
  }
}
</script>

<style>

</style>
