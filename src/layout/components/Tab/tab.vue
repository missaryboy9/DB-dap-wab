<!--<template>-->
  <!--<div-->
    <!--ref="tab"-->
    <!--class="tab"-->
  <!--&gt;-->
    <!--<a-->
      <!--v-show="isIcon"-->
      <!--class="icon lefticon el-icon-arrow-left"-->
      <!--@click="leftMove"-->
    <!--&gt;-->
    <!--</a>-->
    <!--<div-->
      <!--ref="content"-->
      <!--class="content"-->
    <!--&gt;-->
      <!--<el-tag-->
        <!--v-for="item in items"-->
        <!--ref="tag"-->
        <!--:key="item.label"-->
        <!--effect="plain"-->
        <!--:closable="item.closable"-->
        <!--:style="$route.path === item.path?activeStyle :''"-->
        <!--@close="closePath(item)"-->
        <!--@click="openPath(item)"-->
      <!--&gt;-->
        <!--{{ item.label }}-->
      <!--</el-tag>-->
    <!--</div>-->
    <!--<a-->
      <!--v-show="isIcon"-->
      <!--class="icon righticon el-icon-arrow-right"-->
      <!--@click="rightMove"-->
    <!--&gt;-->
    <!--</a>-->
  <!--</div>-->
<!--</template>-->
<template>
  <el-tabs v-model="tab"  @tab-click="openPath" closable class="nav-tab">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      items: [ // tag数组
        {
           label: '首页',
           closable: false,
           path: '/'
        }
      ],
      activeStyle: { // 激活的tag状态
        backgroundColor: '#080367',
        color: '#fff'
      },
      isfiexde: true,
      isIcon: false,
      addWidth: 200 // 要给滑块增加的宽度
    }
  },
  watch: {
    // 监听路由变化，从而给tag做push操作
    '$route': function (to) {
      var path = to.fullPath
      var flag = this.items.some(item => {
        return item.path === path
      })
      // 如果tag数组不存在变化的路由才能新增
      !flag && this.items.push({
        label: to.name,
        closable: true,
        path: to.fullPath
      })
      // 实现显示滑块按钮功能
        var parentWidth = this.$refs.tab.offsetWidth
        var sonWidth = this.$refs.content.offsetWidth + this.addWidth
        if (sonWidth > parentWidth) {
           this.isIcon = true
           this.$refs.content.style.left = 25 + 'px'
        }
    }
  },
  created() {
    // 页面刷新完毕后显示刷新前的状态 tabList保存的是刷新前的状态
    var tabList = JSON.parse(window.sessionStorage.getItem('tabList'));
    if (tabList !== null) {
     var flag = tabList.some(item => {
        return item.path === this.$route.fullPath
     })
     !flag && tabList.push({
        label: this.$route.name,
        closable: true,
         path: this.$route.fullPath
     })
      this.items = tabList
     }
  },
  mounted() {
    //  需要保存当前打开的tabs的位置，刷新后按刷新前的顺序展示
    //  使用js的sessionStorage保存刷新页面前的数据
    window.addEventListener('beforeunload', e => {
      sessionStorage.setItem('tabList', JSON.stringify(this.items))
    })
  },
  methods: {
    // 关闭单个tab时
    closePath(info) {
      // 获取到name之后与items中的项的label做对比，并找到相同的返回当前项的index,进行删除
      var name = info.label
      var index = this.items.findIndex((item) => item.label === name)
      this.items.splice(index, 1)
      //  如果当前tab是激活状态显示当前路由的前一个路由，当tab不能是最后一个
      if (this.$refs.tag[index].$el.style.backgroundColor === "rgb(8, 3, 103)") {
         this.$router.push(this.items[ index - 1 ].path)
      }
        console.log(this.addWidth);
        // 实现隐藏滑块按钮功能
        console.log(this.$refs.content.offsetWidth);
        var parentWidth = this.$refs.tab.offsetWidth
        var sonWidth = this.$refs.content.offsetWidth - this.$refs.tag.length
        console.log(parentWidth);
        console.log(sonWidth);
        if (sonWidth < parentWidth) {
           this.isIcon = false
           this.$refs.content.style.left = 0 + 'px'
        }
    },
    // 点击tab跳到相应的路由
    openPath(info) {
      this.$router.push(info.path)
    },
    rightMove() {
      var parentWidth = this.$refs.tab.parentNode.offsetWidth
      var sonWidth = this.$refs.content.offsetWidth + 25
      // 计算停止向左滚动距离
      var stepEnd = this.$refs.tag.length * 3 + (sonWidth - parentWidth)
      var leftMovelength = Math.abs(this.$refs.content.offsetLeft)
      if (sonWidth > parentWidth && leftMovelength < stepEnd) {
        var length = this.$refs.content.offsetLeft
        this.$refs.content.style.left = length - 10 + "px"
      }
    },
    leftMove() {
      console.log(this.$refs.content.offsetLeft);
      // // 计算停止向右滚动距离
      if (this.$refs.content.offsetLeft < 24) {
        var length = this.$refs.content.offsetLeft
        this.$refs.content.style.left = length + 10 + "px"
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .nav-tab{
    padding: 0 15px;
  }
  /deep/   .el-tabs__header{
    margin:0  !important;
  }
// 设置tab页
/deep/ .el-tabs__content {
  display: none !important;
}
/deep/ .el-tabs__nav-wrap {
  width: 100%;
}
/deep/ .el-tabs--border-card > .el-tabs__header {
  background-color: #eaebf4;
}
/deep/ #tab-0 > .el-icon-close {
  display: none;
}
  /deep/ .el-tabs__nav-wrap::after{
    height: 1px;
  }
  /deep/  .el-tabs__active-bar{
    height: 1px;
  }
  /deep/.el-tabs__item .el-icon-close{
    /*margin-left:20px;*/
  }
.fiexed {
  position: fixed;
  right: 40px;
  top: 50px;
  z-index: 9999;
  width: auto !important;
  transform: translateX(15%);
  border-radius: 10px;
  flex-direction: column;
  height: auto !important;
  background-color: rgba($color: #000000, $alpha: 0.3) !important;
  .el-tag {
    height: 30px;
    width: 100%;
  }
}
.tab {
  width: 100%;
  height: 40px;
  background-color: #eaebf4;
  padding: 5px 0px;
  position: relative;
  overflow: hidden;
  .content {
    position: absolute;
    height: 30px;
    top: 5px;
    left: 0px;
    display: flex;
    transition: all 0.2s;
  }
  .icon {
    width: 25px;
    height: 100%;
    font-size: 24px;
    color: #666;
    background-color: #fff;
    position: absolute;
    top: 0px;
    padding-top: 5px;
    z-index: 999;
    &::before {
      vertical-align: middle;
    }
  }
  .righticon {
    right: 0px;
  }
  .lefticon {
    left: 0px;
  }
}
/deep/ .el-tag {
  height: 100%;
  margin-right: 3px;
  &:hover {
    cursor: pointer;
  }
}
</style>
