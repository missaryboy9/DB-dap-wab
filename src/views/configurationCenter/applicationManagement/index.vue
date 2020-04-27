<template>
  <div class="applicationManagement">
    <glb-diadlog :show.sync="show">
      <p v-for="item in 5">2222</p>
      <add>
      </add>
    </glb-diadlog>
    <el-button @click="Switch">Switch</el-button>
    <el-button @click="getnode">getnode</el-button>
    <glb-pagination
      :current-page.sync="currentPage"
      :articles-per-page="10"
      :totaldate="51"
    >
    </glb-pagination>
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

export default {
  components: {
    // newapplication,
    // filtermain,
    globaldialog

  },
  mixins: [ minins ],
  data() {
    return {
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
      ]
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

  methods: {
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
