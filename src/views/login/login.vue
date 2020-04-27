<template>
  <div class="login-container">
    <div class="bg-img">
      <img
        src="../../assets/bg1.png"
        alt=""
        class="icon-bg-img"
      >
    </div>
    <div class="login-icon">
      <img
        src="../../assets/guang.png"
        alt=""
        class="guang guang-1"
      >
      <img
        src="../../assets/guang.png"
        alt=""
        class="guang guang-2"
      >
      <img
        src="../../assets/guang.png"
        alt=""
        class="guang guang-3"
      >
      <img
        src="../../assets/xian.png"
        alt=""
        class="xian"
      >
      <img
        src="../../assets/login-2d.png"
        alt=""
        class="icon-2d"
      >
    </div>
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">分布式后台管理系统</h3>
      </div>

      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="你的用户名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>
      <!-- <el-from-item>
        <Verify
          :type="5"
          :img-size="versize"
          :show-button="false"
          @success="alert('success')"
          @error="alert('error')"
        />
      </el-from-item> -->
      <el-button
        :loading="loading"
        class="el-button"
        @click.native.prevent="handleLogin"
      >登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
// import Verify from 'vue2-verify';
import { loginpath } from './logindata';
import { validUsername } from '@/utils/validate';

export default {
  name: 'Logins',
  components: {
    // Verify
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'));
      } else {
        callback();
      }
    };
    return {
      versize: {
        height: '150px',
        width: '200px'
      },
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = '';
      } else {
        this.passwordType = 'password';
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          loginpath.then(res => {
            this.$store.dispatch('setlogin/ansyrouterdata', true);
            this.loading = true;
            this.$addrouter(res.data);
            this.$router.push({ path: '/applicationManagement/applicationManagement' });
          });
          this.$store
            .dispatch('user/login', this.loginForm)
            .then(() => {
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  70% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.7;
  }
  30% {
    opacity: 0;
  }
}
@-webkit-keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  70% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.7;
  }
  30% {
    opacity: 0;
  }
}
@keyframes guangstart1 {
  0% {
    bottom: 100%;
    opacity: 0;
  }
  90% {
    bottom: 1%;
    opacity: 1;
  }
  100% {
    bottom: 0%;
    opacity: 0;
  }
}
@keyframes guangstart {
  10% {
    bottom: 52%;
    opacity: 0;
  }
  70% {
    bottom: 6%;
    opacity: 1;
  }
  100% {
    bottom: 3%;
    opacity: 0;
  }
}
@keyframes shastart {
  10% {
    top: 1%;
    opacity: 0;
  }
  70% {
    top: 20%;
    opacity: 1;
  }
  100% {
    top: 40%;
    opacity: 0;
  }
}
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;
$gray: #f7f4fb;
$font_gray: #b1b1b1;
@supports (-webkit-mask: none) and (not (cater-color: $bg)) {
  .login-container .el-input input {
    color: $bg;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    width: 100%;
    input {
      border: 1px solid $gray; /*no*/
      background: $gray;
      border-radius: 24px;
      color: black;
      margin-bottom: 15px;
      -webkit-appearance: none;
      height: 40px;
      line-height: 40px;
      padding: 20px;
      font-size: 14px;
      caret-color: $bg; //光标颜色
      cursor: text;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $gray inset !important;
        -webkit-text-fill-color: $bg !important;
        border-radius: 20px;
      }
    }
  }
  .el-form-item input[type="password"]:focus,
  .el-form-item input[type="password"]:hover,
  .el-form-item input[type="text"]:focus,
  .el-form-item input[type="text"]:hover {
    border-color: #698def;
    outline: 0;
  }
  .el-button {
    border-radius: 20px;
    background-image: linear-gradient(to right, #5a63f0, #698def);
    color: #fff;
    width: 40%;
    font-size: 14px;
    box-shadow: 0px 10px 10px 0px #dde4fa !important;
    margin: 15px 0;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  .bg-img {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    img.icon-bg-img {
      width: 100%;
      height: 100%;
    }
  }
  .login-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 70%;
    img.icon-2d {
      width: 100%;
      height: 100%;
    }
    .guang {
      position: absolute;
      width: 100px;
      opacity: 0;
      animation: blink 5s infinite;
    }
    .guang-1 {
      bottom: 9%;
      right: 19%;
    }
    .guang-2 {
      bottom: 12%;
      right: 34%;
    }
    .guang-3 {
      bottom: 30%;
      right: 40%;
    }
    .xian {
      position: absolute;
      width: 80px;
      right: 20%;
      top: 7%;
      opacity: 0;
      animation: shastart 3s infinite;
    }
  }
  .login-form {
    position: relative;
    width: 28%;
    margin-left: 4%;
    overflow: hidden;
  }
  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: #698def;
      margin: 0px auto 60px auto;
      text-align: left;
      font-weight: bold;
      font-family: "montserratr";
    }
  }
}
</style>
