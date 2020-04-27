<template>
  <div>
    <el-form :model="applicationfrom">
      <el-row>
        <el-col>
          <el-input
            v-model="applicationfrom.number"
            width="50px"
            size="mini"
            placeholder="应用编号"
          ></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-input
            v-model="applicationfrom.acse"
            type="textarea"
            size="mini"
            placeholder="应用描述"
          ></el-input>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'NewApplication',
  components: {

  },
  data() {
    return {
      applicationfrom: {
        number: '',
        acse: ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "./css/index.scss";
@include basestyle;
</style>
