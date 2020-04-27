<template>
  <div class="jupmain">
    <div class="jupleft">
      <lefttem />
    </div>
    <div class="jupright">2</div>
  </div>
</template>

<script type="text/ecmascript-6">
import lefttem from './module/leftModule/index.vue';
export default {
  components: {
    lefttem
  },
  data() {
    return {

    };
  }
};
</script>

<style scoped lang="scss">
.jupmain {
  display: flex;
  height: scal(100vh -100px);
  > .jupleft {
    flex: 1;
  }
  > .jupright {
    flex: 5;
  }
}
</style>
