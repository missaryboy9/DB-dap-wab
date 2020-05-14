import Vue from "vue";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/zh-CN"; // lang i18n

import "@/styles/index.scss"; // global css
import App from "./App";
import store from "./store";
import router from "./router";
import addrouter from "./router/addrouter";
import initecharts from "./common/js/initecarts";
import search from "./components/search/search.js";
import glbcomponent from "./components/glbindex.js";
import bus from '@/common/js/bus.js'
// import 'lib-flexible';
import "@/icons"; // icon
// import '@/permission' // permission control
import "@/assets/iconfont/iconfont.css"; // global css

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from "../mock";
if (process.env.NODE_ENV === "production") {
  mockXHR();
}
import './element-variables.scss'
// set ElementUI lang to EN

Vue.use(ElementUI, { locale });
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
// set routeraddter
Vue.use(addrouter, { router, store });
Vue.use(initecharts);
Vue.use(search);
Vue.use(glbcomponent);
Vue.use(bus);
Vue.config.productionTip = false;

import DataV from '@jiaminghi/data-view'
Vue.use(DataV)
import vtree from "./components/VueTree/index.js";
Vue.use(vtree);

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import './styles/vxe-table.scss'
Vue.use(VXETable)

// 导入树形表格
import TreeTable from 'vue-table-with-tree-grid'
Vue.component('tree-table', TreeTable) // 注册全局组件
// 给 vue 实例挂载全局窗口对象
Vue.prototype.$XModal = VXETable.modal

import echarts from "echarts";
Vue.prototype.$echarts = echarts
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
