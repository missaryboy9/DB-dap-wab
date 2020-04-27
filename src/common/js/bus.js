import Vue from "vue";

let bus = new Vue();

export default {
  install: function(Vue) {
    Vue.prototype.$bus = bus;
  }
};
