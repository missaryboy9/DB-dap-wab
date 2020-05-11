<template>
  <div>
    <div class="box">
      <p>啊哦！页面好像找不到了,返回<a href="#">上一级</a>...</p>
    </div>
  </div>
</template>

<script>
export default {
   data() {
     return {

     }
   }
}
</script>

<style lang="scss" scoped>
.box {
      width: 100%;
      height: 500px;
      background:url("../../assets/error_image/404.jpg") no-repeat center center #fff;
      position: relative;
      p{
      position: absolute;
      left: 50%;
      top: 65%;
      transform:translateX(-50%);
      color: #888;
    }
    a{
      color: skyblue
    }
}

</style>
