<template>
  <div class="tempage">
    <div class="toptit">
      <div class="names">千图新闻</div>
      <div class="xiushifu">
        <strong>. . .</strong>
      </div>
    </div>
    <div class="rabbet">
      <slot />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {

  },
  data() {
    return {

    };
  }
};
</script>

<style scoped lang="scss">
.tempage {
  border-radius: 10px;
  box-shadow: 1px 1px 5px 1px #ccc;
  width: 33%;
  max-height: 200px;
  border: 1px solid #ccc;
  overflow: hidden;
  .toptit {
    padding: 0 10px;
    align-items: center;
    background-color: #00bf6f;
    position: relative;
    top: 0;
    left: 0;
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .names {
      margin-left: 10px;
      padding-left: 10px;
      border-left: 2px solid #fff;
      font-weight: 600;
    }
    > * {
      cursor: pointer;
      color: #fff;
    }
  }
  .rabbet {
    padding: 10px;
    overflow: scroll;
    height: 200px;
  }
}
</style>
