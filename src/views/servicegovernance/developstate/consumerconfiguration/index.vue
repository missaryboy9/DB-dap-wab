<template>
  <div>
    <el-card>
      <span class="icon">测试缺省页</span>
      <el-button type="success" plain @click="error">测试</el-button>
    </el-card>
  </div>
</template>
<script type="text/ecmascript-6">
import data from "../data.js"
export default {
  data() {
    return {
      res: data
    }
  },
  methods: {
    error() {
      if (this.res.code === 500) {
         this.$router.push("/500")
      } else if (this.res.code === 404) {
         this.$router.push("/404")
      } else {
         this.$router.push("/null")
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.icon{
  font-size:14px;
  display:block;
  width:100%;
  color: #080367;
  border-left:5px solid #fc4b3b;
  padding-left:12px;
  font-weight:700px;
  margin-bottom:20px;
}
</style>
