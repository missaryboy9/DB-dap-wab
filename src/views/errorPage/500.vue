<template>
  <div>
    <div class="box">
      <p class="animation">这个服务器日常抽风...<a href="#" @click="goback">返回上一级</a></p>
    </div>
  </div>
</template>

<script>
export default {
   data() {
     return {

     }
   },
   methods: {
      goback() {
        window.history.go(-1);
      }
   }
}
</script>

<style lang="scss" scoped>
.box {
      width: 100%;
      height: 500px;
      background:url("../../assets/error_image/500.png") no-repeat center center #fff;
      position: relative;
      font-weight:800;
      p{
      position: absolute;
      left: 50%;
      top: 65%;
      transform:translateX(-50%);
      color: #888;
      animation:myfirst 2s;
    }
    a{
      color: skyblue
    }
}
@keyframes myfirst
{
0% {
  opacity:0;
  top:100%
}
100% {
   opacity:1;
   top:65%;
}
}
</style>
