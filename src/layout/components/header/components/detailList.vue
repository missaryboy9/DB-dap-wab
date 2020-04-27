<template>
  <div>
    <ul class="detail_main">
      <li class="detail_one">
        <img
          :src="detalis.image"
          alt=""
        >
      </li>
      <li class="detail_two">
        {{ detalis.name }}
      </li>
      <li class="detail_three">
        <abbr :title="detalis.theme">{{ detalis.theme }}</abbr>
      </li>
      <li class="detail_thired">
        <i class="el-icon-alarm-clock" />
        {{ detalis.time }}
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    detalis: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped lang="scss">
@mixin ms {
  display: flex;
}
@mixin Offset($offsetx, $offsety) {
  transform: translate($offsetx, $offsety);
}
.detail_main {
  position: relative;
  padding: 0;
  margin: 0;
  height: 60px;
  width: 200px;
  display: grid;
  grid-template-rows: repeat(2, 45%);
  grid-template-columns: 1fr 2fr;
  grid-gap: 5px;
  grid-template-areas:
    "o t"
    "o r";
  > li {
    list-style: none;
    padding: 0;
  }
  .detail_one {
    grid-area: o;
    @include ms;
    align-items: center;
    justify-content: start;
    > img {
      height: 40px;
      width: 40px;
      border-radius: 5px;
    }
  }
  .detail_two {
    font-weight: 600;
    grid-area: t;
    @include ms;
    @include Offset(-20px, 0);
  }
  .detail_three {
    grid-area: r;
    @include ms;
    @include Offset(-20px, -5px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 7px;
  }
  .detail_thired {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 5px;
    letter-spacing: -1px;
    color: #ccc;
  }
}
</style>
