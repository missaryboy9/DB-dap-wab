<template>
  <div>
    <mainheader class="mainherder" />
    <div
      :class="classObj"
      class="app-wrapper"
    >
      <div
        v-if="device === 'mobile' && sidebar.opened"
        class="drawer-bg"
        @click="handleClickOutside"
      />
      <sidebar class="sidebar-container">
      </sidebar>
      <div class="main-container">
        <div :class="{ 'fixed-header': fixedHeader }">
          <navbar />
          <tab></tab>
        </div>
        <app-main />
      </div>
    </div>
  </div>
</template>

<script>
import {
  Navbar,
  Sidebar,
  AppMain,
  mainheader,
  scroollbarlogin,
  tab
} from "./components";
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
    mainheader,
    scroollbarlogin,
    tab
  },
  mixins: [ ResizeMixin ],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile"
      };
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
@keyframes showwrapper {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes showtitle {
  from {
    top: -50px;
  }
  to {
    top: 0;
  }
}
.mainherder {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  min-width: 1000px;
  animation: showtitle 1s forwards;
  box-shadow: 0 0 10px 1px rgba(153, 153, 153, 0.1);
}
.app-wrapper {
  @include clearfix;
  position: fixed;
  height: 93.5vh;
  width: 100%;
  top: 6.5vh;
  // margin-top: 6.5vh;
  opacity: 0;
  overflow: auto;
  animation: showwrapper 1s forwards;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
