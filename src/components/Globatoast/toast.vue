<template>
  <div class="content">
    全局提示组件
    {{ title }}
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    types: {
      type: String,
      default: '11'
    },
    content: {
      type: String,
      default: '11'
    }
  },
  data() {
    return {

    };
  },
  methods: {

  },
  created() {
    this.success()
  },
};
</script>

<style scoped lang="scss">
.content {
  position: fixed;
  right: 0;
  bottom: 0;
  height: 100px;
  width: 100px;
  background-color: #cccccc;
}
</style>
