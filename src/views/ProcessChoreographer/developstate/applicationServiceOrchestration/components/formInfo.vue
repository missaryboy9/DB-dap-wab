<template>
  <div class="form">
    <el-form ref="ruleForm" :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
      <el-form-item label="配置名称" prop="pass" >
        <el-input v-model="ruleForm.pass" autocomplete="off" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="配置内容" prop="checkPass">
        <el-input  type="textarea"
           :rows="15"
            v-model="ruleForm.checkPass" 
            autocomplete="off" :disabled="true">
      </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
          pass: 'ActiveMQConfig',
          checkPass: `spring:
          activemq:
        broker-url: tcp://192.168.0.1:61616
        user: admin
        password: admin
        pool:
          enabled: false
          max-connections: 10',
          age: '23'`
       }
    }
  }
}
</script>

<style>

</style>
