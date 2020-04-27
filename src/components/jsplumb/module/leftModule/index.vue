<template>
  <div class="temleftmain">
    <div
      v-for="(item,key) in temdatalist"
      :key="key"
    >
      <component :is="item.component" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import temdatalist from './index.js';
export default {
  components: {

  },
  data() {
    return {
      temdatalist
    };
  },
  created() {
    console.log('temdatalist', temdatalist);
  }
};
</script>

<style scoped lang="scss">
.temleftmain {
  display: flex;
  flex-direction: column;
  > div {
    height: 50px;
    width: 100%;
  }
}
</style>
