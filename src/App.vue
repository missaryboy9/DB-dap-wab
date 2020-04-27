<template>
  <div
    id="app"
    onselectstart="return false;"
  >
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
<style lang="scss">
#app {
  font-family: glbfonticon;
}
@import "~@/styles/font/font.css";
@import "~@/assets/iconfont/iconfont.css";
</style>

