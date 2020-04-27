<template>
  <div class="gridmain">
    test of display grid layout
    <div class="grid">
      <div class="herder">1</div>
      <div class="siderby">2</div>
      <div class="main">3</div>
      <div class="box1">5</div>
      <div class="box2">6</div>
      <div class="box3">7</div>
      <div class="footer">4</div>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    let { body } = document;
    return {
      bodys: body.getBoundingClientRect().width
    };
  },
  computed: {
    clintwidth() {
      return this.bodys;
    }
  },
  mounted() {
    console.log(this.bodys);
  }
};
</script>
<style lang="scss">
.grid {
  padding: 20px;
  display: grid;
  width: 100%;
  height: 90vh;
  grid-template-rows: 1fr 4fr 2fr 1fr;
  grid-template-columns: 1fr repeat(2, 4fr) 1fr;
  grid-gap: 10px;
  grid-template-areas:
    "h h h h"
    "s m m m"
    "s b1 b2 b3"
    "f f f f";
}
.grid > * {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
}
.herder {
  grid-area: h;
}
.siderby {
  grid-area: s;
}
.main {
  grid-area: m;
}
.footer {
  grid-area: f;
}
.box1 {
  grid-area: b1;
}
.box2 {
  grid-area: b2;
}
.box3 {
  grid-area: b3;
}

@media only screen and(max-width: 500px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "h "
      "s "
      "m"
      "b1"
      "b2"
      "b3"
      "f";
  }
}
</style>
