<template>
  <div class="main">
    <div id="data-view" class="clear">
      <dv-full-screen-container>
        <top-header />

        <div class="main-content">
          <digital-flop />

          <div class="block-left-right-content">
            <ranking-board />

            <div class="block-top-bottom-content">
              <div class="block-top-content">
                <rose-chart />

                <water-level-chart />

                <scroll-board />
              </div>

              <cards />
            </div>
          </div>
        </div>
      </dv-full-screen-container>
    </div>
  </div>
</template>

<script>
import topHeader from "./topHeader";
import digitalFlop from "./digitalFlop";
import rankingBoard from "./rankingBoard";
import roseChart from "./roseChart";
import waterLevelChart from "./waterLevelChart";
import scrollBoard from "./scrollBoard";
import cards from "./cards";

export default {
  name: "DataView",
  components: {
    topHeader,
    digitalFlop,
    rankingBoard,
    roseChart,
    waterLevelChart,
    scrollBoard,
    cards
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
// .clear::after {
//   content: "";
//   height: 0;
//   visibility: hidden;
//   clear: both;
// }
#data-view {
  width: 100% !important;
  height: 100%;
  color: #fff;

  #dv-full-screen-container {
    width: 100% !important;
    height: 100% !important;
    position: relative !important;
    background-image: url("./img/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .block-left-right-content {
    flex: 1;
    display: flex;
    margin-top: 20px;
  }

  .block-top-bottom-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 20px;
  }

  .block-top-content {
    height: 55%;
    display: flex;
    flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 20px;
  }
}
</style>
