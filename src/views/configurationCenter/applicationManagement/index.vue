<template>
  <div class="applicationManagement">


    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>平台组件</span>
        <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
      </div>
      <el-row >
        <el-col :span="6"  v-for="(item,index) in itemList" :key="index">
          <el-card class="box-card"  shadow="hover" > {{item.name }}</el-card>
        </el-col>
      </el-row>

    </el-card>
    <!--<glb-diadlog :show.sync="show">-->
      <!--<p v-for="item in 5">2222</p>-->
      <!--<add>-->
      <!--</add>-->
    <!--</glb-diadlog>-->
    <!--<el-button @click="Switch">Switch</el-button>-->
    <!--<el-button @click="getnode">getnode</el-button>-->
    <!--<div id="graphic">-->
    <!--</div>-->
    <!--<el-button @click="graphic">graphic</el-button>-->
    <!--<el-row>-->
      <!--<el-col :span="2">-->
        <!--<el-input v-model="inputnum"></el-input>-->
      <!--</el-col>-->
    <!--</el-row>-->
    <!--<glb-pagination-->
      <!--:current-page.sync="currentPage"-->
      <!--:articles-per-page="10"-->
      <!--:totaldate="51"-->
    <!--&gt;-->
    <!--</glb-pagination>-->

  </div>
</template>
<script type="text/ecmascript-6">
/**
 *  articlesPerPage: {
      type: Number,
      default: 10
    },
    totaldate: {
      type: Number,
      default: 31
    },
    currentPage: {
      type: Number,
      default: 1
    }
 */
import { getnodes } from '@/common/api/getbasenode'
// import {
//   newapplication,
//   filtermain
// } from '../components';
import axios from 'axios'
import globaldialog from '@/components/Globdialog/index';
import minins from './components'
import GVerify from '@/common/js/graphic'

export default {
  components: {
    // newapplication,
    // filtermain,
    globaldialog

  },
  mixins: [ minins ],
  data() {
    return {
      itemList:[
        {
          name:'配置中心',
          path:'',
        },
        {
          name:'缓存管理',
          path:'',
        },
        {
          name:'自动化部署',
          path:'',
        },
        {
          name:'微服务网关',
          path:'',
        },
      ],
      articlesPerPage: 10,
      totaldate: 21,
      currentPage: 1,
      show: false,
      modulelist: [
        {
          name: 'newapplication',
          sendpropos: '',
          getemit: ''
        },
        {
          name: 'filtermain',
          sendpropos: '',
          getemit: ''
        }
      ],
      GVerifymode: '',
      inputnum: ''
    };
  },
  watch: {
    currentPage(val) {
      alert(JSON.stringify({
        currentPage: this.currentPage,
        totaldate: this.totaldate,
        articlesPerPage: 10
      }))
    }
  },
  mounted() {
    this.GVerifymode = GVerify({
      id: 'graphic'
    })
  },
  methods: {
    graphic() {
      alert(this.GVerifymode(this.inputnum))
    },
    getnode() {
      // let params = [
      //   { name: 1 },
      //   { name: 1 }
      // ]
      // getnodes(params).then(res => { console.log(res) }).catch(rej => { alert(JSON.stringify(rej)) })
    },
    Switch() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped lang="scss">
#graphic {
  width: 100px;
  height: 30px;
}
// .applicationManagement {
//   padding: 15px;
//   display: flex;
//   flex-direction: column;
//   > :last-child {
//     overflow: auto;
//     height: 80vh;
//     > .happy-scroll-content {
//       display: block !important;
//     }
//   }
// }
</style>
