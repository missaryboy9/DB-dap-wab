<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb class="breadcrumb-container" />

    <!-- <div class="nowrouter"> -->
    <!-- {{ this.$route.name }} -->
    <!-- </div> -->

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Breadcrumb from '@/components/Breadcrumb';
import Hamburger from '@/components/Hamburger';

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([ 'sidebar', 'avatar' ])

  },
  // watch: {
  //   $route() {
  //
  //   }
  // },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar');
    }
    // logout() {
    //   // console.log(this.$store.dispatch('user/logout'))    store.dispatch('setlogin/talgetlogin', true)
    //   // this.$store.dispatch('setlogin/setrouter', []);
    //   this.$store.dispatch('setlogin/ansyrouterdata', false);
    //   this.$store.dispatch('setlogin/routerdata', []);
    //   // sessionStorage.removeItem('loginflag')
    //   this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    // }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  min-height: 7.5vh;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }
  .nowrouter {
    position: absolute;
    bottom: 2vh;
    left: 7vh;
    font-size: 30px;
    font-weight: 900;
    font-style: Regular;
  }
  // .right-menu {
  //   float: right;
  //   height: 100%;
  //   line-height: 50px;

  //   &:focus {
  //     outline: none;
  //   }

  //   .right-menu-item {
  //     display: inline-block;
  //     padding: 0 8px;
  //     height: 100%;
  //     font-size: 18px;
  //     color: #5a5e66;
  //     vertical-align: text-bottom;

  //     &.hover-effect {
  //       cursor: pointer;
  //       transition: background 0.3s;

  //       &:hover {
  //         background: rgba(0, 0, 0, 0.025);
  //       }
  //     }
  //   }

  //   .avatar-container {
  //     margin-right: 30px;

  //     .avatar-wrapper {
  //       margin-top: 5px;
  //       position: relative;

  //       .user-avatar {
  //         cursor: pointer;
  //         width: 40px;
  //         height: 40px;
  //         border-radius: 10px;
  //       }

  //       .el-icon-caret-bottom {
  //         cursor: pointer;
  //         position: absolute;
  //         right: -20px;
  //         top: 25px;
  //         font-size: 12px;
  //       }
  //     }
  //   }
  // }
}
</style>
