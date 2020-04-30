<template>
  <div class="pagemaisns">
    <div class="Placeholder"></div>
    <div class="log" />
    <div class="DynamicName">
      <el-dropdown placement="top-start">
        <div class="fontpont">
          <span class="font">
            <i>
              分布式后台管理系统
              <!--中国电子信息产业集团-->
              <!--<span>.</span>-->
              <!--文思海辉技术有限公司-->
            </i>
          </span>
          <span class="fontlast" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <maindrop @checkname="checknames" />
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="scrrolbar"></div>
    <div class="users">
      <div class="theme">
        <el-dropdown :hide-on-click="false">
          <img
            style="width:18px;height:18px;transform:translateY(5px)"
            src="@/assets/theme.png"
            alt=""
          >
          <el-dropdown-menu slot="dropdown">
            <ul class="themedropdown">
              <li
                v-for="(item, key) in themelist"
                :key="key"
                :style="{
                  backgroundColor: item.checked === true ? '#dcdcdc' : ''
                }"
                @click="checkstyle(item)"
              >
                <img
                  style="width:30px;height:30px"
                  :src="require('@/assets/' + item.src)"
                  alt=""
                >
                <p>{{ item.name }}</p>
              </li>
            </ul>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div>
        <el-dropdown
          slot="suffix"
          trigger="click"
          placement="bottom-start"
        >
          <el-badge
            is-dot
            class="item"
          >
            <i class="el-icon-message-solid topbell" />
          </el-badge>
          <el-dropdown-menu
            slot="dropdown"
            style="padding:0"
          >
            <el-dropdown-item v-for="item in detaillist">
              <detaillist :detalis="item" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>
      <div class="right-menu">
        <el-dropdown
          class="avatar-container"
          trigger="click"
        >
          <div class="avatar-wrapper">
            <div>
              <el-avatar
                shape="circle"
                size="large"
                src="../../../assets/avatar.jpg"
              />

            </div>
            <div>
              <p>{{ staffIntroduction.authorname }}</p>
              <p>{{ staffIntroduction.inAJob }}</p>
            </div>
          </div>
          <el-dropdown-menu
            slot="dropdown"
            class="user-dropdown"
          >
            <router-link to="/">
              <el-dropdown-item>
                Home
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided>
              <span
                style="display:block;"
                @click="logout"
              >Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Message } from 'element-ui';
import mixin from './mixin';
import maindrop from './components/DropDownContainer';
import detaillist from './components/detailList';
export default {
  components: {
    maindrop,
    detaillist
  },
  mixins: [ mixin ],
  data() {
    return {
      defaultName: '中国电子信息产业集团',
      maxlength: 5,
      inputlist: [],
      input: '',
      tabPosition: 'left',
      staffIntroduction: {
        authorname: '张博文',
        inAJob: '前端开发部门'
      },
      themelist: [
        {
          src: 'theme.png',
          name: '黑色玄幻主题',
          checked: false,
          data: {
            titlestyle: {
              backstyle: '#ccc'
            }
          }
        },
        {
          src: 'theme.png',
          name: '白色清爽主题',
          checked: false,
          data: {}
        },
        {
          src: 'theme.png',
          name: '深蓝护眼主题',
          checked: false,
          data: {}
        }
      ],
      detaillist: Array(5).fill({
        image: 'http://p1.music.126.net/ql3nSwy0XKow_HAoZzRZgw==/109951163111196186.jpg?param=640y300',
        name: 'Ana milk',
        theme: 'A long sentence expresses details',
        time: '2019-11-11 21:00'
      })
    };
  },
  watch: {
    input(e) {
      if (e.length > 20) {
        Message({
          message: '超过长度',
          type: 'warning'
        });
        this.input = e.substr(0, 20);
      }
    }
  },
  methods: {
    checkstyle(e) {
      console.log(e);
    },
    checknames(e) {
      this.defaultName = e.checkname;
    },
    handleIconClick() {
      this.inputlist.unshift(this.input);
      if (this.inputlist.length > this.maxlength) {
        this.inputlist.pop();
      }
      this.creal('input');
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("../../../assets/font/fontface/font.css");
.searchicon {
  font-size: 20px;
  cursor: pointer;
  :hover {
    color: #000;
  }
}
.themedropdown {
  list-style: none;
  padding: 0;
  margin: 0;
  :hover {
    background-color: #dcdcdc;
  }
  > :last-child {
    margin-bottom: 0;
  }
  li {
    cursor: pointer;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    > :first-child {
      margin-right: 5px;
    }
    p {
      margin: 0;
      font-size: 10px;
    }
  }
}
.theme {
  padding-right: 30px;
}
.el-dropdown-menu {
  padding: 20px;
}
.pagemaisns {
  background-color: #fff;
  // background-image: linear-gradient(to right, #283951, #322444);
  min-height: 50px;
  max-height: 50px;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.1fr 1.5fr 6fr 2fr 4fr;
  grid-gap: 10px;
  grid-template-areas: "pl lo dc sc us";
}
.Placeholder {
  grid-area: pl;
}
.log {
  grid-area: lo;
  background-image: url("../../../assets/logo/wslogo.png");
  background-repeat: no-repeat;
  background-size: 90% 60%;
  background-position: center;
  /*width: 130px;*/
  /*margin-left: 10px;*/
}
.DynamicName {
  display: flex;
  grid: dc;
  align-items: center;
  padding-left: 20px;
  letter-spacing: 2.3px;
  .fontpont {
    cursor: pointer;
    .font {
      font-family: "montserratr";
      font-size: 16.5px;
      font-weight: 900;
      color: #333333;
      i {
        font-style: Regular !important;
      }
      span:nth-of-type(1) {
        position: relative;
        width: 20px;
        height: 20px;
        display: inline-block;
      }
      span:nth-of-type(1)::before {
        content: "";
        position: absolute;
        width: 0;
        height: 20px;
        top: 0;
        left: 2px;
        border: 2px solid #cf0c10;
        border-radius: 10px;
        transform: rotate(30deg);
      }
      span:nth-of-type(1)::after {
        content: "";
        position: absolute;
        width: 0;
        height: 20px;
        top: 0;
        left: 16px;
        border: 2px solid #080367;
        border-radius: 10px;
        transform: rotate(30deg);
      }
    }
    .fontlast {
      letter-spacing: 3px;
      font-family: "montserratr";
      font-size: 14.5px;
      font-weight: 100;
      color: #333333;
    }
  }
  > p {
    padding: 0;
    margin: 0;
    display: block;
  }
}
.users::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 49px 49px 40px;
  border-color: #080367 #080367 #080367 #fff;
  background-color: #fff;
}
.users {
  cursor: pointer;
  grid-area: us;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #080367;
  position: relative;
  top: 0;
  left: 0;
  > .theme {
    flex: 1;
    order: 2;
  }
  > :nth-child(2) {
    flex: 2;
    order: 0;
    display: flex;
    justify-content: center;
  }
  > :nth-child(3) {
    flex: 3;
    order: 1;
  }
  .topbell {
    // margin-right: 20px;
    font-size: 18px;
    color: #fff;
  }
}
.scrrolbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-area: sc;
}
.right-menu {
  float: right;

  &:focus {
    outline: none;
  }
  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    font-size: 18px;
    color: #5a5e66;
    vertical-align: text-bottom;
    &.hover-effect {
      cursor: pointer;
      transition: background 0.3s;
      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
  }
  .avatar-container {
    margin-right: 30px;
    .avatar-wrapper {
      margin-top: 5px;
      position: relative;
      display: flex;
      > :nth-child(2) {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        > p {
          padding: 0;
          margin: 0;
          color: #fff;
          font-weight: 900;
          font-style: Regular;
        }
        > p:nth-of-type(1) {
          font-size: 13px;
        }
        > p:nth-of-type(2) {
          font-size: 8px;
          margin-top: 3px;
        }
      }
    }
  }
}
@media only screen and(max-width: 600px) {
  .pagemaisns {
    background-color: #fff;
    // background-image: linear-gradient(to right, #283951, #322444);
    min-height: 50px;
    max-height: 50px;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1px;
    grid-template-areas: " lo us";
  }
  .scrrolbar {
    display: none;
  }
}
/deep/ .el-avatar>img{
  width:100%!important;
}
</style>
