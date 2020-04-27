<template>
  <section class="app-main">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path;
    }
  },
  mounted() {
    // console.log(a, 222222);
  }
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  /* min-height: calc(100% - 100px); */
  min-height: calc(100vh - 20vh);
  min-width: 750px;
  width: 100%;
  position: relative;
  overflow: auto;
  background-color: #f7f6fb;
  padding: 20px;
  /* background-color: #ccc; */
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
