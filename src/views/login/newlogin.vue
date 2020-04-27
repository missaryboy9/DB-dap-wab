<template>
  <div class="login-container">
    <div class="header">
      <div></div>
      <div class="header-container">
        <span class="logo"></span>
        <span class="font">
          <i>
            <span class="zhshort">中国电子信息产业集团</span>
            <span class="enshort">CNINA ELECTRONICS CORPORATION</span>
          </i>
          <span class="clip"></span>
          <i style="margin-left: 20px;">
            <span class="zhshort">文思海辉技术有限公司</span>
            <span class="enshort">PACTERA TECHNOLOGY INTERNATIONAL LTD</span>
          </i>
        </span>
      </div>
    </div>
    <div class="main">
      <div class="login-form-container form-style">
        <div class="form-header">分布式后台管理系统</div>
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          class="login-form"
          auto-complete="on"
          label-position="top"
          :size="size"
        >
          <el-form-item label="用户名" prop="username" class="form-item-style">
            <el-input
              ref="username"
              v-model="loginForm.username"
              placeholder="请填写你的用户名"
              name="username"
              type="text"
              tabindex="1"
              auto-complete="on"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" class="form-item-style">
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="请填写登录密码"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
            ></el-input>
          </el-form-item>
          <el-checkbox v-model="checked">自动登录</el-checkbox>
          <el-form-item class="form-item-style">
            <el-button
              type="primary"
              :loading="loading"
              style="width:100%;margin-top:30px"
              class="el-button"
              @click.native.prevent="handleLogin"
            >立即登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="footer">copyright @文思海辉技术有限公司版权所有</div>
  </div>
</template>
<script>
// import Verify from 'vue2-verify';
import { loginpath } from "./logindata";
import { validUsername } from "@/utils/validate";

export default {
  name: "Logins",
  components: {
    // Verify
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "admin",
        password: "111111"
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
      checked: true,
      fullWidth: document.body.clientWidth,
      size: ""
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    },
    fullWidth: function(value) {
      this.fullWidth = value;
      if (this.fullWidth <= 768) {
        this.size = "mini";
      } else if (this.fullWidth >= 768 && this.fullWidth <= 1024) {
        this.size = "small";
      } else if (this.fullWidth >= 1024) {
        this.size = "";
      }
    }
  },
  mounted() {
    if (this.fullWidth <= 768) {
      this.size = "mini";
    } else if (this.fullWidth >= 768 && this.fullWidth <= 1024) {
      this.size = "small";
    } else if (this.fullWidth >= 1024) {
      this.size = "";
    }
    window.onresize = () => {
      return (() => {
        this.fullWidth = document.body.clientWidth;
      })();
    };
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          loginpath.then(res => {
            this.$store.dispatch("setlogin/ansyrouterdata", true);
            this.loading = true;
            this.$addrouter(res.data);
            this.$router.push({
              path: "/applicationManagement/applicationManagement"
            });
          });
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$bg: #283443;
$primary: #080367;
$gray: #b9bdc6;
@supports (-webkit-mask: none) and (not (cater-color: $bg)) {
  .login-container .el-input input {
    color: $bg;
  }
}
.login-container {
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: grid;
  grid-template-rows: 15% 66% 19%;
  .header {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 2.5fr 2fr;
    align-items: center;
    .header-container {
      display: grid;
      grid-template-columns: 150px auto;
      grid-gap: 0 16px;
      .logo {
        display: inline-block;
        background-image: url("../../assets/logo/wslogo.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: right center;
      }
      .font {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        i {
          font-style: normal;
          white-space: nowrap;
        }
        .zhshort {
          font-size: 20px;
          font-weight: 900;
          color: #333333;
        }
        .enshort {
          color: $gray;
          font-size: 14px;
          display: flex;
        }
        .clip {
          position: relative;
          width: 20px;
          height: 38px;
          border-right: 2px solid $gray;
          display: inline-block;
        }
      }
    }
  }
  .main {
    width: 100%;
    display: flex;
    align-items: center;
    background-image: url("../../assets/logo/lou5.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-left: 15%;
    .login-form-container {
      display: grid;
      grid-template-rows: 1fr 5fr;
      width: 30%;
      height: 75%;
      background-color: #ffffff;
      border-radius: 5px;
      padding: 20px 30px;
      .form-header {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        font-weight: 900;
        color: $primary;
      }
      .login-form {
        display: grid;
      }
    }
    .form-style {
      & >>> .el-form-item > .el-form-item__label:before {
        content: "";
        color: white;
        margin-right: 0;
      }
      & >>> .el-form--label-top .el-form-item__label {
        padding: 0;
        font-weight: 900;
        font-size: 14px;
      }
      & >>> .form-item-style.el-form-item {
        margin-bottom: 0px;
      }
    }
  }
  .footer {
    padding-top: 40px;
    text-align: center;
    color: $gray;
  }
}
@media screen and (max-width: 768px) {
  .login-container {
    .logo {
      background-size: 50% 50% !important;
    }
    .font i {
      .zhshort {
        font-size: 14px !important;
      }
      .enshort {
        font-size: 12px !important;
      }
    }
  }
  .login-form-container {
    width: 42% !important;
    height: 50% !important;
    .form-header {
      font-size: 15px !important ;
    }
    /deep/ .el-form .el-form-item .el-form-item__label {
      font-size: 12px !important ;
    }
  }
  .footer {
    font-size: 12px;
  }
}
@media screen and (max-width: 1024px) and (min-width: 768px) {
  .login-form-container {
    width: 42% !important;
    height: 65% !important;
    .form-header {
      font-size: 15px !important ;
    }
    /deep/ .el-form .el-form-item .el-form-item__label {
      font-size: 12px !important ;
    }
  }
  .footer {
    font-size: 12px;
  }
}
// @media screen and (min-width: 1440px) {
//   .login-form-container {
//     height: 62% !important;
//   }
// }
</style>
