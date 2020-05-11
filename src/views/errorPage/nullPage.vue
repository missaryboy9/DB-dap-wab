<template>
  <div class="box">
    <div class="img">
      <img src="../../assets/error_image/null.png" alt="">
    </div>
    <el-button type="info" size="mini" plain @click="goBack">back to home</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
     goBack() {
        this.$router.push("/login")
     }
  }
}
</script>

<style lang="scss" scoped>
.box {
      width: 100%;
      height: 600px;
      position: relative;
      .img{
      width: 500px;
      height: 200px;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50% ,-50%);
       >img{
          width: 100%;
       }
    }
    .el-button{
      position: absolute;
      top: 75%;
      left: 50%;
      transform: translate(-50% ,-50%)
    }
}
</style>
